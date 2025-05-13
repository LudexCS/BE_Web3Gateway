import {RegisterItemDto} from "../dto/item.dto";
import {registerItem} from "../service/item.service";
import {storeWeb3Id} from "../grpc/storeId.client";

export async function registerItemControl(itemDto: RegisterItemDto) {
    const gameId = itemDto.gameId;
    const { itemId, sharerIds } = await registerItem(itemDto);
    const stringItemId = itemId.toString();
    const stringSharerIds = sharerIds.map(id => id.toString());
    const success = await storeWeb3Id(gameId, stringItemId, stringSharerIds);
    if (!success) {
        console.log("Failed to store web3Id");
    }
    return;
}