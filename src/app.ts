import express, { Express } from 'express';
import authRoute from './route/wallet_auth.route';
import jwtGuard from './middleware/jwt.guard';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { specs, swaggerUiOptions } from './config/swagger.config';

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

export default app;