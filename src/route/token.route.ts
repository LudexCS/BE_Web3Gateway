import {Router} from "express";
import {getTokenAddressControl} from "../controller/token.controller";

const router: Router = Router();

/**
 * @swagger
 * /api/token/get/address:
 *   get:
 *     summary: 토큰 컨트랙트 주소 조회
 *     description: 현재 등록된 토큰 컨트랙트의 address를 반환합니다.
 *     tags:
 *       - Token
 *     responses:
 *       200:
 *         description: 토큰 주소 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tokenAddress:
 *                   type: string
 *                   example: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
 *       404:
 *         description: 토큰 주소가 설정되지 않은 경우
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Token address not found"
 */
router.get('/get/address', (req, res) => {
    const address = getTokenAddressControl();
    if (!address) {
        res.status(404).json({message: "Token address not found"});
    }
    res.status(200).json({tokenAddress: address});
});

export default router;