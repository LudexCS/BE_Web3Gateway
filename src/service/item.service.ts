import {RegisterItemDto} from "../dto/item.dto";
import * as ludex from "ludex";
import fnv1a from "fnv1a";
import {Contracts, createChainConfig, createLudexConfig, getContracts, getWallet} from "../config/ludex.config";

export async function registerItem(itemDto: RegisterItemDto) {
    const itemName: string = itemDto.itemName;
    const seller: ludex.Address = ludex.Address.create(itemDto.seller);
    const sharers: bigint[] =
        (itemDto.sharers as string[]).map(entry => BigInt(entry))
    const itemPrice: bigint = BigInt(itemDto.itemPrice);
    const shareTerms: number[] = itemDto.shareTerms;

    const contracts: Contracts = getContracts();
    const chainConfig = createChainConfig();
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
