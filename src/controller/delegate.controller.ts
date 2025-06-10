import {RegisterClaimPurchaseDto} from "../dto/delegate.dto";
import {registerClaimPurchase} from "../service/delegate.service";

export async function claimPurchaseControl(registerClaimPurchaseDto: RegisterClaimPurchaseDto): Promise<{ ownerAddress: string, purchaseId: string }> {
    return await registerClaimPurchase(registerClaimPurchaseDto);
}