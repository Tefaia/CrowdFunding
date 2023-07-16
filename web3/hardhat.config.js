/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'goerli',
    networks: {
      hardhat: {},
      goerli: {
        url: 'https://rpc.ankr.com/base_goerli/9455dcebbb5c07b3f51f064bc5f897d5d6640b1ade6ab13390ab8066d98e9118',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};