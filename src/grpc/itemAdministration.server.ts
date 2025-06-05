import * as grpc from '@grpc/grpc-js';
import {
    IitemAdministrationServiceServer,
    itemAdministrationServiceService
} from "../generated/itemAdministration_grpc_pb";
import {checkOnSaleByItemId, resumeSaleByItemId, suspendSaleByItemId} from "../service/item.service";
import {isOnSaleResponse, itemResponse} from "../generated/itemAdministration_pb";

const itemAdministrationServiceImpl: IitemAdministrationServiceServer = {
    suspendItem: async (call, callback) => {
        try {
            const itemId = BigInt(call.request.getItemid());
            const suspendItemIds = await suspendSaleByItemId(itemId);
            if (!suspendItemIds.includes(itemId)) {
                console.error("itemId not found in suspendItemIds");
                return callback(new Error("itemId not found in suspendItemIds"), null);
            }
            const suspendItemIdsString = suspendItemIds.map(id => id.toString());

            const response = new itemResponse();
            response.setItemidsList(suspendItemIdsString);

            callback(null, response);

        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            else {
                console.error("Unknown error");
            }
            return callback(new Error("Failed to suspend item by gRPC call"), null);
        }
    },
    resumeItem: async (call, callback) => {
        try {
            const itemId = BigInt(call.request.getItemid());
            const resumeItemIds = await resumeSaleByItemId(itemId);
            if (!resumeItemIds.includes(itemId)) {
                console.error("itemId not found in resumeItemIds");
                return callback(new Error("itemId not found in resumeItemIds"), null);
            }
            const resumeItemIdsString = resumeItemIds.map(id => id.toString());

            const response = new itemResponse();
            response.setItemidsList(resumeItemIdsString);

            callback(null, response);

        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            else {
                console.error("Unknown error");
            }
            return callback(new Error("Failed to resume item by gRPC call"), null);
        }
    },
    checkOnSale: async (call, callback) => {
        try {
            const itemId = BigInt(call.request.getItemid());
            const isOnSale = await checkOnSaleByItemId(itemId);

            const response = new isOnSaleResponse();
            response.setIsonsale(isOnSale);

            callback(null, response);

        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            else {
                console.error("Unknown error");
            }
            return callback(new Error("Failed to check if the item is on sale"), null);
        }
    }
};

export async function startGrpcServer() {
    const server = new grpc.Server();

    server.addService(itemAdministrationServiceService, itemAdministrationServiceImpl);

    await new Promise<void>((resolve, reject) => {
        server.bindAsync('0.0.0.0:50052', grpc.ServerCredentials.createInsecure(), (err, port) => {
            if (err) {
                return reject(err);
            }
            console.log(`gRPC AuthService running on port ${port}`);
            // deprecation
            // server.start();
            resolve();
        });
    });
}