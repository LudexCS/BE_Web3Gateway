import {
    createLudexConfig,
    createPublicChainConfig,
    getContracts
} from "../config/ludex.config";

export function getConfig() {
    const chainConfig = createPublicChainConfig();
    const contracts = getContracts();
    const ludexConfig = createLudexConfig(contracts);
    return {chainConfig, ludexConfig};
}