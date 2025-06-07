import * as ludex from 'ludex';
import {Contracts, createLudexConfig, getContracts, getWallet, privateChainConfig} from "../config/ludex.config";
import {findTokenAddress} from "./token.service";
import {clearDelegatedItems, getDelegatedItems} from "../repository/redis.repository";

export async function findWholePendingProfit(): Promise<string> {
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

    const profit: bigint = await profitEscrow.getWholePendingProfit(tokenAddress);
    const raw = profit.toString();
    const padded = raw.padStart(7, "0");
    const integerPart = padded.slice(0, -6);
    const decimalPart = padded.slice(-6).replace(/0+$/, "");
    return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
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

    await clearDelegatedItems();

    console.log("Profit settlement finished");
}