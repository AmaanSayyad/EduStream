require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require('@nomiclabs/hardhat-ethers');

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
      chainId: 656476,
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVATE_KEY],
    },
     edu: {
      url: "https://rpc.open-campus-codex.gelato.digital",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
