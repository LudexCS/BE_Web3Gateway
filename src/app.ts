import express, { Express } from 'express';
import authRoute from './route/walletAuth.route';
import jwtGuard from './middleware/jwt.guard';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { specs, swaggerUiOptions } from './config/swagger.config';
import relayRoute from "./route/relay.route";
import registerRoute from "./route/register.route";
import tokenRoute from "./route/token.route";

const app : Express = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

// Swagger UI 설정
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, swaggerUiOptions));

// middleware
app.use('/api/protected', jwtGuard);

app.use('/api/protected/auth', authRoute);
app.use('/api/relay', relayRoute);
app.use('/api/protected/register', registerRoute);
app.use('/api/token', tokenRoute);

export default app;