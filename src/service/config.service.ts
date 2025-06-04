import {
    createLudexConfig,
    publicChainConfig,
    getContracts
} from "../config/ludex.config";

export function getConfig() {
    const chainConfig = publicChainConfig;
    const contracts = getContracts();
    const ludexConfig = createLudexConfig(contracts);
    return {chainConfig, ludexConfig};
}