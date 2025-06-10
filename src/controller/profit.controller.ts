import {finalizePendingProfit, findWholePendingProfit} from "../service/profit.service";

export async function getWholeProfitControl(): Promise<string> {
    return await findWholePendingProfit();
}

export async function settlePendingProfitControl() {
    await finalizePendingProfit();
}