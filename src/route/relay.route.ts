import {Router, Request, Response} from "express";
import {relayControl} from "../controller/relay.controller";

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const args = await relayControl(req);
        res.status(200).json({ args });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({message: error.message});
        } else {
            res.status(500).json({message: "Server Error"});
        }
    }
});

export default router;