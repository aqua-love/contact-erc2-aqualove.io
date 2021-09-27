# Update issue

## 2021-09-25

*

## 2021-09-23

```
Add ERC20Pausable function
Use AQUARLOVETokenFlattened.sol with remix.ethereum.org

```

## 2020-11-20

```
solidity version : ^0.6.0;
openzeppelin-contracts code version changed
     https://github.com/OpenZeppelin/openzeppelin-contracts/tree/release-v3.3/contracts/token/ERC20
caution : It can only be built on remix.ethereum.org.
     use AQUARLOVETokenFlattened.sol
```

# AQUARLOVE-contracts

nvm use v9.5.0

Smart-contracts for AQUARLOVE platform

## Deployment - Ethereum

1. First uncomment the deployer function corresponds to the contract you want to deploy and comment out all the others in `migrations/2_AQUARLOVEtoken.js` file.
2. If the project folder includes `build` folder, first delete it
3. Compile the corresponding contract as follows;
   `truffle compile`
4. Set mnemonic words for deployer in your command line as follows;
   `export MNEMONICS="<mnemonic_words>"`
5. And set your infura project secret key as follows;
   `export INFURA_API_KEY="<infura_project_secret>"`
6. Also set fund collector address as follows;
   `export FUND_COLLECTOR_ADDRESS="<fund_collector_address>"`
7. Finally deploy the contract on the network you desire
   `NETWORK=<network_name> npm run deploy`

```bash
NETWORK=ropsten truffle compile
NETWORK=ropsten npm run deploy
NETWORK=ropsten truffle deploy --network ropsten  --reset

```

## Deploy 인자

: name , symbol , decimals, initialSupply
: "AQUARLOVE" , "AQL" , 18 , 10000000000

## Test

* In order to run the whole tests
  `truffle test`
* In order to run only specific test file

## mainnet AQUARLOVE token address

<https://etherscan.io/token/???????>

## remix url

<http://remix.ethereum.org/#optimize=false&evmVersion=null&version=soljson-v0.6.6+commit.6c089d02.js&runs=200>

## [erc20 constructor arguments abi-encoded](https://abi.hashex.org/)
  
```text
00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000941515541524c4f56450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000341514c0000000000000000000000000000000000000000000000000000000000
```

# etherscan infomation for registration

## logo url

<https://github.com/aqua-love/contact-erc2-aqualove.io/blob/main/aqualove-logo-256.png?raw=true>

## whitepaper
<https://aqualove.io/whitepaper.pdf>

## github
<https://github.com/aqua-love/contact-erc2-aqualove.io>
