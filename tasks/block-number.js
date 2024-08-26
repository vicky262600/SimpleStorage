const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    async (taskArgu, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`current block number is ${blockNumber}`)
    },
)
