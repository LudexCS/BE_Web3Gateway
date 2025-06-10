import {DelegatedPurchaseDto, RegisterClaimPurchaseDto} from "../dto/delegate.dto";
import {findTokenAddress} from "./token.service";
import * as ludex from "ludex";
import {Contracts, createLudexConfig, getContracts, getWallet, privateChainConfig} from "../config/ludex.config";
import {storeDelegatedItem} from "../repository/redis.repository";

export async function delegatedPurchase(delegatedPurchaseDto: DelegatedPurchaseDto) {
    const token = ludex.Address.create(findTokenAddress());
    const itemId: bigint = BigInt(delegatedPurchaseDto.itemId);
    const ownerId: bigint = BigInt(delegatedPurchaseDto.ownerId);

    const contracts: Contracts = getContracts();
    const chainConfig = privateChainConfig;
    const ludexConfig = createLudexConfig(contracts);
    const wallet = getWallet();

    const purchaseProxy =
        ludex
            .facade
            .createServiceFacade(
                chainConfig,
                ludexConfig,
                wallet)
            .serviceAccessPurchaseProxy();

    const purchaseId =
        await purchaseProxy.purchaseItem(token, itemId, ownerId);

    // settle pending profit을 위해 redis에 itemId 저장
    await storeDelegatedItem(itemId.toString());

    return purchaseId.toString();
}

export async function registerClaimPurchase(registerClaimPurchaseDto: RegisterClaimPurchaseDto): Promise<{ ownerAddress: string, purchaseId: string }> {
    const ownerId = BigInt(registerClaimPurchaseDto.ownerId);
    const ownerAddress = ludex.Address.create(registerClaimPurchaseDto.ownerAddress);
    const purchaseIds = [ BigInt(registerClaimPurchaseDto.purchaseId) ];

    const contracts: Contracts = getContracts();
    const chainConfig = privateChainConfig;
    const ludexConfig = createLudexConfig(contracts);
    const wallet = getWallet();

    const purchaseProxy =
        ludex
            .facade
            .createServiceFacade(
                chainConfig,
                ludexConfig,
                wallet)
            .serviceAccessPurchaseProxy();

    const [resultOwnerAddress, resultPurchaseIDs] =
        await purchaseProxy.claimPurchaseIDs(
            ownerId,
            ownerAddress,
            purchaseIds);

    return { ownerAddress: resultOwnerAddress.stringValue, purchaseId: resultPurchaseIDs[0].toString() };
}