import {Request} from 'express';
import {LinkWalletRequest} from "../dto/link.wallet.dto";
import {verifyWalletService} from "../service/verify.wallet.service";
import {registerWalletService} from "../service/register.wallet.service";

export const linkWalletControl = async (req: Request) => {
    const email = req.user as string;
    const linkWalletReq: LinkWalletRequest = req.body;
    if (!linkWalletReq) {
        throw new Error("Invalid request for link wallet");
    }
    try {
        const address: string = await verifyWalletService(email, linkWalletReq);
        await registerWalletService(email, address);
    } catch (error) {
        throw error;
    }
}