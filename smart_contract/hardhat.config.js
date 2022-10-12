

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/pU9IfDIULHnnNYzeZkklpI0zrtSIfIVq',
      accounts: ['89cdd48f4af1c74761f6da9a08d69fac190a4f018584f64fc05f39e472d5770b'],
    },
  },
};