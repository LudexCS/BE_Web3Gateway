import * as ludex from "ludex";
import { ethers } from "ethers";
import {contracts} from "./contracts.config";

export type Contracts = Record<string, {address: string; abi: any}>;

export const mainTokenAddress: string = process.env.MAIN_TOKEN_ADDRESS as string;

export const privateChainConfig: ludex.configs.ChainConfig = {
    chainId: "0xaa37dc",
    chainName: "Optimism Sepolia",
    rpcUrls: [process.env.RPC_URL as string],
    nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
    },
};

export const publicChainConfig: ludex.configs.ChainConfig = {
    chainId: "0xaa37dc",
    chainName: "Optimism Sepolia",
    rpcUrls: ["https://sepolia.optimism.io/"],
    nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18,
    },
};

export function createLudexConfig(contracts: Contracts): ludex.configs.LudexConfig
{
    return {
        sellerRegistryAddress: contracts.SellerRegistry.address,
        itemRegistryAddress: contracts.ItemRegistry.address,
        priceTableAddress: contracts.PriceTable.address,
        profitEscrowAddress: contracts.ProfitEscrow.address,
        paymentProcessorAddress: contracts.PaymentProcessor.address,
        ledgerAddress: contracts.Ledger.address,
        storeAddress: contracts.Store.address,
        sellerProxyAddress: contracts.SellerProxy.address,
        purchaseProxyAddress: contracts.PurchaseProxy.address,
        forwarderAddress: contracts.ERC2771Forwarder.address
    };
}

export function getContracts(): Contracts {
    const deploymentMap: Contracts = {};
    const latestDeployment = contracts[contracts.length - 1].deployments;

    for (const [name, { address, abi }] of Object.entries(latestDeployment)) {
        deploymentMap[name] = { address, abi };
    }
    return deploymentMap;
}

export function getWallet() {
    if (!process.env.RPC_URL) {
        throw new Error("RPC URL is not defined");
    }

    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL as string);

    if (!process.env.MNEMONIC_CODE) {
        throw new Error("MNEMONIC_CODE is not defined");
    }

    return ethers.Wallet.fromPhrase(
        process.env.MNEMONIC_CODE,
        provider);
}