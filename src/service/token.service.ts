import {getContracts} from "../config/ludex.config";

export function findTokenAddress() {
    const contracts = getContracts();
    return contracts.MockUSDC.address;
}