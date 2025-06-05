import {RegisterItemDto} from "../dto/item.dto";
import * as ludex from "ludex";
import fnv1a from "fnv1a";
import {
    Contracts,
    privateChainConfig,
    createLudexConfig,
    getContracts,
    getWallet
} from "../config/ludex.config";

export async function registerItem(itemDto: RegisterItemDto) {
    const itemName: string = itemDto.itemName;
    const seller: ludex.Address = ludex.Address.create(itemDto.seller);
    const sharers: bigint[] =
        (itemDto.sharers as string[]).map(entry => BigInt(entry))
    const itemPrice: bigint = (function () {
        const parts = itemDto.itemPrice.split('.');
        if(parts.length === 1)
        {
            return BigInt(itemDto.itemPrice) * (10n ** 18n);
        }
        else if (parts.length === 2)
        {
            const intPart = BigInt(parts[0]) * (10n ** 18n);
            const decimalPartLength = parts[1].length;
            const decimalPart =
                BigInt(parts[1]) * (10n ** (18n - BigInt(decimalPartLength)));
            return intPart + decimalPart;
        }
        else
        {
            throw new Error(`Invalid number format given: ${itemDto.itemPrice}`);
        }
    })();
    const shareTerms: number[] = itemDto.shareTerms;

    const contracts: Contracts = getContracts();
    const chainConfig = privateChainConfig;
    const ludexConfig = createLudexConfig(contracts);
    const wallet = getWallet();

    const facade =
        ludex.facade.createServiceFacade(
            chainConfig,
            ludexConfig,
            wallet);

    const itemRegistry = facade.serviceAccessItemRegistry();

    const nameHash = await itemRegistry.getNameHash(itemName);
    const shares: Array<[bigint, number]> = [];

    for (const [index, shareTerm] of shareTerms.entries())
    {
        const shareTermID =
            BigInt(fnv1a(`${nameHash}@shareTerm@${index}@${shareTerm}`));

        shares.push([shareTermID, shareTerm]);
    }

    const [itemId, sharerIds] =
        await itemRegistry.registerItem(
            nameHash,
            seller,
            sharers,
            itemPrice,
            shares);

    return { itemId, sharerIds };
}

export async function checkOnSaleByItemId(itemId: bigint) {
    const contracts: Contracts = getContracts();
    const chainConfig = privateChainConfig;
    const ludexConfig = createLudexConfig(contracts);

    const itemRegistry =
        ludex.facade
            .createWeb2UserFacade(chainConfig, ludexConfig)
            .readonlyAccessItemRegistry();

    return await itemRegistry.checkOnSale(itemId);
}

/**
 * Suspends the sale of an item identified by its item ID.
 *
 * @param {bigint} itemId - The unique identifier of the item whose sale is to be suspended.
 * @return {Promise<bigint[]>} 정지된 item Id array.
 */
export async function suspendSaleByItemId(itemId: bigint) {
    const contracts: Contracts = getContracts();
    const chainConfig = privateChainConfig;
    const ludexConfig = createLudexConfig(contracts);

    const wallet = getWallet();

    const itemRegistry =
        ludex.facade
            .createAdminFacade(chainConfig, ludexConfig, wallet)
            .adminAccessItemRegistry();

    return await itemRegistry.suspendItemSale(itemId);
}

/**
 * Resumes the sale of an item by its unique identifier.
 *
 * @param {bigint} itemId - The unique identifier of the item whose sale is to be resumed.
 * @return {Promise<bigint[]>} 판매 중인 item Id array.
 */
export async function resumeSaleByItemId(itemId: bigint) {
    const contracts: Contracts = getContracts();
    const chainConfig = privateChainConfig;
    const ludexConfig = createLudexConfig(contracts);

    const wallet = getWallet();

    const itemRegistry =
        ludex.facade
            .createAdminFacade(chainConfig, ludexConfig, wallet)
            .adminAccessItemRegistry();

    return await itemRegistry.resumeItemSale(itemId);
}