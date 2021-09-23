const AQUARLOVEToken = artifacts.require("./AQUARLOVEToken.sol");
// const AQUARLOVECrowdsale = artifacts.require("./AQUARLOVECrowdsale.sol");
// const AQUARLOVEAirdrop = artifacts.require("./AQUARLOVEAirdrop.sol");


// TODO: Change this parameters in mainnet deployment
const rate = 21935; // 1 ETH = 21,935.9375 AQUARLOVE token
const totalSaleCap = 2279 * Math.pow(10, 18); // 2,279.36463 ETH
const wallet = process.env.FUND_COLLECTOR_ADDRESS;

/************* AQUARLOVE Token deployed information ***************/

// Mainnet - Ethereum
// @see https://etherscan.io/token/ reserved at 2021 0815 15:00 
const AQUARLOVE_TOKEN_ADDRESS_MAINNET =
    "0x330d3087b21f31f32810385c94627a067cfd3632";


// Deployer
const TokenContractDeployer = (deployer, network) => {
    if (
        network === "ropsten" ||
        network === "baobab" || // TestNet
        network === "mainnet" ||
        network === "cypress"
    ) {
        // MainNet
        deployer
            .deploy(AQUARLOVEToken)
            .then((_) =>
                console.log(
                    "AQUARLOVE Token contract has been deployed successfully. AQUARLOVEToken.address =" +
                    AQUARLOVEToken.address
                )
            );
    } else {
        throw new Error("Unknown network!");
    }
};

/*************************************************************/

/************* AQUARLOVE Crowdsale deployed information ***************/

// Mainnet - Ethereum
// @see https://etherscan.io/0x
// const AQUARLOVE_CROWDSALE_ADDRESS = '';

// Ropsten - Ethereum
// @see https://rinkeby.etherscan.io/0xb0eb24ce9b029a9e771a7878c7983e1d06f5895d
// const AQUARLOVE_CROWDSALE_ADDRESS = '0xe9b029a9e771a7878c7983e1d06f5895db0eb24c';

// Baobab - Klaytn
// const AQUARLOVE_CROWDSALE_ADDRESS = '0x69f75e30ee83a450b033fd6451fd7993051bb19c';

// Deployer
// const SaleContractDeployer = (deployer, network) => {
//   deployer
//     .deploy(
//       AQUARLOVECrowdsale,
//       rate,
//       wallet,
//       getTokenAddress(network),
//       totalSaleCap
//     )
//     .then((_) =>
//       console.log(
//         `AQUARLOVE Crowdsale contract has been deployed successfully on ${network}.`
//       )
//     );
// };

// function getTokenAddress(network) {
//   switch (network) {
//     case "mainnet":
//       return AQUARLOVE_TOKEN_ADDRESS_MAINNET;
//     case "ropsten":
//       return AQUARLOVE_TOKEN_ADDRESS_ROPSTEN;
//     case "baobab":
//       return AQUARLOVE_TOKEN_ADDRESS_BAOBAB;
//     case "cypress":
//       return AQUARLOVE_TOKEN_ADDRESS_CYPRESS;
//     default:
//       throw new Error("Unknown network!");
//   }
// }

/************* AQUARLOVE Airdrop deployed information ***************/

// mainnet
// const AQUARLOVE_AIRDROP_ADDRESS = '0x84b148d389a94bf97abba8bf04bc4b0f33355418';

// Deployer
// const AirdropContractDeployer = (deployer, network) => {
//   deployer
//     .deploy(AQUARLOVEAirdrop, getTokenAddress(network))
//     .then((_) =>
//       console.log(
//         `AQUARLOVE Airdrop contract has been deployed successfully on ${network}.`
//       )
//     );
// };

/*****************************************************************/

module.exports = (deployer, network) => {
    /**
     * Token contract deploy.
     */
    TokenContractDeployer(deployer, network);

    /**
     * Sale contract deploy.
     */
    // SaleContractDeployer(deployer, network);

    /**
     * Sale contract deploy.
     */
    // AirdropContractDeployer(deployer, network);
};