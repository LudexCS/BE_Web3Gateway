import {Request} from "express";
import * as ludex from "ludex";
import {createRelayer, handleRelayRequest} from "../service/relay.service";

export async function relayControl(req: Request) {
    console.log("1");
    const relayRequest = ludex.relay.deserializeRelayRequest(req.body);
    console.log("2");
    const relayer = await createRelayer();
    console.log("3");
    return await handleRelayRequest(relayer, relayRequest);
}