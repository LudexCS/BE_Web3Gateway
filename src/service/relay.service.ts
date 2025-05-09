import {Contracts, createChainConfig, createLudexConfig} from "../config/ludex.config";
import * as ludex from "ludex";
import {ethers} from "ethers";

export async function createRelayer(contracts: Contracts, wallet: ethers.Wallet) {
    const ludexConfig = createLudexConfig(contracts);

    const relayer =
        ludex.relay.createLudexRelayMaster(
            ludexConfig,
            ludex.Address.create(contracts["ERC2771Forwarder"].address),
            wallet);

    return relayer;
}

export async function handleRelayRequest(
    relayer: ludex.relay.RelayMaster,
    relayRequest: ludex.relay.RelayRequest<any>
): Promise<any> {
    try {
        const args = await new Promise<any>((resolve, reject) => {
            relayer.acceptRequest(relayRequest, resolve, reject);
        });

        return args;
    } catch (error) {
        console.error("Relay failed:", (error as Error).message);
        throw error;
    }
}