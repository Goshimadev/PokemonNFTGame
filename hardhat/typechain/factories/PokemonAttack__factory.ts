/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PokemonAttack, PokemonAttackInterface } from "../PokemonAttack";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pokemonGameAddress_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newBossHp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPokemonHp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AttackComplete",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum PokemonAttack.BattleStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "BattleComplete",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "level",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "hp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxHp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "attack",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct LPokemonData.Stats",
        name: "stats",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LevelUp",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pokemonIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bossId",
        type: "uint256",
      },
    ],
    name: "attackBoss",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pokemonGameAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620016623803806200166283398101604081905262000034916200006d565b600080546001600160a01b0319166001600160a01b0392909216919091179055620000c0565b80516200006781620000a6565b92915050565b6000602082840312156200007f578081fd5b6200008d838284016200005a565b9392505050565b60006001600160a01b03821662000067565b620000b18162000094565b8114620000bd57600080fd5b50565b61159280620000d06000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638779b2081461003b578063b471a4b914610050575b600080fd5b61004e6100493660046110c1565b610079565b005b600054610063906001600160a01b031681565b60405161007091906111bd565b60405180910390f35b600080546040517f792300f40000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063792300f4906100c59086903390600401611237565b60206040518083038186803b1580156100dd57600080fd5b505afa1580156100f1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610115919061106a565b600080546040517f0e63c7ad00000000000000000000000000000000000000000000000000000000815292935090916001600160a01b0390911690630e63c7ad90610164908690600401611229565b60206040518083038186803b15801561017c57600080fd5b505afa158015610190573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b4919061106a565b90506000826001600160a01b031663abd708ef6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101f157600080fd5b505afa158015610205573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022991906110a4565b11610269576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026090611219565b60405180910390fd5b6000816001600160a01b031663abd708ef6040518163ffffffff1660e01b815260040160206040518083038186803b1580156102a457600080fd5b505afa1580156102b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102dc91906110a4565b11610313576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026090611209565b6001610322838360008461045f565b506000610332828460018461045f565b61033b836108a9565b7fab744f4842154b28648c8567b315cbfadacaf1f8979d8c718257de13bd60cd35826001600160a01b031663abd708ef6040518163ffffffff1660e01b815260040160206040518083038186803b15801561039557600080fd5b505afa1580156103a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103cd91906110a4565b846001600160a01b031663abd708ef6040518163ffffffff1660e01b815260040160206040518083038186803b15801561040657600080fd5b505afa15801561041a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043e91906110a4565b33426040516104509493929190611290565b60405180910390a15050505050565b836001600160a01b031663f6a0e8676040518163ffffffff1660e01b815260040160206040518083038186803b15801561049857600080fd5b505afa1580156104ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d091906110a4565b836001600160a01b031663abd708ef6040518163ffffffff1660e01b815260040160206040518083038186803b15801561050957600080fd5b505afa15801561051d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054191906110a4565b116105fe576040517fe2b767360000000000000000000000000000000000000000000000000000000081526001600160a01b0384169063e2b767369061058c906000906004016111fb565b600060405180830381600087803b1580156105a657600080fd5b505af11580156105ba573d6000803e3d6000fd5b505050507f581a3df9f15706e5afac3985577279bc862f6b1f1f41ea8f71c188b0406688948233426040516105f1939291906111cb565b60405180910390a1610748565b826001600160a01b031663e2b76736856001600160a01b031663f6a0e8676040518163ffffffff1660e01b815260040160206040518083038186803b15801561064657600080fd5b505afa15801561065a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067e91906110a4565b856001600160a01b031663abd708ef6040518163ffffffff1660e01b815260040160206040518083038186803b1580156106b757600080fd5b505afa1580156106cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ef91906110a4565b6106f9919061144a565b6040518263ffffffff1660e01b81526004016107159190611229565b600060405180830381600087803b15801561072f57600080fd5b505af1158015610743573d6000803e3d6000fd5b505050505b80156108a357836001600160a01b031663ede641a4846001600160a01b031663a5985e8c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561079657600080fd5b505afa1580156107aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ce91906110a4565b6107d990600661142b565b866001600160a01b031663cdb986cc6040518163ffffffff1660e01b815260040160206040518083038186803b15801561081257600080fd5b505afa158015610826573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084a91906110a4565b61085491906112e1565b6040518263ffffffff1660e01b81526004016108709190611229565b600060405180830381600087803b15801561088a57600080fd5b505af115801561089e573d6000803e3d6000fd5b505050505b50505050565b806001600160a01b0316639be55e00826001600160a01b031663cdb986cc6040518163ffffffff1660e01b815260040160206040518083038186803b1580156108f157600080fd5b505afa158015610905573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092991906110a4565b836001600160a01b031663ed73fc4b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561096257600080fd5b505afa158015610976573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099a91906110a4565b6109a491906112e1565b6040518263ffffffff1660e01b81526004016109c09190611229565b600060405180830381600087803b1580156109da57600080fd5b505af11580156109ee573d6000803e3d6000fd5b505050505b610a6c816001600160a01b031663a5985e8c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a2f57600080fd5b505afa158015610a43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6791906110a4565b610f7f565b816001600160a01b031663cdb986cc6040518163ffffffff1660e01b815260040160206040518083038186803b158015610aa557600080fd5b505afa158015610ab9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610add91906110a4565b10610f7c576000816001600160a01b031663a5985e8c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b1d57600080fd5b505afa158015610b31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5591906110a4565b90506000826001600160a01b031663cdb986cc6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b9257600080fd5b505afa158015610ba6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bca91906110a4565b9050826001600160a01b031663ede641a4610be484610f7f565b610bee908461144a565b6040518263ffffffff1660e01b8152600401610c0a9190611229565b600060405180830381600087803b158015610c2457600080fd5b505af1158015610c38573d6000803e3d6000fd5b50505050826001600160a01b03166306d8652f846001600160a01b031663296f23f96040518163ffffffff1660e01b815260040160206040518083038186803b158015610c8457600080fd5b505afa158015610c98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbc91906110a4565b610cc79060016112e1565b6040518263ffffffff1660e01b8152600401610ce39190611229565b600060405180830381600087803b158015610cfd57600080fd5b505af1158015610d11573d6000803e3d6000fd5b50505050826001600160a01b0316635143e01a846001600160a01b031663f6a0e8676040518163ffffffff1660e01b815260040160206040518083038186803b158015610d5d57600080fd5b505afa158015610d71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9591906110a4565b610da09060016112e1565b6040518263ffffffff1660e01b8152600401610dbc9190611229565b600060405180830381600087803b158015610dd657600080fd5b505af1158015610dea573d6000803e3d6000fd5b50505050826001600160a01b0316630b5270a7836001610e0a91906112e1565b6040518263ffffffff1660e01b8152600401610e269190611229565b600060405180830381600087803b158015610e4057600080fd5b505af1158015610e54573d6000803e3d6000fd5b505050507f96252af07f695ff3d9ede57abcbc27091d5b5f75d8e9f04944f40ffea6804a61836001600160a01b031663a5985e8c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610eb257600080fd5b505afa158015610ec6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eea91906110a4565b846001600160a01b031663c59d48476040518163ffffffff1660e01b815260040160606040518083038186803b158015610f2357600080fd5b505afa158015610f37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5b9190611087565b3342604051610f6d9493929190611252565b60405180910390a150506109f3565b50565b600080610f8d83600261142b565b600a610f9a600286611355565b610fa590600861142b565b610faf91906112f9565b6064610fbc600387611355565b610fc790600461142b565b610fd191906112f9565b610fdb91906112e1565b610fe591906112e1565b9392505050565b8051610ff781611542565b92915050565b60006060828403121561100e578081fd5b61101860606112c5565b90506000611026848461105f565b9082015260206110388484830161105f565b90820152604061104a8484830161105f565b9082015292915050565b8035610ff781611556565b8051610ff781611556565b60006020828403121561107b578081fd5b610fe583828401610fec565b600060608284031215611098578081fd5b610fe583828401610ffd565b6000602082840312156110b5578081fd5b610fe58382840161105f565b600080604083850312156110d3578081fd5b6110df84828501611054565b915060206110ef85828601611054565b9150509250929050565b61110281611461565b82525050565b6111028161147c565b61110281611487565b60198152602081017f4572726f722e20426f737320646f6e2774206861766520487000000000000000815290505b60200190565b601b8152602081017f4572726f722e20506c6179657220646f6e27742068617665204870000000000081529050611148565b805161118c83826111b7565b50602081015161119f60208401826111b7565b5060408101516111b260408401826111b7565b505050565b80611102565b60208101610ff782846110f9565b606081016111d98286611108565b6111e660208301856110f9565b6111f360408301846111b7565b949350505050565b60208101610ff78284611111565b60208082528101610ff78161111a565b60208082528101610ff78161114e565b60208101610ff782846111b7565b6040810161124582856111b7565b610fe560208301846110f9565b60c0810161126082876111b7565b61126d6020830186611180565b61127a60808301856110f9565b61128760a08301846111b7565b95945050505050565b6080810161129e82876111b7565b6112ab60208301866111b7565b6112b860408301856110f9565b61128760608301846111b7565b60006112d060405190565b90506112dc828261148f565b919050565b600082198211156112f4576112f46114da565b500190565b600082611308576113086114f0565b500490565b80825b600185111561134c5780860481111561132b5761132b6114da565b600185161561133957908102905b80026113458560011c90565b9450611310565b94509492505050565b60ff821691506000610fe5600019848460008261137457506001610fe5565b8161138157506000610fe5565b816001811461139757600281146113a1576113ce565b6001915050610fe5565b60ff8411156113b2576113b26114da565b8360020a9150848211156113c8576113c86114da565b50610fe5565b5060208310610133831016604e8410600b8410161715611401575081810a838111156113fc576113fc6114da565b610fe5565b61140e848484600161130d565b92509050818404811115611424576114246114da565b0292915050565b6000816000190483118215151615611445576114456114da565b500290565b60008282101561145c5761145c6114da565b500390565b60006001600160a01b038216610ff7565b806112dc81611532565b6000610ff782611472565b600081610ff7565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff821117156114d3576114d361151c565b6040525050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60028110610f7c57610f7c611506565b61154b81611461565b8114610f7c57600080fd5b8061154b56fea26469706673582212209db6d9c5e290d61dbb432c96b156436ed0f45ba3811b6927f7115423d317d14364736f6c63430008040033";

export class PokemonAttack__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    pokemonGameAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PokemonAttack> {
    return super.deploy(
      pokemonGameAddress_,
      overrides || {}
    ) as Promise<PokemonAttack>;
  }
  getDeployTransaction(
    pokemonGameAddress_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(pokemonGameAddress_, overrides || {});
  }
  attach(address: string): PokemonAttack {
    return super.attach(address) as PokemonAttack;
  }
  connect(signer: Signer): PokemonAttack__factory {
    return super.connect(signer) as PokemonAttack__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PokemonAttackInterface {
    return new utils.Interface(_abi) as PokemonAttackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PokemonAttack {
    return new Contract(address, _abi, signerOrProvider) as PokemonAttack;
  }
}