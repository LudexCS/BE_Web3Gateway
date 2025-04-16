import { Router } from 'express';
import { Request, Response } from 'express';
import { generateSiweControl } from '../controller/siwe.controller';
import {linkWalletControl} from "../controller/link.wallet.controller";

const router: Router = Router();

router.post('/siwe', async (req: Request, res: Response) => {
    try {
        const siweMsg: string = await generateSiweControl(req);

        res.status(200).json({ message: siweMsg });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({message: error.message});
        } else {
            res.status(500).json({message: "Server Error"});
        }
    }
});
router.post('/wallet', async (req: Request, res: Response) => {
    try {
        await linkWalletControl(req);
        res.status(200).json({ message: "Wallet successfully registered" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({message: error.message});
        } else {
            res.status(500).json({message: "Server Error"});
        }
    }
});

export default router;