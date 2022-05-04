
/* global ethers task */
require('@nomiclabs/hardhat-waffle')

const config = require('./keys.config')

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.6',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    neonLocal: {
      url: 'http://127.0.0.1:9090/solana',
      accounts: config.privateKeys,
      gasMultiplier: 100,
      timeout: 10000000,
      isFork: true
    },
    neonDevnet: {
      url: 'https://proxy.devnet.neonlabs.org/solana',
      accounts: config.privateKeys,
      gasMultiplier: 100,
      timeout: 10000000,
      isFork: true
    }
  },
  mocha: {
    timeout: 1000000000
  }
}
