export const contracts =
[
    {
        "timestamp": "2025-05-10T06:43:20.648Z",
        "network": "op_sepolia",
        "deployments": {
            "MockUSDC": {
                "address": "0x225f3f481F7647B64219C6E4E1226dFEc60c7241",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "recipients",
                                "type": "address[]"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [],
                        "name": "ECDSAInvalidSignature",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "length",
                                "type": "uint256"
                            }
                        ],
                        "name": "ECDSAInvalidSignatureLength",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "ECDSAInvalidSignatureS",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "allowance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC20InsufficientAllowance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "balance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC20InsufficientBalance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "approver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidApprover",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "receiver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidReceiver",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidSender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidSpender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC2612ExpiredSignature",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2612InvalidSigner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "currentNonce",
                                "type": "uint256"
                            }
                        ],
                        "name": "InvalidAccountNonce",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "InvalidShortString",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "str",
                                "type": "string"
                            }
                        ],
                        "name": "StringTooLong",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [],
                        "name": "EIP712DomainChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    },
                    {
                        "inputs": [],
                        "name": "DOMAIN_SEPARATOR",
                        "outputs": [
                            {
                                "internalType": "bytes32",
                                "name": "",
                                "type": "bytes32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "INITIAL_AMOUNT",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            }
                        ],
                        "name": "allowance",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "approve",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "balanceOf",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "decimals",
                        "outputs": [
                            {
                                "internalType": "uint8",
                                "name": "",
                                "type": "uint8"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "eip712Domain",
                        "outputs": [
                            {
                                "internalType": "bytes1",
                                "name": "fields",
                                "type": "bytes1"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "version",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "chainId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "verifyingContract",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "salt",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint256[]",
                                "name": "extensions",
                                "type": "uint256[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            }
                        ],
                        "name": "giveaway",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "name",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "nonces",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "permit",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "symbol",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "totalSupply",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "transfer",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "transferFrom",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T06:42:06.000Z"
            },
            "ERC2771Forwarder": {
                "address": "0xb9bf741D2F7b56B9e854344Fd2c5eCE1a8731C4a",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint48",
                                "name": "deadline",
                                "type": "uint48"
                            }
                        ],
                        "name": "ERC2771ForwarderExpiredRequest",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2771ForwarderInvalidSigner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "requestedValue",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "msgValue",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC2771ForwarderMismatchedValue",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "target",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2771UntrustfulTarget",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "FailedCall",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "balance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "InsufficientBalance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "currentNonce",
                                "type": "uint256"
                            }
                        ],
                        "name": "InvalidAccountNonce",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "InvalidShortString",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "str",
                                "type": "string"
                            }
                        ],
                        "name": "StringTooLong",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [],
                        "name": "EIP712DomainChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "nonce",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "success",
                                "type": "bool"
                            }
                        ],
                        "name": "ExecutedForwardRequest",
                        "type": "event"
                    },
                    {
                        "inputs": [],
                        "name": "eip712Domain",
                        "outputs": [
                            {
                                "internalType": "bytes1",
                                "name": "fields",
                                "type": "bytes1"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "version",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "chainId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "verifyingContract",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "salt",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint256[]",
                                "name": "extensions",
                                "type": "uint256[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData",
                                "name": "request",
                                "type": "tuple"
                            }
                        ],
                        "name": "execute",
                        "outputs": [],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData[]",
                                "name": "requests",
                                "type": "tuple[]"
                            },
                            {
                                "internalType": "address payable",
                                "name": "refundReceiver",
                                "type": "address"
                            }
                        ],
                        "name": "executeBatch",
                        "outputs": [],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "nonces",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData",
                                "name": "request",
                                "type": "tuple"
                            }
                        ],
                        "name": "verify",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T06:42:14.000Z"
            },
            "SellerRegistry": {
                "address": "0x2281a1FC503a93Da9042BD0556487cA0FD258d83",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            }
                        ],
                        "name": "PaymentChannelsAdded",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            }
                        ],
                        "name": "PaymentChannelsRemoved",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "name": "SellerRegistered",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "addPaymentChannels",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "isActiveSeller",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "paymentChannels",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "registerSeller",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "removePaymentChannels",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T06:42:22.000Z"
            },
            "ItemRegistry": {
                "address": "0x2bf620073A77Dd799755F6B1615D0a8D0b418A51",
                "abi": [
                    {
                        "inputs": [],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "bytes32",
                                "name": "itemName",
                                "type": "bytes32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "usdPrice",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "shareItemIDs",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemRegistered",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "resumed",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemSaleResumed",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "suspension",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemSaleSuspended",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "itemRevenueSharers",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "nameToHash",
                                "type": "string"
                            }
                        ],
                        "name": "nameHash",
                        "outputs": [
                            {
                                "internalType": "bytes32",
                                "name": "hash",
                                "type": "bytes32"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "numberOfSharers",
                        "outputs": [
                            {
                                "internalType": "uint8",
                                "name": "",
                                "type": "uint8"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "itemNameHash",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "address",
                                "name": "seller_",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "revenueSharers",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "shareTerms",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "uint16[]",
                                "name": "shares",
                                "type": "uint16[]"
                            }
                        ],
                        "name": "registerItem",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "resumeItemSale",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint8",
                                "name": "index",
                                "type": "uint8"
                            }
                        ],
                        "name": "revenueSharerOfItem",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "parent",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "revenueSharingItems",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "seller",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            }
                        ],
                        "name": "setPriceTable",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "suspendItemSale",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "timestampRegistered",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T06:42:30.000Z"
            },
            "PriceTable": {
                "address": "0x80386289232b47B8608caDDe323977149D1D0A1C",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "itemRegistryAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "sellerRegistryAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "discountedPrice",
                                "type": "uint256"
                            }
                        ],
                        "name": "DiscountStarted",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "newUsdToToken",
                                "type": "uint256"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "prevUsdToToken",
                                "type": "uint256"
                            }
                        ],
                        "name": "ExchangeRateChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "newUsdPrice",
                                "type": "uint256"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "prevUsdPrice",
                                "type": "uint256"
                            }
                        ],
                        "name": "ItemPriceChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "PaymentChannelAdded",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "name": "PaymentChannelRemoved",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "addPaymentChannel",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "paymentChannel",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "changeExchangeRate",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            }
                        ],
                        "name": "changeItemPrice",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "getPriceInfoList",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "token",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "tokenAmount",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct PriceTable.PriceInfo[]",
                                "name": "prices",
                                "type": "tuple[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "getPriceUsd",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint16",
                                "name": "revenueShare",
                                "type": "uint16"
                            }
                        ],
                        "name": "initializeItemPrice",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "paymentChannels",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "priceOfItemIn",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenAmount",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "removePaymentChannel",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "revenueSharing",
                        "outputs": [
                            {
                                "internalType": "uint16",
                                "name": "",
                                "type": "uint16"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "endTime",
                                "type": "uint256"
                            }
                        ],
                        "name": "startDiscount",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "usdPrice",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "usdToToken",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T06:42:38.000Z"
            },
            "PaymentProcessor": {
                "address": "0xbe4B5BD27D07FC04C9D29321365d85f9108C0f3f",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint16",
                                "name": "initialFeeRate",
                                "type": "uint16"
                            },
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ProfitClaimed",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "newDeadline",
                                "type": "uint256"
                            }
                        ],
                        "name": "changePermissionDeadline",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "claim",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "distribute",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "feeRateLog",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint16",
                                "name": "feeRate",
                                "type": "uint16"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "isSellerToPay",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "permissionDeadline",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "priceTable",
                        "outputs": [
                            {
                                "internalType": "contract PriceTable",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "process",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "sellerTokenEscrow",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "sellersToPay",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T06:42:52.000Z"
            },
            "Ledger": {
                "address": "0x6EA8fc1c828FAc37e905D307302FC9e893178ad4",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721IncorrectOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC721InsufficientApproval",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "approver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidApprover",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidOperator",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "receiver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidReceiver",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidSender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC721NonexistentToken",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "approved",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "approved",
                                "type": "bool"
                            }
                        ],
                        "name": "ApprovalForAll",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "approve",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "balanceOf",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "getApproved",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            }
                        ],
                        "name": "getPurchaseID",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            }
                        ],
                        "name": "isApprovedForAll",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            }
                        ],
                        "name": "logPurchase",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "name",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ownerOf",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "purchases",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bytes",
                                "name": "data",
                                "type": "bytes"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "internalType": "bool",
                                "name": "approved",
                                "type": "bool"
                            }
                        ],
                        "name": "setApprovalForAll",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "storeAddress",
                                "type": "address"
                            }
                        ],
                        "name": "setStore",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes4",
                                "name": "interfaceId",
                                "type": "bytes4"
                            }
                        ],
                        "name": "supportsInterface",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "symbol",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "tokenURI",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "transferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T06:43:00.000Z"
            },
            "Store": {
                "address": "0xAdD7B73d47Fc342be20058329acF01c833F3bCD1",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "ledgerAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "paymentProcessorAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "name": "ItemPurchased",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "ledger",
                        "outputs": [
                            {
                                "internalType": "contract Ledger",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "payment",
                        "outputs": [
                            {
                                "internalType": "contract PaymentProcessor",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "priceTable",
                        "outputs": [
                            {
                                "internalType": "contract PriceTable",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "purchaseItem",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T06:43:08.000Z"
            }
        }
    },
    {
        "timestamp": "2025-05-10T19:54:41.223Z",
        "network": "op_sepolia",
        "deployments": {
            "MockUSDC": {
                "address": "0x5850698Edbf0C07D7df8873769ca7E5C8ef5Ff84",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "recipients",
                                "type": "address[]"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [],
                        "name": "ECDSAInvalidSignature",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "length",
                                "type": "uint256"
                            }
                        ],
                        "name": "ECDSAInvalidSignatureLength",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "ECDSAInvalidSignatureS",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "allowance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC20InsufficientAllowance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "balance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC20InsufficientBalance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "approver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidApprover",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "receiver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidReceiver",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidSender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidSpender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC2612ExpiredSignature",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2612InvalidSigner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "currentNonce",
                                "type": "uint256"
                            }
                        ],
                        "name": "InvalidAccountNonce",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "InvalidShortString",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "str",
                                "type": "string"
                            }
                        ],
                        "name": "StringTooLong",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [],
                        "name": "EIP712DomainChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    },
                    {
                        "inputs": [],
                        "name": "DOMAIN_SEPARATOR",
                        "outputs": [
                            {
                                "internalType": "bytes32",
                                "name": "",
                                "type": "bytes32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "INITIAL_AMOUNT",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            }
                        ],
                        "name": "allowance",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "approve",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "balanceOf",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "decimals",
                        "outputs": [
                            {
                                "internalType": "uint8",
                                "name": "",
                                "type": "uint8"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "eip712Domain",
                        "outputs": [
                            {
                                "internalType": "bytes1",
                                "name": "fields",
                                "type": "bytes1"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "version",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "chainId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "verifyingContract",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "salt",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint256[]",
                                "name": "extensions",
                                "type": "uint256[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            }
                        ],
                        "name": "giveaway",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "name",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "nonces",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "permit",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "symbol",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "totalSupply",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "transfer",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "transferFrom",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T19:53:30.000Z"
            },
            "ERC2771Forwarder": {
                "address": "0x1a1720Ef22023423b4141fb60019A47018Ae4c00",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint48",
                                "name": "deadline",
                                "type": "uint48"
                            }
                        ],
                        "name": "ERC2771ForwarderExpiredRequest",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2771ForwarderInvalidSigner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "requestedValue",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "msgValue",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC2771ForwarderMismatchedValue",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "target",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2771UntrustfulTarget",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "FailedCall",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "balance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "InsufficientBalance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "currentNonce",
                                "type": "uint256"
                            }
                        ],
                        "name": "InvalidAccountNonce",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "InvalidShortString",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "str",
                                "type": "string"
                            }
                        ],
                        "name": "StringTooLong",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [],
                        "name": "EIP712DomainChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "nonce",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "success",
                                "type": "bool"
                            }
                        ],
                        "name": "ExecutedForwardRequest",
                        "type": "event"
                    },
                    {
                        "inputs": [],
                        "name": "eip712Domain",
                        "outputs": [
                            {
                                "internalType": "bytes1",
                                "name": "fields",
                                "type": "bytes1"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "version",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "chainId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "verifyingContract",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "salt",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint256[]",
                                "name": "extensions",
                                "type": "uint256[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData",
                                "name": "request",
                                "type": "tuple"
                            }
                        ],
                        "name": "execute",
                        "outputs": [],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData[]",
                                "name": "requests",
                                "type": "tuple[]"
                            },
                            {
                                "internalType": "address payable",
                                "name": "refundReceiver",
                                "type": "address"
                            }
                        ],
                        "name": "executeBatch",
                        "outputs": [],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "nonces",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData",
                                "name": "request",
                                "type": "tuple"
                            }
                        ],
                        "name": "verify",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T19:53:36.000Z"
            },
            "SellerRegistry": {
                "address": "0x58FaA3B9BC8554F35Bf2bD65966b8D8730E6265C",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            }
                        ],
                        "name": "PaymentChannelsAdded",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            }
                        ],
                        "name": "PaymentChannelsRemoved",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "name": "SellerRegistered",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "addPaymentChannels",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "isActiveSeller",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "paymentChannels",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "registerSeller",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "removePaymentChannels",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T19:53:44.000Z"
            },
            "ItemRegistry": {
                "address": "0xF3E83906c60cCD322304696b3Bd965ea24e30d76",
                "abi": [
                    {
                        "inputs": [],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "bytes32",
                                "name": "itemName",
                                "type": "bytes32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "usdPrice",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "shareItemIDs",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemRegistered",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "resumed",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemSaleResumed",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "suspension",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemSaleSuspended",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "itemRevenueSharers",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "nameToHash",
                                "type": "string"
                            }
                        ],
                        "name": "nameHash",
                        "outputs": [
                            {
                                "internalType": "bytes32",
                                "name": "hash",
                                "type": "bytes32"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "numberOfSharers",
                        "outputs": [
                            {
                                "internalType": "uint8",
                                "name": "",
                                "type": "uint8"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "itemNameHash",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "address",
                                "name": "seller_",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "revenueSharers",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "shareTerms",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "uint16[]",
                                "name": "shares",
                                "type": "uint16[]"
                            }
                        ],
                        "name": "registerItem",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "resumeItemSale",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint8",
                                "name": "index",
                                "type": "uint8"
                            }
                        ],
                        "name": "revenueSharerOfItem",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "parent",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "revenueSharingItems",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "seller",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            }
                        ],
                        "name": "setPriceTable",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "suspendItemSale",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "timestampRegistered",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T19:53:52.000Z"
            },
            "PriceTable": {
                "address": "0x72816d493322E13bE9a24EC397544537D07cB7ba",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "itemRegistryAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "sellerRegistryAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "discountedPrice",
                                "type": "uint256"
                            }
                        ],
                        "name": "DiscountStarted",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "newUsdToToken",
                                "type": "uint256"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "prevUsdToToken",
                                "type": "uint256"
                            }
                        ],
                        "name": "ExchangeRateChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "newUsdPrice",
                                "type": "uint256"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "prevUsdPrice",
                                "type": "uint256"
                            }
                        ],
                        "name": "ItemPriceChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "PaymentChannelAdded",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "name": "PaymentChannelRemoved",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "addPaymentChannel",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "paymentChannel",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "changeExchangeRate",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            }
                        ],
                        "name": "changeItemPrice",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "getPriceInfoList",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "token",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "tokenAmount",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct PriceTable.PriceInfo[]",
                                "name": "prices",
                                "type": "tuple[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "getPriceUsd",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint16",
                                "name": "revenueShare",
                                "type": "uint16"
                            }
                        ],
                        "name": "initializeItemPrice",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "paymentChannels",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "priceOfItemIn",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenAmount",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "removePaymentChannel",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "revenueSharing",
                        "outputs": [
                            {
                                "internalType": "uint16",
                                "name": "",
                                "type": "uint16"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "endTime",
                                "type": "uint256"
                            }
                        ],
                        "name": "startDiscount",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "usdPrice",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "usdToToken",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T19:54:00.000Z"
            },
            "PaymentProcessor": {
                "address": "0x2Aa81F8c4034aA9864e4f662354e447Bc2f964ba",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint16",
                                "name": "initialFeeRate",
                                "type": "uint16"
                            },
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ProfitClaimed",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "newDeadline",
                                "type": "uint256"
                            }
                        ],
                        "name": "changePermissionDeadline",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "claim",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "distribute",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "feeRateLog",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint16",
                                "name": "feeRate",
                                "type": "uint16"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "isSellerToPay",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "permissionDeadline",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "priceTable",
                        "outputs": [
                            {
                                "internalType": "contract PriceTable",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "process",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "sellerTokenEscrow",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "sellersToPay",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T19:54:16.000Z"
            },
            "Ledger": {
                "address": "0x4e97C8D9cA9114b788a935dDeC72bE3C9E7DD523",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721IncorrectOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC721InsufficientApproval",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "approver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidApprover",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidOperator",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "receiver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidReceiver",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidSender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC721NonexistentToken",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "approved",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "approved",
                                "type": "bool"
                            }
                        ],
                        "name": "ApprovalForAll",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "approve",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "balanceOf",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "getApproved",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            }
                        ],
                        "name": "getPurchaseID",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            }
                        ],
                        "name": "isApprovedForAll",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            }
                        ],
                        "name": "logPurchase",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "name",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ownerOf",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "purchases",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bytes",
                                "name": "data",
                                "type": "bytes"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "internalType": "bool",
                                "name": "approved",
                                "type": "bool"
                            }
                        ],
                        "name": "setApprovalForAll",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "storeAddress",
                                "type": "address"
                            }
                        ],
                        "name": "setStore",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes4",
                                "name": "interfaceId",
                                "type": "bytes4"
                            }
                        ],
                        "name": "supportsInterface",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "symbol",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "tokenURI",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "transferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T19:54:22.000Z"
            },
            "Store": {
                "address": "0x9DE799b249238FD6729f9B6178eb180B7F5d8259",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "ledgerAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "paymentProcessorAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "name": "ItemPurchased",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "ledger",
                        "outputs": [
                            {
                                "internalType": "contract Ledger",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "payment",
                        "outputs": [
                            {
                                "internalType": "contract PaymentProcessor",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "priceTable",
                        "outputs": [
                            {
                                "internalType": "contract PriceTable",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "purchaseItem",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-10T19:54:30.000Z"
            }
        }
    },
    {
        "timestamp": "2025-05-12T08:09:33.234Z",
        "network": "op_sepolia",
        "deployments": {
            "MockUSDC": {
                "address": "0xa513ABFdD3366E7cDf0cC50a2bebCD893CdA9729",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "recipients",
                                "type": "address[]"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [],
                        "name": "ECDSAInvalidSignature",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "length",
                                "type": "uint256"
                            }
                        ],
                        "name": "ECDSAInvalidSignatureLength",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "ECDSAInvalidSignatureS",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "allowance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC20InsufficientAllowance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "balance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC20InsufficientBalance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "approver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidApprover",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "receiver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidReceiver",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidSender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidSpender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC2612ExpiredSignature",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2612InvalidSigner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "currentNonce",
                                "type": "uint256"
                            }
                        ],
                        "name": "InvalidAccountNonce",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "InvalidShortString",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "str",
                                "type": "string"
                            }
                        ],
                        "name": "StringTooLong",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [],
                        "name": "EIP712DomainChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    },
                    {
                        "inputs": [],
                        "name": "DOMAIN_SEPARATOR",
                        "outputs": [
                            {
                                "internalType": "bytes32",
                                "name": "",
                                "type": "bytes32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "INITIAL_AMOUNT",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            }
                        ],
                        "name": "allowance",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "approve",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "balanceOf",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "decimals",
                        "outputs": [
                            {
                                "internalType": "uint8",
                                "name": "",
                                "type": "uint8"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "eip712Domain",
                        "outputs": [
                            {
                                "internalType": "bytes1",
                                "name": "fields",
                                "type": "bytes1"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "version",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "chainId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "verifyingContract",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "salt",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint256[]",
                                "name": "extensions",
                                "type": "uint256[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            }
                        ],
                        "name": "giveaway",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "name",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "nonces",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "permit",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "symbol",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "totalSupply",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "transfer",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "transferFrom",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-12T08:08:16.000Z"
            },
            "ERC2771Forwarder": {
                "address": "0x760bE4D6e47ea4cBd370f925C8ADD539039FED34",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint48",
                                "name": "deadline",
                                "type": "uint48"
                            }
                        ],
                        "name": "ERC2771ForwarderExpiredRequest",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2771ForwarderInvalidSigner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "requestedValue",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "msgValue",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC2771ForwarderMismatchedValue",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "target",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2771UntrustfulTarget",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "FailedCall",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "balance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "InsufficientBalance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "currentNonce",
                                "type": "uint256"
                            }
                        ],
                        "name": "InvalidAccountNonce",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "InvalidShortString",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "str",
                                "type": "string"
                            }
                        ],
                        "name": "StringTooLong",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [],
                        "name": "EIP712DomainChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "nonce",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "success",
                                "type": "bool"
                            }
                        ],
                        "name": "ExecutedForwardRequest",
                        "type": "event"
                    },
                    {
                        "inputs": [],
                        "name": "eip712Domain",
                        "outputs": [
                            {
                                "internalType": "bytes1",
                                "name": "fields",
                                "type": "bytes1"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "version",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "chainId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "verifyingContract",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "salt",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint256[]",
                                "name": "extensions",
                                "type": "uint256[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData",
                                "name": "request",
                                "type": "tuple"
                            }
                        ],
                        "name": "execute",
                        "outputs": [],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData[]",
                                "name": "requests",
                                "type": "tuple[]"
                            },
                            {
                                "internalType": "address payable",
                                "name": "refundReceiver",
                                "type": "address"
                            }
                        ],
                        "name": "executeBatch",
                        "outputs": [],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "nonces",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData",
                                "name": "request",
                                "type": "tuple"
                            }
                        ],
                        "name": "verify",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-12T08:08:24.000Z"
            },
            "SellerRegistry": {
                "address": "0xE582d67aA55D59F21CffA81828998C2FF5cE21a4",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            }
                        ],
                        "name": "PaymentChannelsAdded",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            }
                        ],
                        "name": "PaymentChannelsRemoved",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "name": "SellerRegistered",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "addPaymentChannels",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "isActiveSeller",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "paymentChannels",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "registerSeller",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "removePaymentChannels",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-12T08:08:32.000Z"
            },
            "ItemRegistry": {
                "address": "0x54A31A88dfEC066CB35312E55806d187842e66a8",
                "abi": [
                    {
                        "inputs": [],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "bytes32",
                                "name": "itemName",
                                "type": "bytes32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "usdPrice",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "shareItemIDs",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemRegistered",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "resumed",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemSaleResumed",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "suspension",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemSaleSuspended",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "itemRevenueSharers",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "nameToHash",
                                "type": "string"
                            }
                        ],
                        "name": "nameHash",
                        "outputs": [
                            {
                                "internalType": "bytes32",
                                "name": "hash",
                                "type": "bytes32"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "numberOfSharers",
                        "outputs": [
                            {
                                "internalType": "uint8",
                                "name": "",
                                "type": "uint8"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "itemNameHash",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "address",
                                "name": "seller_",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "revenueSharers",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "shareTerms",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "uint16[]",
                                "name": "shares",
                                "type": "uint16[]"
                            }
                        ],
                        "name": "registerItem",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "resumeItemSale",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint8",
                                "name": "index",
                                "type": "uint8"
                            }
                        ],
                        "name": "revenueSharerOfItem",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "parent",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "revenueSharingItems",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "seller",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            }
                        ],
                        "name": "setPriceTable",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "suspendItemSale",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "timestampRegistered",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-12T08:08:40.000Z"
            },
            "PriceTable": {
                "address": "0x90486e79Bde031eb69b60587fE0E8694acFD91bf",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "itemRegistryAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "sellerRegistryAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "discountedPrice",
                                "type": "uint256"
                            }
                        ],
                        "name": "DiscountStarted",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "newUsdToToken",
                                "type": "uint256"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "prevUsdToToken",
                                "type": "uint256"
                            }
                        ],
                        "name": "ExchangeRateChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "newUsdPrice",
                                "type": "uint256"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "prevUsdPrice",
                                "type": "uint256"
                            }
                        ],
                        "name": "ItemPriceChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "PaymentChannelAdded",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "name": "PaymentChannelRemoved",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "addPaymentChannel",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "paymentChannel",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "changeExchangeRate",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            }
                        ],
                        "name": "changeItemPrice",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "getPriceInfoList",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "token",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "tokenAmount",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct PriceTable.PriceInfo[]",
                                "name": "prices",
                                "type": "tuple[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "getPriceUsd",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint16",
                                "name": "revenueShare",
                                "type": "uint16"
                            }
                        ],
                        "name": "initializeItemPrice",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "paymentChannels",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "priceOfItemIn",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenAmount",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "removePaymentChannel",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "revenueSharing",
                        "outputs": [
                            {
                                "internalType": "uint16",
                                "name": "",
                                "type": "uint16"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "endTime",
                                "type": "uint256"
                            }
                        ],
                        "name": "startDiscount",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "usdPrice",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "usdToToken",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-12T08:08:48.000Z"
            },
            "PaymentProcessor": {
                "address": "0x5E1046e5B0eD30d50a1603775C609eBf5deAe423",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint16",
                                "name": "initialFeeRate",
                                "type": "uint16"
                            },
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ProfitClaimed",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "newDeadline",
                                "type": "uint256"
                            }
                        ],
                        "name": "changePermissionDeadline",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "claim",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "distribute",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "feeRateLog",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint16",
                                "name": "feeRate",
                                "type": "uint16"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "isSellerToPay",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "permissionDeadline",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "priceTable",
                        "outputs": [
                            {
                                "internalType": "contract PriceTable",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "process",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "sellerTokenEscrow",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "sellersToPay",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-12T08:09:04.000Z"
            },
            "Ledger": {
                "address": "0xBDe8643F74106EBcBADD21459282FAEfcd883807",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721IncorrectOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC721InsufficientApproval",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "approver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidApprover",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidOperator",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "receiver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidReceiver",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidSender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC721NonexistentToken",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "approved",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "approved",
                                "type": "bool"
                            }
                        ],
                        "name": "ApprovalForAll",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "approve",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "balanceOf",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "getApproved",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            }
                        ],
                        "name": "getPurchaseID",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            }
                        ],
                        "name": "isApprovedForAll",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            }
                        ],
                        "name": "logPurchase",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "name",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ownerOf",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "purchases",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bytes",
                                "name": "data",
                                "type": "bytes"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "internalType": "bool",
                                "name": "approved",
                                "type": "bool"
                            }
                        ],
                        "name": "setApprovalForAll",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "storeAddress",
                                "type": "address"
                            }
                        ],
                        "name": "setStore",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes4",
                                "name": "interfaceId",
                                "type": "bytes4"
                            }
                        ],
                        "name": "supportsInterface",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "symbol",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "tokenURI",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "transferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-12T08:09:12.000Z"
            },
            "Store": {
                "address": "0x9154637024911249E2eb3Bb499181ef73d54A94C",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "ledgerAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "paymentProcessorAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "name": "ItemPurchased",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "ledger",
                        "outputs": [
                            {
                                "internalType": "contract Ledger",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "payment",
                        "outputs": [
                            {
                                "internalType": "contract PaymentProcessor",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "priceTable",
                        "outputs": [
                            {
                                "internalType": "contract PriceTable",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "purchaseItem",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-12T08:09:20.000Z"
            }
        }
    },
    {
        "timestamp": "2025-05-20T04:03:48.030Z",
        "network": "op_sepolia",
        "deployments": {
            "MockUSDC": {
                "address": "0x4488F810E61b10986333352A81a5f61ED3755B54",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "recipients",
                                "type": "address[]"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [],
                        "name": "ECDSAInvalidSignature",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "length",
                                "type": "uint256"
                            }
                        ],
                        "name": "ECDSAInvalidSignatureLength",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "ECDSAInvalidSignatureS",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "allowance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC20InsufficientAllowance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "balance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC20InsufficientBalance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "approver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidApprover",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "receiver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidReceiver",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidSender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidSpender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC2612ExpiredSignature",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2612InvalidSigner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "currentNonce",
                                "type": "uint256"
                            }
                        ],
                        "name": "InvalidAccountNonce",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "InvalidShortString",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "str",
                                "type": "string"
                            }
                        ],
                        "name": "StringTooLong",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [],
                        "name": "EIP712DomainChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    },
                    {
                        "inputs": [],
                        "name": "DOMAIN_SEPARATOR",
                        "outputs": [
                            {
                                "internalType": "bytes32",
                                "name": "",
                                "type": "bytes32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "INITIAL_AMOUNT",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            }
                        ],
                        "name": "allowance",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "approve",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "balanceOf",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "decimals",
                        "outputs": [
                            {
                                "internalType": "uint8",
                                "name": "",
                                "type": "uint8"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "eip712Domain",
                        "outputs": [
                            {
                                "internalType": "bytes1",
                                "name": "fields",
                                "type": "bytes1"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "version",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "chainId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "verifyingContract",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "salt",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint256[]",
                                "name": "extensions",
                                "type": "uint256[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            }
                        ],
                        "name": "giveaway",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "name",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "nonces",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "permit",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "symbol",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "totalSupply",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "transfer",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "transferFrom",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T04:02:08.000Z"
            },
            "ERC2771Forwarder": {
                "address": "0x39793Fe8F13EE4E642573Cb9FEb0001bF20D16eE",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint48",
                                "name": "deadline",
                                "type": "uint48"
                            }
                        ],
                        "name": "ERC2771ForwarderExpiredRequest",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2771ForwarderInvalidSigner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "requestedValue",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "msgValue",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC2771ForwarderMismatchedValue",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "target",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2771UntrustfulTarget",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "FailedCall",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "balance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "InsufficientBalance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "currentNonce",
                                "type": "uint256"
                            }
                        ],
                        "name": "InvalidAccountNonce",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "InvalidShortString",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "str",
                                "type": "string"
                            }
                        ],
                        "name": "StringTooLong",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [],
                        "name": "EIP712DomainChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "nonce",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "success",
                                "type": "bool"
                            }
                        ],
                        "name": "ExecutedForwardRequest",
                        "type": "event"
                    },
                    {
                        "inputs": [],
                        "name": "eip712Domain",
                        "outputs": [
                            {
                                "internalType": "bytes1",
                                "name": "fields",
                                "type": "bytes1"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "version",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "chainId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "verifyingContract",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "salt",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint256[]",
                                "name": "extensions",
                                "type": "uint256[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData",
                                "name": "request",
                                "type": "tuple"
                            }
                        ],
                        "name": "execute",
                        "outputs": [],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData[]",
                                "name": "requests",
                                "type": "tuple[]"
                            },
                            {
                                "internalType": "address payable",
                                "name": "refundReceiver",
                                "type": "address"
                            }
                        ],
                        "name": "executeBatch",
                        "outputs": [],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "nonces",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData",
                                "name": "request",
                                "type": "tuple"
                            }
                        ],
                        "name": "verify",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T04:02:16.000Z"
            },
            "SellerRegistry": {
                "address": "0xB1600863FF47D4E0861c9E8d01fCCF838713b276",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            }
                        ],
                        "name": "PaymentChannelsAdded",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            }
                        ],
                        "name": "PaymentChannelsRemoved",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "name": "SellerRegistered",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "addPaymentChannels",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "isActiveSeller",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "paymentChannels",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "registerSeller",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "removePaymentChannels",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T04:02:22.000Z"
            },
            "ItemRegistry": {
                "address": "0x7a85a5e7A18EC387f719359d9A002E36DE52C23A",
                "abi": [
                    {
                        "inputs": [],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "bytes32",
                                "name": "itemName",
                                "type": "bytes32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "usdPrice",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "shareItemIDs",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemRegistered",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "resumed",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemSaleResumed",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "suspension",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemSaleSuspended",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "seller_",
                                "type": "address"
                            }
                        ],
                        "name": "getItemsOfSeller",
                        "outputs": [
                            {
                                "internalType": "uint32[]",
                                "name": "",
                                "type": "uint32[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "itemRevenueSharers",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "nameToHash",
                                "type": "string"
                            }
                        ],
                        "name": "nameHash",
                        "outputs": [
                            {
                                "internalType": "bytes32",
                                "name": "hash",
                                "type": "bytes32"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "numberOfSharers",
                        "outputs": [
                            {
                                "internalType": "uint8",
                                "name": "",
                                "type": "uint8"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "itemNameHash",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "address",
                                "name": "seller_",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "revenueSharers",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "shareTerms",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "uint16[]",
                                "name": "shares",
                                "type": "uint16[]"
                            }
                        ],
                        "name": "registerItem",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "resumeItemSale",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint8",
                                "name": "index",
                                "type": "uint8"
                            }
                        ],
                        "name": "revenueSharerOfItem",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "parent",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "revenueSharingItems",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "seller",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            }
                        ],
                        "name": "setPriceTable",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sellerProxy_",
                                "type": "address"
                            }
                        ],
                        "name": "setSellerProxy",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "suspendItemSale",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "suspensions",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "timestampRegistered",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "newSeller",
                                "type": "address"
                            }
                        ],
                        "name": "transferSellerRight",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T04:02:30.000Z"
            },
            "PriceTable": {
                "address": "0x4E9fF672c632FEa11e0D947b35A8a7A8C3ecc0a0",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "itemRegistryAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "sellerRegistryAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "discountedPrice",
                                "type": "uint256"
                            }
                        ],
                        "name": "DiscountStarted",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "newUsdToToken",
                                "type": "uint256"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "prevUsdToToken",
                                "type": "uint256"
                            }
                        ],
                        "name": "ExchangeRateChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "newUsdPrice",
                                "type": "uint256"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "prevUsdPrice",
                                "type": "uint256"
                            }
                        ],
                        "name": "ItemPriceChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "PaymentChannelAdded",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "name": "PaymentChannelRemoved",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "addPaymentChannel",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "paymentChannel",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "changeExchangeRate",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            }
                        ],
                        "name": "changeItemPrice",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "getPriceInfoList",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "token",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "tokenAmount",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct PriceTable.PriceInfo[]",
                                "name": "prices",
                                "type": "tuple[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "getPriceUsd",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint16",
                                "name": "revenueShare",
                                "type": "uint16"
                            }
                        ],
                        "name": "initializeItemPrice",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "paymentChannels",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "priceOfItemIn",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenAmount",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "removePaymentChannel",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "revenueSharing",
                        "outputs": [
                            {
                                "internalType": "uint16",
                                "name": "",
                                "type": "uint16"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "endTime",
                                "type": "uint256"
                            }
                        ],
                        "name": "startDiscount",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "usdPrice",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "usdToToken",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T04:02:38.000Z"
            },
            "ProfitEscrow": {
                "address": "0x98bE125EF1A234EC5dC6d313Ef8Fa37b252F9eDe",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "itemRegistry_",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "priceTable_",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newProcessor",
                                "type": "address"
                            }
                        ],
                        "name": "ProcessorUpdated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ProfitAccumulated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "recipient",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ProfitClaimed",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "accumulate",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "recipient",
                                "type": "address"
                            }
                        ],
                        "name": "claim",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "getBalanceFor",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "paymentProcessor",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "priceTable",
                        "outputs": [
                            {
                                "internalType": "contract PriceTable",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "processor",
                                "type": "address"
                            }
                        ],
                        "name": "setPaymentProcessor",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T04:02:52.000Z"
            },
            "PaymentProcessor": {
                "address": "0xb826b6a9f6A9f8d1078594614a6207b6157803a0",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint16",
                                "name": "initialFeeRate",
                                "type": "uint16"
                            },
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "profitEscrowAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "newDeadline",
                                "type": "uint256"
                            }
                        ],
                        "name": "changePermissionDeadline",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "feeRateLog",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint16",
                                "name": "feeRate",
                                "type": "uint16"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "permissionDeadline",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "priceTable",
                        "outputs": [
                            {
                                "internalType": "contract PriceTable",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "process",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "profitEscrow",
                        "outputs": [
                            {
                                "internalType": "contract ProfitEscrow",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T04:03:00.000Z"
            },
            "Ledger": {
                "address": "0xa84fa70D3B982822055D31c1a1426868c10077E2",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721IncorrectOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC721InsufficientApproval",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "approver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidApprover",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidOperator",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "receiver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidReceiver",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidSender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC721NonexistentToken",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "approved",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "approved",
                                "type": "bool"
                            }
                        ],
                        "name": "ApprovalForAll",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "approve",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "balanceOf",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "getApproved",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            }
                        ],
                        "name": "getPurchaseID",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            }
                        ],
                        "name": "isApprovedForAll",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            }
                        ],
                        "name": "logPurchase",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "name",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ownerOf",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "purchases",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bytes",
                                "name": "data",
                                "type": "bytes"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "internalType": "bool",
                                "name": "approved",
                                "type": "bool"
                            }
                        ],
                        "name": "setApprovalForAll",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "storeAddress",
                                "type": "address"
                            }
                        ],
                        "name": "setStore",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes4",
                                "name": "interfaceId",
                                "type": "bytes4"
                            }
                        ],
                        "name": "supportsInterface",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "symbol",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "tokenURI",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "transferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T04:03:14.000Z"
            },
            "Store": {
                "address": "0x47925e8050A1B6544750435D1c46404e3581DaCA",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "ledgerAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "paymentProcessorAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "name": "ItemPurchased",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "isTokenPermitted",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "isPermitted",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "ledger",
                        "outputs": [
                            {
                                "internalType": "contract Ledger",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "payment",
                        "outputs": [
                            {
                                "internalType": "contract PaymentProcessor",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "priceTable",
                        "outputs": [
                            {
                                "internalType": "contract PriceTable",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "purchaseItem",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "purchaseID",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "purchaseItemWithPermission",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "purchaseID",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T04:03:22.000Z"
            },
            "SellerProxy": {
                "address": "0xfAB3e996c07989bEE94c0Cf77D367578Ae0147Ff",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "paymentProcessor",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "sellerID",
                                "type": "uint32"
                            }
                        ],
                        "name": "ItemRegistrationDelegated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "recipient",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "ProfitClaimDelegated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "sellerID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "sellerAddress",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "items",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "SellerRightClaimed",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "sellerID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "recipient",
                                "type": "address"
                            }
                        ],
                        "name": "claimProfit",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "sellerID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "items",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "address",
                                "name": "sellerAddress",
                                "type": "address"
                            }
                        ],
                        "name": "claimSellerRight",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "sellerID",
                                "type": "uint32"
                            }
                        ],
                        "name": "getItemsOfSeller",
                        "outputs": [
                            {
                                "internalType": "uint32[]",
                                "name": "",
                                "type": "uint32[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "itemNameHash",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint32",
                                "name": "sellerID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "revenueSharers",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "shareTerms",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "uint16[]",
                                "name": "shares",
                                "type": "uint16[]"
                            }
                        ],
                        "name": "registerItem",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T04:03:36.000Z"
            },
            "PurchaseProxy": {
                "address": "0x724Cf5e1E99aCb67B874E92A7182130923f89F0A",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "storeAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256[]",
                                "name": "purchases",
                                "type": "uint256[]"
                            }
                        ],
                        "name": "PurchaseIDsClaimed",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "ownerID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "claimer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256[]",
                                "name": "purchaseIDs",
                                "type": "uint256[]"
                            }
                        ],
                        "name": "claimPurchaseIDs",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "purchaseID",
                                "type": "uint256"
                            }
                        ],
                        "name": "getPurchaseInfo",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "uint256",
                                        "name": "tokenID",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint32",
                                        "name": "itemID",
                                        "type": "uint32"
                                    },
                                    {
                                        "internalType": "uint32",
                                        "name": "buyer",
                                        "type": "uint32"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "timestamp",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct PurchaseProxy.PurchaseInfo",
                                "name": "purchase",
                                "type": "tuple"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint32",
                                "name": "ownerID",
                                "type": "uint32"
                            }
                        ],
                        "name": "purchaseItem",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T04:03:42.000Z"
            }
        }
    },
    {
        "timestamp": "2025-05-20T07:44:28.722Z",
        "network": "op_sepolia",
        "deployments": {
            "MockUSDC": {
                "address": "0x30Db32C834bBada42AF142F183C89F68621b8742",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "recipients",
                                "type": "address[]"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [],
                        "name": "ECDSAInvalidSignature",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "length",
                                "type": "uint256"
                            }
                        ],
                        "name": "ECDSAInvalidSignatureLength",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "ECDSAInvalidSignatureS",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "allowance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC20InsufficientAllowance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "balance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC20InsufficientBalance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "approver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidApprover",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "receiver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidReceiver",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidSender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC20InvalidSpender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC2612ExpiredSignature",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2612InvalidSigner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "currentNonce",
                                "type": "uint256"
                            }
                        ],
                        "name": "InvalidAccountNonce",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "InvalidShortString",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "str",
                                "type": "string"
                            }
                        ],
                        "name": "StringTooLong",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [],
                        "name": "EIP712DomainChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    },
                    {
                        "inputs": [],
                        "name": "DOMAIN_SEPARATOR",
                        "outputs": [
                            {
                                "internalType": "bytes32",
                                "name": "",
                                "type": "bytes32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "INITIAL_AMOUNT",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            }
                        ],
                        "name": "allowance",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "approve",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "balanceOf",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "decimals",
                        "outputs": [
                            {
                                "internalType": "uint8",
                                "name": "",
                                "type": "uint8"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "eip712Domain",
                        "outputs": [
                            {
                                "internalType": "bytes1",
                                "name": "fields",
                                "type": "bytes1"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "version",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "chainId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "verifyingContract",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "salt",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint256[]",
                                "name": "extensions",
                                "type": "uint256[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            }
                        ],
                        "name": "giveaway",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "name",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "nonces",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "spender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "permit",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "symbol",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "totalSupply",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "transfer",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            }
                        ],
                        "name": "transferFrom",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T07:42:42.000Z"
            },
            "ERC2771Forwarder": {
                "address": "0x25c98e72091D9e3Bac4E21B05C2fa8c5cE667a11",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint48",
                                "name": "deadline",
                                "type": "uint48"
                            }
                        ],
                        "name": "ERC2771ForwarderExpiredRequest",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2771ForwarderInvalidSigner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "requestedValue",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "msgValue",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC2771ForwarderMismatchedValue",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "target",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "ERC2771UntrustfulTarget",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "FailedCall",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "balance",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "needed",
                                "type": "uint256"
                            }
                        ],
                        "name": "InsufficientBalance",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "currentNonce",
                                "type": "uint256"
                            }
                        ],
                        "name": "InvalidAccountNonce",
                        "type": "error"
                    },
                    {
                        "inputs": [],
                        "name": "InvalidShortString",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "str",
                                "type": "string"
                            }
                        ],
                        "name": "StringTooLong",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [],
                        "name": "EIP712DomainChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "signer",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "nonce",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "success",
                                "type": "bool"
                            }
                        ],
                        "name": "ExecutedForwardRequest",
                        "type": "event"
                    },
                    {
                        "inputs": [],
                        "name": "eip712Domain",
                        "outputs": [
                            {
                                "internalType": "bytes1",
                                "name": "fields",
                                "type": "bytes1"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "version",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "chainId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "verifyingContract",
                                "type": "address"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "salt",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint256[]",
                                "name": "extensions",
                                "type": "uint256[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData",
                                "name": "request",
                                "type": "tuple"
                            }
                        ],
                        "name": "execute",
                        "outputs": [],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData[]",
                                "name": "requests",
                                "type": "tuple[]"
                            },
                            {
                                "internalType": "address payable",
                                "name": "refundReceiver",
                                "type": "address"
                            }
                        ],
                        "name": "executeBatch",
                        "outputs": [],
                        "stateMutability": "payable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "nonces",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "from",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "address",
                                        "name": "to",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "value",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "gas",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint48",
                                        "name": "deadline",
                                        "type": "uint48"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "data",
                                        "type": "bytes"
                                    },
                                    {
                                        "internalType": "bytes",
                                        "name": "signature",
                                        "type": "bytes"
                                    }
                                ],
                                "internalType": "struct ERC2771Forwarder.ForwardRequestData",
                                "name": "request",
                                "type": "tuple"
                            }
                        ],
                        "name": "verify",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T07:42:50.000Z"
            },
            "SellerRegistry": {
                "address": "0xb742d74D8D3c14001543065de112BF2e5768b5c9",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            }
                        ],
                        "name": "PaymentChannelsAdded",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            }
                        ],
                        "name": "PaymentChannelsRemoved",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "address[]",
                                "name": "paymentChannels",
                                "type": "address[]"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "name": "SellerRegistered",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "addPaymentChannels",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "isActiveSeller",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "paymentChannels",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "registerSeller",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address[]",
                                "name": "paymentChannels_",
                                "type": "address[]"
                            }
                        ],
                        "name": "removePaymentChannels",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T07:42:56.000Z"
            },
            "ItemRegistry": {
                "address": "0x5745f62DFC439039b398F127134F37d65e453fE0",
                "abi": [
                    {
                        "inputs": [],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "bytes32",
                                "name": "itemName",
                                "type": "bytes32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "seller",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "usdPrice",
                                "type": "uint256"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "shareItemIDs",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemRegistered",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "resumed",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemSaleResumed",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "suspension",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemSaleSuspended",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "seller_",
                                "type": "address"
                            }
                        ],
                        "name": "getItemsOfSeller",
                        "outputs": [
                            {
                                "internalType": "uint32[]",
                                "name": "",
                                "type": "uint32[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "itemRevenueSharers",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "string",
                                "name": "nameToHash",
                                "type": "string"
                            }
                        ],
                        "name": "nameHash",
                        "outputs": [
                            {
                                "internalType": "bytes32",
                                "name": "hash",
                                "type": "bytes32"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "numberOfSharers",
                        "outputs": [
                            {
                                "internalType": "uint8",
                                "name": "",
                                "type": "uint8"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "itemNameHash",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "address",
                                "name": "seller_",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "revenueSharers",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "shareTerms",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "uint16[]",
                                "name": "shares",
                                "type": "uint16[]"
                            }
                        ],
                        "name": "registerItem",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "itemShareIDs",
                                "type": "uint32[]"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "resumeItemSale",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint8",
                                "name": "index",
                                "type": "uint8"
                            }
                        ],
                        "name": "revenueSharerOfItem",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "parent",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "revenueSharingItems",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "seller",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            }
                        ],
                        "name": "setPriceTable",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sellerProxy_",
                                "type": "address"
                            }
                        ],
                        "name": "setSellerProxy",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "suspendItemSale",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "suspensions",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "timestampRegistered",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "newSeller",
                                "type": "address"
                            }
                        ],
                        "name": "transferSellerRight",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T07:43:04.000Z"
            },
            "PriceTable": {
                "address": "0x68023aCF67A2A22b5C7F3B058C016e5dF2f27F88",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "itemRegistryAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "sellerRegistryAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "discountedPrice",
                                "type": "uint256"
                            }
                        ],
                        "name": "DiscountStarted",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "newUsdToToken",
                                "type": "uint256"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "prevUsdToToken",
                                "type": "uint256"
                            }
                        ],
                        "name": "ExchangeRateChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "newUsdPrice",
                                "type": "uint256"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "prevUsdPrice",
                                "type": "uint256"
                            }
                        ],
                        "name": "ItemPriceChanged",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "PaymentChannelAdded",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "name": "PaymentChannelRemoved",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "addPaymentChannel",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "paymentChannel",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdToToken_",
                                "type": "uint256"
                            }
                        ],
                        "name": "changeExchangeRate",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            }
                        ],
                        "name": "changeItemPrice",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "getPriceInfoList",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "address",
                                        "name": "token",
                                        "type": "address"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "tokenAmount",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct PriceTable.PriceInfo[]",
                                "name": "prices",
                                "type": "tuple[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "getPriceUsd",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint16",
                                "name": "revenueShare",
                                "type": "uint16"
                            }
                        ],
                        "name": "initializeItemPrice",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "isSuccess",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "paymentChannels",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "priceOfItemIn",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenAmount",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "removePaymentChannel",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "revenueSharing",
                        "outputs": [
                            {
                                "internalType": "uint16",
                                "name": "",
                                "type": "uint16"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice_",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "endTime",
                                "type": "uint256"
                            }
                        ],
                        "name": "startDiscount",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "name": "usdPrice",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "name": "usdToToken",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T07:43:12.000Z"
            },
            "ProfitEscrow": {
                "address": "0xBfCdC2067c8f604c559AD979C2F8a4F72c26a1B4",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "itemRegistry_",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "priceTable_",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newProcessor",
                                "type": "address"
                            }
                        ],
                        "name": "ProcessorUpdated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ProfitAccumulated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "recipient",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "ProfitClaimed",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "amount",
                                "type": "uint256"
                            }
                        ],
                        "name": "accumulate",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "recipient",
                                "type": "address"
                            }
                        ],
                        "name": "claim",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "getBalanceFor",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "paymentProcessor",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "priceTable",
                        "outputs": [
                            {
                                "internalType": "contract PriceTable",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "processor",
                                "type": "address"
                            }
                        ],
                        "name": "setPaymentProcessor",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T07:43:26.000Z"
            },
            "PaymentProcessor": {
                "address": "0x3904cD462abCD9E06399610Bfbab58166789b946",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "uint16",
                                "name": "initialFeeRate",
                                "type": "uint16"
                            },
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "profitEscrowAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "newDeadline",
                                "type": "uint256"
                            }
                        ],
                        "name": "changePermissionDeadline",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "feeRateLog",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint16",
                                "name": "feeRate",
                                "type": "uint16"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "permissionDeadline",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "priceTable",
                        "outputs": [
                            {
                                "internalType": "contract PriceTable",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "process",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "profitEscrow",
                        "outputs": [
                            {
                                "internalType": "contract ProfitEscrow",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T07:43:32.000Z"
            },
            "Ledger": {
                "address": "0x59fA7F7D385cea7C73C85B2Cf70099E93fC53295",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721IncorrectOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC721InsufficientApproval",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "approver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidApprover",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidOperator",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "receiver",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidReceiver",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            }
                        ],
                        "name": "ERC721InvalidSender",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ERC721NonexistentToken",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "approved",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "Approval",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "bool",
                                "name": "approved",
                                "type": "bool"
                            }
                        ],
                        "name": "ApprovalForAll",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "Transfer",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "approve",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "balanceOf",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "getApproved",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            }
                        ],
                        "name": "getPurchaseID",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "pure",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            }
                        ],
                        "name": "isApprovedForAll",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            }
                        ],
                        "name": "logPurchase",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "name",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "ownerOf",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "purchases",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bytes",
                                "name": "data",
                                "type": "bytes"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "operator",
                                "type": "address"
                            },
                            {
                                "internalType": "bool",
                                "name": "approved",
                                "type": "bool"
                            }
                        ],
                        "name": "setApprovalForAll",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "storeAddress",
                                "type": "address"
                            }
                        ],
                        "name": "setStore",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes4",
                                "name": "interfaceId",
                                "type": "bytes4"
                            }
                        ],
                        "name": "supportsInterface",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "symbol",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "tokenURI",
                        "outputs": [
                            {
                                "internalType": "string",
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "from",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "tokenId",
                                "type": "uint256"
                            }
                        ],
                        "name": "transferFrom",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T07:43:48.000Z"
            },
            "Store": {
                "address": "0xcfBfD7066e7a3ea37dA785e833787aF3C0f9bEE1",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarderAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "priceTableAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "ledgerAddress",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "paymentProcessorAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "buyer",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint256",
                                "name": "tokenID",
                                "type": "uint256"
                            }
                        ],
                        "name": "ItemPurchased",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "isTokenPermitted",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "isPermitted",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "forwarder",
                                "type": "address"
                            }
                        ],
                        "name": "isTrustedForwarder",
                        "outputs": [
                            {
                                "internalType": "bool",
                                "name": "",
                                "type": "bool"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "itemRegistry",
                        "outputs": [
                            {
                                "internalType": "contract ItemRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "ledger",
                        "outputs": [
                            {
                                "internalType": "contract Ledger",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "payment",
                        "outputs": [
                            {
                                "internalType": "contract PaymentProcessor",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "priceTable",
                        "outputs": [
                            {
                                "internalType": "contract PriceTable",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            }
                        ],
                        "name": "purchaseItem",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "purchaseID",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "deadline",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint8",
                                "name": "v",
                                "type": "uint8"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "r",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "bytes32",
                                "name": "s",
                                "type": "bytes32"
                            }
                        ],
                        "name": "purchaseItemWithPermission",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "purchaseID",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "sellerRegistry",
                        "outputs": [
                            {
                                "internalType": "contract SellerRegistry",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "trustedForwarder",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T07:43:54.000Z"
            },
            "SellerProxy": {
                "address": "0xE824F7cFaC8e478C1901A670433267BA4135EDD4",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "paymentProcessor",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "sellerID",
                                "type": "uint32"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "itemShareIDs",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "ItemRegistrationDelegated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "recipient",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            }
                        ],
                        "name": "ProfitClaimDelegated",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "uint32",
                                "name": "sellerID",
                                "type": "uint32"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "sellerAddress",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint32[]",
                                "name": "items",
                                "type": "uint32[]"
                            }
                        ],
                        "name": "SellerRightClaimed",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "sellerID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "address",
                                "name": "recipient",
                                "type": "address"
                            }
                        ],
                        "name": "claimProfit",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "sellerID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "items",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "address",
                                "name": "sellerAddress",
                                "type": "address"
                            }
                        ],
                        "name": "claimSellerRight",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "sellerID",
                                "type": "uint32"
                            }
                        ],
                        "name": "getItemsOfSeller",
                        "outputs": [
                            {
                                "internalType": "uint32[]",
                                "name": "",
                                "type": "uint32[]"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "bytes32",
                                "name": "itemNameHash",
                                "type": "bytes32"
                            },
                            {
                                "internalType": "uint32",
                                "name": "sellerID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "revenueSharers",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "uint256",
                                "name": "usdPrice",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint32[]",
                                "name": "shareTerms",
                                "type": "uint32[]"
                            },
                            {
                                "internalType": "uint16[]",
                                "name": "shares",
                                "type": "uint16[]"
                            }
                        ],
                        "name": "registerItem",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T07:44:08.000Z"
            },
            "PurchaseProxy": {
                "address": "0xa85e9ACa42486eA671D97EdD12e631739714E508",
                "abi": [
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "storeAddress",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableInvalidOwner",
                        "type": "error"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "account",
                                "type": "address"
                            }
                        ],
                        "name": "OwnableUnauthorizedAccount",
                        "type": "error"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "previousOwner",
                                "type": "address"
                            },
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "OwnershipTransferred",
                        "type": "event"
                    },
                    {
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": true,
                                "internalType": "address",
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "indexed": false,
                                "internalType": "uint256[]",
                                "name": "purchases",
                                "type": "uint256[]"
                            }
                        ],
                        "name": "PurchaseIDsClaimed",
                        "type": "event"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint32",
                                "name": "ownerID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "address",
                                "name": "claimer",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256[]",
                                "name": "purchaseIDs",
                                "type": "uint256[]"
                            }
                        ],
                        "name": "claimPurchaseIDs",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "purchaseID",
                                "type": "uint256"
                            }
                        ],
                        "name": "getPurchaseInfo",
                        "outputs": [
                            {
                                "components": [
                                    {
                                        "internalType": "uint256",
                                        "name": "tokenID",
                                        "type": "uint256"
                                    },
                                    {
                                        "internalType": "uint32",
                                        "name": "itemID",
                                        "type": "uint32"
                                    },
                                    {
                                        "internalType": "uint32",
                                        "name": "buyer",
                                        "type": "uint32"
                                    },
                                    {
                                        "internalType": "uint256",
                                        "name": "timestamp",
                                        "type": "uint256"
                                    }
                                ],
                                "internalType": "struct PurchaseProxy.PurchaseInfo",
                                "name": "purchase",
                                "type": "tuple"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "address",
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "name": "owner",
                        "outputs": [
                            {
                                "internalType": "uint32",
                                "name": "",
                                "type": "uint32"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "token",
                                "type": "address"
                            },
                            {
                                "internalType": "uint32",
                                "name": "itemID",
                                "type": "uint32"
                            },
                            {
                                "internalType": "uint32",
                                "name": "ownerID",
                                "type": "uint32"
                            }
                        ],
                        "name": "purchaseItem",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "renounceOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "address",
                                "name": "newOwner",
                                "type": "address"
                            }
                        ],
                        "name": "transferOwnership",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ],
                "timestamp": "2025-05-20T07:44:22.000Z"
            }
        }
    }
]