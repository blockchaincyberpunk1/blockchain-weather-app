// Import ethers from Hardhat environment
const { ethers } = require("hardhat");

async function main() {
    // Logging the start of the deployment process
    console.log("Deploying the WeatherApp contract...");

    // Getting the ContractFactory for the WeatherApp contract
    const WeatherApp = await ethers.getContractFactory("WeatherApp");

    // Deploying the contract
    const weatherApp = await WeatherApp.deploy();
    await weatherApp.deployed();

    // Logging the address to which the contract was deployed
    console.log("WeatherApp deployed to:", weatherApp.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
