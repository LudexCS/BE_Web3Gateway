import {createLudexConfig, createPrivateChainConfig, getContracts} from "../config/ludex.config";

export function getConfig() {
    const chainConfig = createPrivateChainConfig();
    const contracts = getContracts();
    const ludexConfig = createLudexConfig(contracts);
    return {chainConfig, ludexConfig};
}