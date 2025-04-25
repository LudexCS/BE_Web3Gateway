# 🌉 Ludex Web3Gateway Service

This repository provides blockchain interaction capabilities for the Ludex platform.

---

## 📌 Description

The Web3Gateway service enables on-chain operations such as game or resource purchases using ERC-20 tokens and issuing NFT proofs of ownership. It acts as the bridge between Ludex’s backend services and the Ethereum-compatible blockchain network.

---

## 🔧 Responsibilities

- Interacts with smart contracts to handle token-based purchases  
- Issues NFTs as verifiable proof of ownership after purchases  
- Connects to blockchain via ethers.js and optimized RPC providers  
- Validates and forwards meta-transactions (if applicable)

---

## 🪙 Purchase Flow

1. Frontend sends a signed transaction request for game/resource purchase  
2. Web3Gateway verifies the request and interacts with the smart contract  
3. ERC-20 payment is processed through PriceTable + PaymentProcessor  
4. NFT is minted to the user's wallet to represent the purchase  
5. Transaction receipt is returned for client confirmation

---

## 🛠 Folder Structure

```
src/
  ├── controller/        # Request validation and routing
  ├── service/           # Blockchain interaction logic
  ├── grpc/               # gRPC clients or communication interface
  ├── dto/               # Request and validation schemas
  └── repository/         # Smart contract interaction and abstraction layer
```

---

## ⚙️ Tech Stack

- Node.js + TypeScript  
- ethers.js (Ethereum interaction)  
- Solidity (external smart contracts)  
- dotenv for environment configuration  
- RESTful HTTP interface

---

## 🔐 Security

- Meta-transaction verification (via EIP-712 or ERC-2771)  
- On-chain token payment validation  
- NFT ownership recorded on-chain and queryable

---

## 🚀 Run Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file and configure:
   - RPC URL
   - Private key for relayer/admin wallet
   - Contract addresses (PriceTable, Store, Ledger, etc.)

3. Start the server:
   ```bash
   npm run start:dev
   ```

---

© 2025 Ludex. All rights reserved.
