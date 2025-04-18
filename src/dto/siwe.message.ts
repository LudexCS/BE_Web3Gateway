export interface SiweFormat {
    domain: "ludex.io";            // example.com
    address: string;               // 0x1234... (EIP-55 체크섬 포함)
    statement: "Please sign this message to log in to Ludex.";            // 사용자가 서명할 때 볼 수 있는 메시지 (선택)
    uri: string;                   // 로그인 시도 중인 앱의 URI
    version: '1';                  // 버전 고정
    chainId: number;               // 이더리움 체인 ID (ex: 1, 5, 11155111)
    nonce: string;                 // 무작위 8자 이상 문자열
    iat: string;              // ISO 8601 포맷 (e.g. "2024-04-13T12:34:56.000Z")
    exp?: string;       // optional (ISO 8601)
    nbf?: string;            // optional (ISO 8601)
    requestId?: string;            // optional 고유 ID
    resources?: string[];          // optional 접근하려는 리소스 URI 목록
}

const CHAIN_ID = Number(process.env.ETH_NET);

export const generateSiwe = (address: string, uri: string, nonce: string, issuedAt: string, requestId: string): SiweFormat => {
    return {
        domain: 'ludex.io',
        address,
        statement: 'Please sign this message to log in to Ludex.',
        uri,
        version: '1',
        chainId: CHAIN_ID,
        nonce,
        iat: issuedAt,
        requestId: requestId
    }
}