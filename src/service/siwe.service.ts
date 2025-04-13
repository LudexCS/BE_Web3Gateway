import { SiweRequest } from "../dto/siwe.request.dto";
import { SiweFormat } from "../dto/siwe.message";
import { storeSiwe } from "../repository/redis.reposiotry";

export const createSiweMessage = async (siweRequest: SiweRequest, email: string): Promise<string> => {
    const address = siweRequest.address;
    const uri = siweRequest.uri;
    const now = new Date();
    const nonce = generateNonce(); // 랜덤 8자 이상
    const issuedAt = now.toISOString();
    const CHAIN_ID = Number(process.env.ETH_NET);

    const siweFormat: SiweFormat = {
        domain: 'ludex.io',
        address,
        statement: 'Please sign this message to log in to Ludex.',
        uri,
        version: '1',
        chainId: CHAIN_ID,
        nonce,
        iat: issuedAt,
        requestId: email
    };
    const msg: string = formatSiweMessage(siweFormat);

    try {
        await storeSiwe(email, msg);
    } catch (error) {
        throw error;
    }

    return msg;
};

const generateNonce = (): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

const formatSiweMessage = (format: SiweFormat): string => {
    const lines: string[] = [];

    lines.push(`https://${format.domain} wants you to sign in with your Ethereum account:`);
    lines.push(format.address);
    lines.push("");

    if (format.statement) {
        lines.push(format.statement);
        lines.push("");
    }

    lines.push(`URI: ${format.uri}`);
    lines.push(`Version: ${format.version}`);
    lines.push(`Chain ID: ${format.chainId}`);
    lines.push(`Nonce: ${format.nonce}`);
    lines.push(`Issued At: ${format.iat}`);

    if (format.exp) lines.push(`Expiration Time: ${format.exp}`);
    if (format.nbf) lines.push(`Not Before: ${format.nbf}`);
    if (format.requestId) lines.push(`Request ID: ${format.requestId}`);

    if (format.resources && format.resources.length > 0) {
        lines.push("Resources:");
        for (const resource of format.resources) {
            lines.push(`- ${resource}`);
        }
    }

    return lines.join('\n');
};