import { Router } from 'express';
import { Request, Response } from 'express';
import { generateSiweControl } from '../controller/siwe.controller';
import {linkWalletControl} from "../controller/link.wallet.controller";

/**
 * @swagger
 * components:
 *   schemas:
 *     SiweRequest:
 *       type: object
 *       required:
 *         - address
 *         - uri
 *       properties:
 *         address:
 *           type: string
 *           description: 지갑 주소 (EIP-55 체크섬 포함)
 *           example: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
 *         uri:
 *           type: string
 *           description: 요청 URI
 *           example: 'https://ludex.io/login'
 *     LinkWalletRequest:
 *       type: object
 *       required:
 *         - address
 *         - signature
 *       properties:
 *         address:
 *           type: string
 *           description: 지갑 주소
 *           example: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
 *         signature:
 *           type: string
 *           description: SIWE 메시지에 대한 서명 데이터
 *           example: '0x...'
 *     MessageResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: 응답 메시지
 */

const router: Router = Router();

/**
 * @swagger
 * /api/protected/auth/siwe:
 *   post:
 *     summary: SIWE 메시지 생성
 *     description: Sign-In with Ethereum을 위한 메시지를 생성합니다
 *     tags: [Web3 Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SiweRequest'
 *     responses:
 *       200:
 *         description: SIWE 메시지 생성 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   $ref: '#/components/schemas/SiweFormat'
 *       400:
 *         description: 잘못된 요청
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       401:
 *         description: 인증되지 않은 사용자
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       500:
 *         description: 서버 오류
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 */
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

/**
 * @swagger
 * /api/protected/auth/wallet:
 *   post:
 *     summary: 지갑 연동
 *     description: 서명된 SIWE 메시지를 검증하고 사용자 계정에 Web3 지갑을 연동합니다
 *     tags: [Web3 Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LinkWalletRequest'
 *     responses:
 *       200:
 *         description: 지갑 연동 성공
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *             example:
 *               message: "Wallet successfully registered"
 *       400:
 *         description: 잘못된 요청 또는 서명 검증 실패
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       401:
 *         description: 인증되지 않은 사용자
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       500:
 *         description: 서버 오류
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 */
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