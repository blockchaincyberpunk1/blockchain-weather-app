# WeatherApp Smart Contract

  [![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blue&?style=plastic&logo=appveyor)](https://opensource.org/license/MIT)


## Table Of Content

- [Description](#description)
- [Smart Contract Details](#smart-contract-details)
- [Setup and Installation](#setup-and-installation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)


## Description

The WeatherApp smart contract allows for the storage and updating of weather conditions on the Ethereum blockchain. It is designed to provide a simple interface for retrieving and updating the weather state with blockchain's security and reliability.

WeatherApp deployed to: 0x00024fd199186E1B78d00bec1388DBB7b6Ef4C66


## Smart Contract Details

- **Contract Name**: WeatherApp
- **Compiler Used**: Solidity ^0.8.19
- **Networks Configured**: Sepolia Testnet
- **Primary Functions**:
  - `getWeather()`: Retrieves the current weather condition.
  - `updateWeather(string)`: Updates the weather condition.

## Setup and Installation

### Prerequisites

- Node.js and npm
- Hardhat
- An Infura account (for deploying to the Sepolia network)
- Ethereum wallet with testnet ETH

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/blockchaincyberpunk1/blockchain-weather-app.git
   ```
2. **Install dependencies**:
    ```
    npm install
    ```
3. **Create a .env file**:
Populate the .env file with your Infura API key and your wallet's private key:
    ```
    INFURA_API_KEY=your_infura_api_key
    PRIVATE_KEY=your_private_key
    REPORT_GAS=true
    GAS_REPORT_FILE=./gas-report.txt
    COINMARKETCAP_API_KEY=your_coinmarketcap_api_key_here

    ```

## Deployment
 
To deploy the WeatherApp smart contract to the Sepolia network, run:

```
    npx hardhat run scripts/deploy.js --network sepolia

```
Make sure your .env file is properly set up with a funded Ethereum wallet to handle the gas fees.



## Contribution
 
Contributions are welcome. Please fork the repository, create a new branch for your contributions, and submit a pull request.


## Contact

Feel free to reach out to me on my email:
thepolyglot8@gmail.com


## License

[![License](https://img.shields.io/static/v1?label=Licence&message=MIT&color=blue)](https://opensource.org/license/MIT)

