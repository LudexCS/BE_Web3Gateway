import express, { Express } from 'express';
import authRoute from './route/walletAuth.route';
import jwtGuard from './middleware/jwt.guard';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { specs, swaggerUiOptions } from './config/swagger.config';
import relayRoute from "./route/relay.route";
import registerRoute from "./route/register.route";
import tokenRoute from "./route/token.route";
import configRoute from "./route/config.route";
import adminGuard from "./middleware/admin.guard";
import profitRoute from "./route/profit.route";

const app : Express = express();
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'http://uosludex.com', 'https://uosludex.com'],
    credentials: true,
}));

// Swagger UI 설정
app.use('/web3gateway/api-docs', swaggerUi.serve, swaggerUi.setup(specs, swaggerUiOptions));

// middleware
app.use('/web3gateway/api/protected', jwtGuard);
app.use('/web3gateway/api/admin', adminGuard);

app.use('/web3gateway/api/protected/auth', authRoute);
app.use('/web3gateway/api/relay', relayRoute);
app.use('/web3gateway/api/protected/register', registerRoute);
app.use('/web3gateway/api/token', tokenRoute);
app.use('/web3gateway/api/config', configRoute);
app.use('/web3gateway/api/admin/profit', profitRoute);

export default app;