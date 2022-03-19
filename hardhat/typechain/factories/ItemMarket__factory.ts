/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ItemMarket, ItemMarketInterface } from "../ItemMarket";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "BuyItem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "ListItem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RemoveItem",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_metallicAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "buyItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllItems",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct ItemMarket.SaleInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalItems",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    name: "inventory",
    outputs: [
      {
        internalType: "address payable",
        name: "seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "listItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "removeItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506001600055611583806100256000396000f3fe6080604052600436106100965760003560e01c806366de6ebb11610069578063bcb143ef1161004e578063bcb143ef14610172578063be63f78214610192578063f23a6e61146101f157600080fd5b806366de6ebb14610125578063bc197c811461014557600080fd5b806301ffc9a71461009b578063266fa895146100d1578063310aac69146100e65780634ba1d6aa14610103575b600080fd5b3480156100a757600080fd5b506100bb6100b6366004610e1f565b610236565b6040516100c891906112b3565b60405180910390f35b6100e46100df366004610ccb565b6102cf565b005b3480156100f257600080fd5b506002546040516100c8919061136f565b34801561010f57600080fd5b5061011861064d565b6040516100c891906112a2565b34801561013157600080fd5b506100e4610140366004610d7f565b6107d7565b34801561015157600080fd5b50610165610160366004610c13565b6108fa565b6040516100c891906112c1565b34801561017e57600080fd5b506100e461018d366004610dca565b610925565b34801561019e57600080fd5b506101e16101ad366004610e3c565b600160208190526000918252604090912080549181015460028201546003909201546001600160a01b039093169290919084565b6040516100c894939291906111db565b3480156101fd57600080fd5b5061016561020c366004610d2a565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e00000000000000000000000000000000000000000000000000000000014806102c957507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b600260005414156102fb5760405162461bcd60e51b81526004016102f29061133f565b60405180910390fd5b60026000558061031d5760405162461bcd60e51b81526004016102f2906112ef565b61ffff8216600090815260016020526040902060028101548391908311156103575760405162461bcd60e51b81526004016102f29061135f565b60038101546000610368858361141e565b61037a90670de0b6b3a764000061141e565b905080886001600160a01b03166370a08231336040518263ffffffff1660e01b81526004016103a991906111cd565b60206040518083038186803b1580156103c157600080fd5b505afa1580156103d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f99190610e59565b10156104175760405162461bcd60e51b81526004016102f2906112df565b6040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081526000906001600160a01b038a169063dd62ed3e906104619033903090600401611210565b60206040518083038186803b15801561047957600080fd5b505afa15801561048d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b19190610e59565b9050818110156104d35760405162461bcd60e51b81526004016102f29061132f565b83546040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b03808c16926323b872dd9261051f9233921690879060040161122b565b602060405180830381600087803b15801561053957600080fd5b505af115801561054d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105719190610dfb565b50604051637921219560e11b81526001600160a01b0389169063f242432a906105a490309033908c908c90600401611253565b600060405180830381600087803b1580156105be57600080fd5b505af11580156105d2573d6000803e3d6000fd5b50505050858460020160008282546105ea919061143d565b909155505083546040516001600160a01b03808b1692169033907fb10ea0416ebf85c36e0ba132a99151eb95174ec53fb76bbbba5058de53074c9190610635908c908c908a90611398565b60405180910390a45050600160005550505050505050565b6060600061065a60025490565b905060008167ffffffffffffffff81111561068557634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156106ea57816020015b6106d7604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b8152602001906001900390816106a35790505b50905060005b828110156107d0576000819050600060028261ffff168154811061072457634e487b7160e01b600052603260045260246000fd5b6000918252602080832060108304015461ffff6002600f90941684026101000a909104168084526001808352604094859020855160808101875281546001600160a01b03168152918101549382019390935292820154938301939093526003015460608201528551919250908590859081106107b057634e487b7160e01b600052603260045260246000fd5b6020026020010181905250505080806107c8906114af565b9150506106f0565b5092915050565b806107f45760405162461bcd60e51b81526004016102f2906112cf565b61ffff82166000908152600160205260409020600281015483919083111561082e5760405162461bcd60e51b81526004016102f29061131f565b82816002015461083e919061143d565b6002820155604051637921219560e11b81526001600160a01b0386169063f242432a90610875903090339089908990600401611253565b600060405180830381600087803b15801561088f57600080fd5b505af11580156108a3573d6000803e3d6000fd5b50505050846001600160a01b0316336001600160a01b03167e217e26650c4967b729231fe20b51f925d29551961ca00166a67709c094871a86866040516108eb92919061137d565b60405180910390a35050505050565b7fbc197c81000000000000000000000000000000000000000000000000000000005b95945050505050565b600081116109455760405162461bcd60e51b81526004016102f29061134f565b816109625760405162461bcd60e51b81526004016102f29061130f565b61ffff8316600090815260016020526040902060028101548491901561099a5760405162461bcd60e51b81526004016102f2906112ff565b60018181018690556002808301869055600383018590558254337fffffffffffffffffffffffff0000000000000000000000000000000000000000909116811784558154928301825560008290527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace60108404018054600f9094169092026101000a61ffff8181021990941693861602929092179055604051637921219560e11b81526001600160a01b0388169163f242432a91610a61919030908a908a90600401611253565b600060405180830381600087803b158015610a7b57600080fd5b505af1158015610a8f573d6000803e3d6000fd5b50505050856001600160a01b0316336001600160a01b03167f63dae334df4ed88251ae019d58f6e1d070bc2ce749a4d5d8670852420323dc09878787604051610ada93929190611398565b60405180910390a3505050505050565b6000610afd610af8846113cf565b6113b3565b90508083825260208201905082856020860285011115610b1c57600080fd5b60005b85811015610b4657610b318783610bfd565b83526020928301929190910190600101610b1f565b5050509392505050565b6000610b5e610af8846113f3565b905082815260208101848484011115610b7657600080fd5b610b81848285611476565b509392505050565b80356102c9816114f6565b600082601f830112610ba4578081fd5b8135610bb4848260208601610aea565b949350505050565b80516102c98161150d565b80356102c981611515565b600082601f830112610be2578081fd5b8135610bb4848260208601610b50565b80356102c98161153d565b80356102c981611547565b80516102c981611547565b600080600080600060a08688031215610c2a578081fd5b610c3687828801610b89565b94506020610c4688828901610b89565b945050604086013567ffffffffffffffff811115610c62578182fd5b610c6e88828901610b94565b935050606086013567ffffffffffffffff811115610c8a578182fd5b610c9688828901610b94565b925050608086013567ffffffffffffffff811115610cb2578182fd5b610cbe88828901610bd2565b9150509295509295909350565b60008060008060808587031215610ce0578384fd5b610cec86858701610b89565b93506020610cfc87828801610b89565b9350506040610d0d87828801610bfd565b9250506060610d1e87828801610bfd565b91505092959194509250565b600080600080600060a08688031215610d41578081fd5b610d4d87828801610b89565b94506020610d5d88828901610b89565b9450506040610d6e88828901610bfd565b9350506060610c9688828901610bfd565b600080600060608486031215610d93578283fd5b610d9f85848601610b89565b92506020610daf86828701610bfd565b9250506040610dc086828701610bfd565b9150509250925092565b60008060008060808587031215610ddf578384fd5b610deb86858701610b89565b93506020610cfc87828801610bfd565b600060208284031215610e0c578081fd5b610e1883828401610bbc565b9392505050565b600060208284031215610e30578081fd5b610e1883828401610bc7565b600060208284031215610e4d578081fd5b610e1883828401610bf2565b600060208284031215610e6a578081fd5b610e1883828401610c08565b610e80828261117d565b5060800190565b610e9081611465565b82525050565b610e9081611454565b6000610ea9825190565b8084526020938401938301825b82811015610edb578151610eca8782610e76565b965050602082019150600101610eb6565b5093949350505050565b801515610e90565b7fffffffff000000000000000000000000000000000000000000000000000000008116610e90565b601f8152602081017f4d61726b6574506c6163653a206e6f7468696e6720746f2072656d6f76652e00815290505b60200190565b60328152602081017f4d61726b6574706c6163653a206e6f7420656e6f75676874204d544c20746f2081527f636f76657220746f74616c2070726963652e0000000000000000000000000000602082015290505b60400190565b601c8152602081017f4d61726b6574506c6163653a206e6f7468696e6720746f206275792e0000000081529050610f43565b602b8152602081017f4d61726b6574506c6163653a2063616e63656c206578697374696e67206c697381527f74696e672066697273742e00000000000000000000000000000000000000000060208201529050610f9d565b601d8152602081017f4d61726b6574506c6163653a206e6f7468696e6720746f206c6973742e00000081529050610f43565b60228152602081017f4d61726b6574506c6163653a206e6f7420656e6f75676820746f2072656d6f7681527f652e00000000000000000000000000000000000000000000000000000000000060208201529050610f9d565b60198152602081017f436865636b2074686520746f6b656e20616c6c6f77616e63650000000000000081529050610f43565b601f8152602081017f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081529050610f43565b601c8152602081017f5072696365206d757374206265206174206c656173742031207765690000000081529050610f43565b60208082527f4d61726b6574506c6163653a206e6f7420656e6f75676820746f2073656c6c2e9101908152610f43565b80516111898382610e96565b50602081015161119c60208401826111c7565b5060408101516111af60408401826111c7565b5060608101516111c260608401826111c7565b505050565b80610e90565b602081016102c98284610e96565b608081016111e98287610e96565b6111f660208301866111c7565b61120360408301856111c7565b61091c60608301846111c7565b6040810161121e8285610e96565b610e186020830184610e96565b606081016112398286610e96565b6112466020830185610e87565b610bb460408301846111c7565b60a081016112618287610e96565b61126e6020830186610e96565b61127b60408301856111c7565b61128860608301846111c7565b818103608083015260008152602081019695505050505050565b60208082528101610e188184610e9f565b602081016102c98284610ee5565b602081016102c98284610eed565b602080825281016102c981610f15565b602080825281016102c981610f49565b602080825281016102c981610fa3565b602080825281016102c981610fd5565b602080825281016102c98161102d565b602080825281016102c98161105f565b602080825281016102c9816110b7565b602080825281016102c9816110e9565b602080825281016102c98161111b565b602080825281016102c98161114d565b602081016102c982846111c7565b6040810161138b82856111c7565b610e1860208301846111c7565b606081016113a682866111c7565b61124660208301856111c7565b60006113be60405190565b90506113ca8282611482565b919050565b600067ffffffffffffffff8211156113e9576113e96114e0565b5060209081020190565b600067ffffffffffffffff82111561140d5761140d6114e0565b601f19601f83011660200192915050565b6000816000190483118215151615611438576114386114ca565b500290565b60008282101561144f5761144f6114ca565b500390565b60006001600160a01b0382166102c9565b60006102c98260006102c982611454565b82818337506000910152565b601f19601f830116810181811067ffffffffffffffff821117156114a8576114a86114e0565b6040525050565b60006000198214156114c3576114c36114ca565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6114ff81611454565b811461150a57600080fd5b50565b8015156114ff565b7fffffffff0000000000000000000000000000000000000000000000000000000081166114ff565b61ffff81166114ff565b806114ff56fea2646970667358221220c69a37299930328643407de00c087e96fe2f56d8a5341ef947beee82db9b1e3964736f6c63430008040033";

export class ItemMarket__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ItemMarket> {
    return super.deploy(overrides || {}) as Promise<ItemMarket>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ItemMarket {
    return super.attach(address) as ItemMarket;
  }
  connect(signer: Signer): ItemMarket__factory {
    return super.connect(signer) as ItemMarket__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ItemMarketInterface {
    return new utils.Interface(_abi) as ItemMarketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ItemMarket {
    return new Contract(address, _abi, signerOrProvider) as ItemMarket;
  }
}