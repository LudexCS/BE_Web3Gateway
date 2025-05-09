import * as grpc from '@grpc/grpc-js';
import { storeIdRequest, BoolResult } from '../generated/storeId_pb';
import { StoreIdServiceClient } from '../generated/storeId_grpc_pb';
const STORE_ID_SERVICE_NAME = process.env.MANAGEMENT_INNER as string || "default";

const storeIdServiceClient = new StoreIdServiceClient(
    STORE_ID_SERVICE_NAME,
    grpc.credentials.createInsecure()
);

export const storeWeb3Id = (
    gameId: number,
    itemId: bigint,
    sharerIds: bigint[]
): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const request = new storeIdRequest();
        request.setGameid(gameId);
        request.setItemid(String(itemId));
        if (Array.isArray(sharerIds)) {
            request.setShareridsList(sharerIds.map(id => String(id)));
        } else {
            request.setShareridsList([String(sharerIds)]);
        }

        storeIdServiceClient.storeWeb3Id(request, (err, res: BoolResult) => {
            if (err) {
                console.error('gRPC Error (storeWeb3Id):', err);
                return reject(err);
            }
            resolve(res.getSuccess());
        });
    });
};