import {Contracts, createLudexConfig, getContracts, getWallet} from "../config/ludex.config";
import * as ludex from "ludex";

export async function createRelayer() {
    const contracts: Contracts = getContracts();
    const ludexConfig = createLudexConfig(contracts);
    const wallet = getWallet();

    const relayer =
        ludex.relay.createLudexRelayMaster(
            ludexConfig,
            wallet);

    return relayer;
}

export async function handleRelayRequest(relayer: ludex.relay.RelayMaster, relayRequest: ludex.relay.RelayRequest<any>): Promise<any> {
    try {
        console.log("relayRequesting");
        const args = await new Promise<any>((resolve, reject) => {
            relayer.acceptRequest(relayRequest, resolve, reject);
        });

        return args;
    } catch (error) {
        console.log("relayFailed", (error as Error).message);
        console.error("Relay failed:", (error as Error).message);
        throw error;
    }
}