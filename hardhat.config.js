require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "ZifUwv9YIHuw89eGx7G2q_QZ1D7Fk09W";

const ROPSTEN_PRIVATE_KEY = "8dc14ec24d192dcc4017f85e27453cae2710168b06617a30b170eac4820abbb7";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.5",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};
