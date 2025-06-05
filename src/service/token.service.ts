import {getContracts, mainTokenAddress} from "../config/ludex.config";

export function findTokenAddress() {
    const contracts = getContracts();
    return mainTokenAddress ?? contracts.MockUSDC.address;
}