import {Request} from 'express';
import {SiweRequest} from "../dto/siwe.request.dto";
import {createSiweMessage} from "../service/siwe.service";

export const generateSiweControl = async (req: Request)=> {
    try {
        const email: string = req.user as string;
        const siweRequest: SiweRequest = req.body;
        return await createSiweMessage(siweRequest, email);
    } catch (error) {
        throw error;
    }
};