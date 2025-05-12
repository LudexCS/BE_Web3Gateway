import * as ludex from "ludex";
import { ethers } from "ethers";
import {contracts} from "./contracts.config";

export type Contracts = Record<string, {address: string; abi: any}>;

export function createPrivateChainConfig (): ludex.configs.ChainConfig
{
    return {
        chainId: "0xAA37DC",
        chainName: "Optimism Sepolia",
        rpcUrls: ["https://sepolia.optimism.io/"],
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18
        }
    };
}

export function createPublicChainConfig (): ludex.configs.ChainConfig
{
    return {
        chainId: "0xAA37DC",
        chainName: "Optimism Sepolia",
        rpcUrls: ["https://sepolia.optimism.io/"],
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18
        }
    };
}

export function createLudexConfig(contracts: Contracts): ludex.configs.LudexConfig
{
    return {
        sellerRegistryAddress: contracts.SellerRegistry.address,
        itemRegistryAddress: contracts.ItemRegistry.address,
        priceTableAddress: contracts.PriceTable.address,
        paymentProcessorAddress: contracts.PaymentProcessor.address,
        ledgerAddress: contracts.Ledger.address,
        storeAddress: contracts.Store.address,
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
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL as string);

    if (!process.env.MNEMONIC_CODE) {
        throw new Error("MNEMONIC_CODE is not defined");
    }

    const hdNode = ethers.HDNodeWallet.fromPhrase(process.env.MNEMONIC_CODE);
    return hdNode.connect(provider);
}