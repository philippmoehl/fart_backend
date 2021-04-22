require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          process.env.PRIVAT_KEY, 
           `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`
        )
      },
      gasPrice: 25000000000,
      network_id: 3
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
