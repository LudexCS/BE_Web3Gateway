import {Router} from "express";
import {getConfigControl} from "../controller/config.controller";

const router: Router = Router();

/**
 * @swagger
 * /api/protected/config/get:
 *   get:
 *     summary: Get current chain and Ludex configuration
 *     description: Returns the current blockchain network configuration (ChainConfig) and Ludex platform settings (LudexConfig).
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved configuration data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 chainConfig:
 *                   $ref: '#/components/schemas/ChainConfig'
 *                 ludexConfig:
 *                   $ref: '#/components/schemas/LudexConfig'
 *       400:
 *         description: Invalid request or client error
 *       500:
 *         description: Internal server error
 */
router.get('/get', (req, res) => {
   try {
       const { chainConfig, ludexConfig } = getConfigControl();
       res.status(200).json({ chainConfig, ludexConfig });
   } catch (error) {
       if (error instanceof Error) {
           res.status(400).json({message: error.message});
       } else {
           res.status(500).json({message: "Server Error"});
       }
   }
});

export default router;