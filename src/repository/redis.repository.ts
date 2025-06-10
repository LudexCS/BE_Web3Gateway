import redis from "../config/redis.config";

const key = 'delegated-item';

export const storeDelegatedItem = async (itemId: string): Promise<void> => {
    try {
        await redis.rpush(key, itemId);
    } catch (error) {
        console.error(`🔴 Redis 저장 실패: ${key}`, error);
        throw new Error('Failed to store payment item');
    }
};

export const getDelegatedItems = async (): Promise<string[]> => {
    try {
        return await redis.lrange(key, 0, -1);
    } catch (error) {
        console.error(`🔴 Redis 조회 실패: ${key}`, error);
        throw new Error('Failed to retrieve delegated items');
    }
};

export const clearDelegatedItems = async (): Promise<void> => {
    try {
        await redis.del(key);
    } catch (error) {
        console.error(`🔴 Redis 삭제 실패: ${key}`, error);
        throw new Error('Failed to clear delegated items');
    }
};

export const storeSiwe = async (email: string, siwe: string): Promise<void> => {
    const key = `siwe:${email}`;
    const ttl = Number(process.env.SIWE_EXP);

    try {
        await redis.set(key, siwe, 'EX', ttl);
    } catch (error) {
        console.error(`🔴 Redis 저장 실패: ${key}`, error);
        throw new Error('Failed to store siwe');
    }
};


export const deleteSiwe = async (email: string): Promise<void> => {
    const key = `siwe:${email}`;
    try {
        await redis.del(key);
    } catch (error) {
        console.error(`🔴 Redis 삭제 실패: ${key}`, error);
        throw new Error('Failed to delete siwe');
    }
};

export const getSiwe = async (email:string): Promise<string> => {
    const key = `siwe:${email}`;
    try {
        const siwe = await redis.get(key);
        if (!siwe) {
            throw new Error('siwe not found');
        }
        return siwe;
    } catch (error) {
        console.error(`🔴 Redis 조회 실패: ${key}`, error);
        throw new Error('Failed to get siwe');
    }
}
