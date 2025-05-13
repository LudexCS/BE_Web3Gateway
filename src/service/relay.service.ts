import {Contracts, createLudexConfig, getContracts, getWallet} from "../config/ludex.config";
import {Response} from "express";
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

export async function handleRelayRequest(relayer: ludex.relay.RelayMaster, relayRequest: ludex.relay.RelayRequest<any>, res: Response): Promise<any> {
    try {
        console.log("relayRequesting");
        const args = await relayer.acceptRequest(
            relayRequest,
            (args) => {
                console.log(`args: ${JSON.stringify(args)}`);
                res.json({ args });
            },
            (error) => {
                console.log(`error: ${error.message}`);
                res.json({ error: error.message });
            });

        return args;
    } catch (error) {
        console.error("Relay failed:", (error as Error).message);
        throw error;
    }
}

export function stringifyBigInts(obj: any): any {
    if (typeof obj === 'bigint') {
        return obj.toString();
    } else if (Array.isArray(obj)) {
        return obj.map(stringifyBigInts);
    } else if (obj !== null && typeof obj === 'object') {
        return Object.fromEntries(
            Object.entries(obj).map(([k, v]) => [k, stringifyBigInts(v)])
        );
    } else {
        return obj;
    }
}