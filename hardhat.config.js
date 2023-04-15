require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    // other networks
    truffledashboard: {
      url: "http://localhost:24012/rpc"
    }
  },
};
