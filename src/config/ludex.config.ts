import * as ludex from "ludex";
import { ethers } from "ethers";
import {contracts} from "./contracts.config";

export type Contracts = Record<string, {address: string; abi: any}>;

export function createChainConfig (): ludex.configs.ChainConfig
{
    return {
        chainId: `0x${(31337).toString(16)}`,
        chainName: "Hardhat Testnet",
        rpcUrls: [process.env.RPC_URL as string],
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18
        }
    }
}

export function createLudexConfig(contracts: Contracts): ludex.configs.LudexConfig
{
    return {
        storeAddress: contracts["Store"].address,
        ledgerAddress: contracts["Ledger"].address,
        priceTableAddress: contracts["PriceTable"].address,
        sellerRegistryAddress: contracts["SellerRegistry"].address,
        itemRegistryAddress: contracts["ItemRegistry"].address
    };
}

export function getContracts(): Contracts {
    const deploymentMap: Contracts = {};
    const network = contracts.find(c => c.network === "op_sepolia"); // or make dynamic later

    if (!network) {
        throw new Error("No deployment found for specified network");
    }

    for (const [name, entries] of Object.entries(network.deployments)) {
        const latest = entries[entries.length - 1]; // use last (latest) entry
        deploymentMap[name] = {
            address: latest.address,
            abi: latest.abi
        };
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