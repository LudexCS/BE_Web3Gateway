import * as grpc from '@grpc/grpc-js';
import {
    IitemAdministrationServiceServer,
    itemAdministrationServiceService
} from "../generated/itemAdministration_grpc_pb";
import {checkOnSaleByItemId, resumeSaleByItemId, suspendSaleByItemId} from "../service/item.service";
import {isOnSaleResponse, itemResponse} from "../generated/itemAdministration_pb";
import {IPurchaseServiceServer, PurchaseServiceService} from "../generated/delegatePurchase_grpc_pb";
import {DelegatedPurchaseDto} from "../dto/delegate.dto";
import {delegatedPurchase} from "../service/delegate.service";
import {PurchaseResponse} from "../generated/delegatePurchase_pb";

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
                console.error("Suspend Item Error: " + error.message);
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
                console.error("Resume Item Error: " + error.message);
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
                console.error("CheckOnSale Error: " + error.message);
            }
            else {
                console.error("Unknown error");
            }
            return callback(new Error("Failed to check if the item is on sale"), null);
        }
    }
};

const iPurchaseServiceImpl: IPurchaseServiceServer = {
    delegatedPurchase: async (call, callback) => {
        try {
            const itemId = call.request.getItemid();
            const ownerId = call.request.getOwnerid();
            const dto: DelegatedPurchaseDto = {itemId: itemId, ownerId: ownerId};
            const purchaseId = await delegatedPurchase(dto);

            const response = new PurchaseResponse();
            response.setPurchaseid(purchaseId);

            callback(null, response);
        } catch (error) {
            if (error instanceof Error) {
                console.error("DelegatedPurchase Error: " + error.message);
            }
            else {
                console.error("Unknown error");
            }
            return callback(new Error("Failed to process delegated purchase request"), null);return callback(new Error("Failed "), null);
        }
    }
};

export async function startGrpcServer() {
    const server = new grpc.Server();

    server.addService(itemAdministrationServiceService, itemAdministrationServiceImpl);
    server.addService(PurchaseServiceService, iPurchaseServiceImpl);

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