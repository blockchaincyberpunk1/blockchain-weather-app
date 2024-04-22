const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WeatherApp Contract", function () {
    let WeatherApp;
    let weatherApp;
    let owner;
    let addr1;

    // Deploy a new WeatherApp contract before each test
    beforeEach(async function () {
        // Get the ContractFactory and Signers
        WeatherApp = await ethers.getContractFactory("WeatherApp");
        [owner, addr1] = await ethers.getSigners();

        // Deploy the contract
        weatherApp = await WeatherApp.deploy();
    });

    // Test case for retrieving the initial weather condition
    describe("Initial State", function () {
        it("should have empty weather condition initially", async function () {
            expect(await weatherApp.getWeather()).to.equal("");
        });
    });

    // Test case for updating and retrieving the weather condition
    describe("Updating Weather", function () {
        it("should update the weather condition", async function () {
            // Update the weather condition
            const updateWeatherTx = await weatherApp.updateWeather("Sunny");

            // Wait for the transaction to be mined
            await updateWeatherTx.wait();

            // Check the updated weather condition
            expect(await weatherApp.getWeather()).to.equal("Sunny");
        });

        it("should emit a WeatherUpdated event when the weather is updated", async function () {
            // Expect the updateWeather to emit an event with "Cloudy"
            await expect(weatherApp.updateWeather("Cloudy"))
                  .to.emit(weatherApp, "WeatherUpdated")
                  .withArgs("Cloudy");
        });
    });
});

