import {Router} from "express";
import {RegisterItemDto} from "../dto/item.dto";
import {registerItemControl} from "../controller/item.controller";

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterItemDto:
 *       type: object
 *       required:
 *         - gameId
 *         - itemName
 *         - seller
 *         - sharers
 *         - itemPrice
 *         - shareTerms
 *       properties:
 *         gameId:
 *           type: integer
 *           example: 42
 *         itemName:
 *           type: string
 *           example: "Super RPG Expansion"
 *         seller:
 *           type: string
 *           example: "0x1234567890abcdef1234567890abcdef12345678"
 *         sharers:
 *           type: array
 *           items:
 *             type: string
 *           example: ["1001", "1002"]
 *         itemPrice:
 *           type: string
 *           example: "1500000000000000000"
 *         shareTerms:
 *           type: array
 *           items:
 *             type: number
 *           example: [70, 30]
 *     MessageResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Item successfully registered
 */
const router: Router = Router();

/**
 * @swagger
 * /item:
 *   post:
 *     summary: 스마트컨트랙트에 게임을 아이템으로 등록합니다.
 *     description: 판매자 주소, 수익 분배 대상, 가격 등의 정보를 기반으로 게임을 온체인 아이템으로 등록합니다.
 *     tags:
 *       - Registration
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterItemDto'
 *     responses:
 *       200:
 *         description: 아이템 등록 성공
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       400:
 *         description: 잘못된 요청
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 *       500:
 *         description: 서버 에러
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MessageResponse'
 */
router.post('/item', async (req, res) => {
    try {
        const itemDto: RegisterItemDto = req.body;
        console.log(`itemDto: ${JSON.stringify(itemDto)}`);
        await registerItemControl(itemDto);
        res.status(200).json({ message: "Item successfully registered" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({message: error.message});
        } else {
            res.status(500).json({message: "Server Error"});
        }
    }
});

export default router;