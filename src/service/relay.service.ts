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
    console.log("relayRequesting");
    await relayer.acceptRequest(
        relayRequest,
        (args) => {
            console.log(`args: ${JSON.stringify(args)}`);
            res.status(200).json({ args });
        },
        (error) => {
            console.log(`error: ${error.message}`);
            res.status(500).json({ error: error.message });
        });
}