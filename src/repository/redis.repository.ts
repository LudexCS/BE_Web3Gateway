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
