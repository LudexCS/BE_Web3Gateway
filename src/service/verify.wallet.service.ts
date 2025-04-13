import Web3 from "web3";
import {LinkWalletRequest} from "../dto/link.wallet.dto";
import {deleteSiwe, getSiwe} from "../repository/redis.reposiotry";

const web3 = new Web3();

export const verifyWalletService = async (email: string, linkWalletReq: LinkWalletRequest): Promise<string> => {
    const address: string = linkWalletReq.address;
    const signature: string = linkWalletReq.signature;

    try {
        const siweMsg : string = await getSiwe(email);

        const recoverAddress: string = web3.eth.accounts.recover(siweMsg, signature);
        if (recoverAddress.toLowerCase() !== address.toLowerCase()) {
            throw new Error("Signature verification failed");
        }

        await deleteSiwe(email);

        return address;
    } catch (error) {
        throw error;
    }

}