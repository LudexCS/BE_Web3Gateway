import {Router} from "express";
import {claimPurchaseControl} from "../controller/delegate.controller";
import {RegisterClaimPurchaseDto} from "../dto/delegate.dto";

const router: Router = Router();

router.post('/claim-purchase', async (req, res) => {
    try {
        const dto: RegisterClaimPurchaseDto = req.body;
        const { ownerAddress, purchaseId } = (await claimPurchaseControl(dto));
        res.status(200).json({ ownerAddress, purchaseId });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({message: error.message});
        } else {
            res.status(500).json({message: "Server Error"});
        }
    }
})

export default router;