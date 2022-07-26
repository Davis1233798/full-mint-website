"use strict";

//require("@nomicfoundation/hardhat-toolbox");
//require("@nomiclabs/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle"); //require("@nomicfoundation/hardhat-chai-matchers");


require("@nomiclabs/hardhat-etherscan");

var dotenv = require('dotenv'); //const { RINKEBY_RPC_URL, ETHERSCAN_API,PRIVATE_KEY } = process.env;


dotenv.config(); // task("accounts","Prints the list of accounts",async(taskArgs,hre)=>{
//  const accounts = await hre.ethers.getSigners();
//  for(const account of accounts ){
//   console.log(account.address);
//  }
// });

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: process.env.REACT_APP_RINKEBY_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_API
  }
};