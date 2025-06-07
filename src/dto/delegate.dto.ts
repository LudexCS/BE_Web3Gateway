export interface DelegatedPurchaseDto {
    itemId: string;
    ownerId: string;
}

export interface RegisterClaimPurchaseDto {
    ownerId: string;
    ownerAddress: string;
    purchaseId: string;
}