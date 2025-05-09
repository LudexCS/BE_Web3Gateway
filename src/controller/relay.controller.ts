import {Request} from "express";
import * as ludex from "ludex";
import {createRelayer, handleRelayRequest} from "../service/relay.service";

export async function relayControl(req: Request) {
    const relayRequest: ludex.relay.RelayRequest<any> = ludex.relay.deserializeRelayRequest(req.body);
    const relayer = await createRelayer();
    return await handleRelayRequest(relayer, relayRequest);
}