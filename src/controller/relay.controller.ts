import {Request, Response} from "express";
import * as ludex from "ludex";
import {createRelayer, handleRelayRequest} from "../service/relay.service";

export async function relayControl(req: Request, res: Response) {
    const relayRequest = ludex.relay.deserializeRelayRequest(req.body);
    const relayer = await createRelayer();
    await handleRelayRequest(relayer, relayRequest, res);
}