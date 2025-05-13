import {Router, Request, Response} from "express";
import {relayControl} from "../controller/relay.controller";
import {stringifyBigInts} from "../service/relay.service";

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        console.log("0");
        const args = await relayControl(req);
        console.log("4");
        const replacer = (_key: string, value: any) => {
            return typeof value === 'bigint' ? value.toString() : value;
        };

        res.status(200).json({ args: stringifyBigInts(args) });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
            res.status(400).json({message: error.message});
        } else {
            res.status(500).json({message: "Server Error"});
        }
    }
});

export default router;