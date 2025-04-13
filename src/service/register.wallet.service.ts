import {getUserIdByEmail} from "../grpc/auth.client";
import {CryptoWallet} from "../entity/crypto_wallet.entity";
import {saveCryptoWallet} from "../repository/crypto_wallet.repository";

export const registerWalletService = async (email: string, address: string) => {
    try {
        const userId = await getUserIdByEmail(email);
        const cryptoWallet = new CryptoWallet();
        cryptoWallet.userId = userId;
        cryptoWallet.address = address;

        await saveCryptoWallet(cryptoWallet);
    } catch (error) {
        throw error;
    }
}