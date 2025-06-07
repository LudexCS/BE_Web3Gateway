import {Router} from "express";
import {getWholeProfitControl, settlePendingProfitControl} from "../controller/profit.controller";

const router: Router = Router();

/**
 * @swagger
 * /api/admin/profit/get/whole-pending:
 *   get:
 *     tags: [Profit]
 *     security:
 *       - bearerAuth: []
 *     summary: 전체 미정산 금액 조회
 *     description: 현재까지 누적된 전체 미정산 수익 금액(BigInt)을 문자열로 반환합니다.
 *     responses:
 *       200:
 *         description: 성공적으로 전체 미정산 금액을 반환함
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 wholePendingProfit:
 *                   type: string
 *                   example: "1234567890000000000"
 *       400:
 *         description: 요청 처리 중 오류 발생
 *       500:
 *         description: 서버 내부 오류
 */
router.get('/get/whole-pending', async (req, res) => {
    try {
        const result = (await getWholeProfitControl()).toString();
        res.status(200).json({wholePendingProfit: result});
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
 * /api/admin/profit/settle/pending-profit:
 *   post:
 *     tags: [Profit]
 *     security:
 *       - bearerAuth: []
 *     summary: 미정산 수익 정산 및 목록 삭제
 *     description: 정산 가능한 항목들을 처리하고, 정산 목록에서 제거합니다.
 *     responses:
 *       200:
 *         description: 성공적으로 정산을 수행함
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Pending profit settled"
 *       400:
 *         description: 정산 처리 중 클라이언트 오류
 *       500:
 *         description: 서버 내부 오류
 */
router.post('/settle/pending-profit', async (req, res) => {
    try {
        await settlePendingProfitControl();
        res.status(200).json({message: "Pending profit settled"});
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({message: error.message});
        } else {}
    }
})

export default router;