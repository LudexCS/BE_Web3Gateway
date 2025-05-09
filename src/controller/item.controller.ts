import {RegisterItemDto} from "../dto/item.dto";
import {registerItem} from "../service/item.service";
import {storeWeb3Id} from "../grpc/storeId.client";

export async function registerItemControl(itemDto: RegisterItemDto) {
    const gameId = itemDto.gameId;
    const { itemId, sharerIds } = await registerItem(itemDto);
    const success = await storeWeb3Id(gameId, itemId, sharerIds);
    if (!success) {
        console.log("Failed to store web3Id");
    }
    return;
}