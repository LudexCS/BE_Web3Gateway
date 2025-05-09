export interface RegisterItemDto {
    gameId: number;
    itemName: string;
    seller: string;
    sharers: string[];      // bigint로 변환 가능한 문자열 ID 배열
    itemPrice: string;      // bigint로 변환 가능한 가격 문자열
    shareTerms: number[];   // 각 sharer의 분배 비율 (0~100)
}