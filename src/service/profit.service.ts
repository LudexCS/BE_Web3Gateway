import * as ludex from 'ludex';
import {Contracts, createLudexConfig, getContracts, getWallet, privateChainConfig} from "../config/ludex.config";
import {findTokenAddress} from "./token.service";
import {getDelegatedItems} from "../repository/redis.repository";

export async function findWholePendingProfit(): Promise<bigint> {
    const contracts: Contracts = getContracts();
    const chainConfig = privateChainConfig;
    const ludexConfig = createLudexConfig(contracts);
    const wallet = getWallet();

    const token = findTokenAddress();

    const tokenAddress = ludex.Address.create(token);

    const profitEscrow =
        ludex.facade
            .createServiceFacade(chainConfig, ludexConfig, wallet)
            .serviceAccessProfitEscrow();

    return await profitEscrow.getWholePendingProfit(tokenAddress);
}

export async function finalizePendingProfit() {
    const contracts: Contracts = getContracts();
    const chainConfig = privateChainConfig;
    const ludexConfig = createLudexConfig(contracts);
    const wallet = getWallet();

    const token = findTokenAddress();

    const tokenAddress = ludex.Address.create(token);

    const profitEscrow =
        ludex.facade
            .createServiceFacade(chainConfig, ludexConfig, wallet)
            .serviceAccessProfitEscrow();

    const itemIds: bigint[] = (await getDelegatedItems()).map(id => BigInt(id));

    const batch: bigint[] = [];
    for (let i = 0; i < itemIds.length; i++)
    {
        batch.push(itemIds[i]);
        if((i + 1) % 50 === 0 || i === itemIds.length - 1)
        {
            await profitEscrow.settlePendingProfit(tokenAddress, batch);
            batch.length = 0;
        }
    }

    console.log("Profit settlement finished");
}