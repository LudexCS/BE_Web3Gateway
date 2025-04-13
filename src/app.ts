import express, { Express } from 'express';
import authRoute from './route/wallet_auth.route';
import jwtGuard from './middleware/jwt.guard';

const app : Express = express();
app.use(express.json());

// middleware
app.use('/api/protected', jwtGuard);

app.use('/api/protected/auth', authRoute);

export default app;