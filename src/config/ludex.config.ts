import * as ludex from "ludex";
import {ethers, HDNodeWallet} from "ethers/lib.esm";

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

export async function getContracts(): Promise<Contracts> {
    return await (
        fetch("http://localhost:3000/contracts")
            .then(res => res.json()));
}

export function getWallet(): HDNodeWallet {
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL as string);

    if (!process.env.MNEMONIC_CODE) {
        throw new Error("MNEMONIC_CODE is not defined");
    }

    const hdNode = ethers.HDNodeWallet.fromPhrase(process.env.MNEMONIC_CODE);
    return hdNode.connect(provider);
}