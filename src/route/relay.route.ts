import {Router, Request, Response} from "express";
import {relayControl} from "../controller/relay.controller";

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
    await relayControl(req, res);
});

export default router;