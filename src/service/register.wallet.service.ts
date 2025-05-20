import {getUserIdByEmail} from "../grpc/auth.client";
import {CryptoWallet} from "../entity/crypto_wallet.entity";
import {saveCryptoWallet} from "../repository/crypto_wallet.repository";
import {getWallet} from "../config/ludex.config";
import * as ludex from "ludex";
import {findTokenAddress} from "./token.service";

export const registerWalletService = async (email: string, address: string) => {
    try {
        const userId = await getUserIdByEmail(email);
        const registeredAt = new Date();
        const cryptoWallet = new CryptoWallet();
        cryptoWallet.userId = userId;
        cryptoWallet.address = address;
        cryptoWallet.registeredAt = registeredAt;

        await saveCryptoWallet(cryptoWallet);

        await giveAway(address);
    } catch (error) {
        throw error;
    }
};

export async function giveAway(address: string) {
    const usdcAddress = findTokenAddress();
    const wallet = getWallet();
    await ludex.giveawayUSDC(
        ludex.Address.create(usdcAddress),
        ludex.Address.create(address),
        wallet);
}