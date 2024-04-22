// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title A simple weather reporting smart contract
/// @dev This contract allows for the storage and updating of weather conditions
contract WeatherApp {
    /// @notice Stores the current weather condition as a string
    string public currentWeather;

    /// @notice Emitted when the weather is updated
    /// @param weather The updated weather condition
    event WeatherUpdated(string weather);

    /// @notice Updates the current weather condition
    /// @dev Emits the WeatherUpdated event with the new weather condition
    /// @param _weather The new weather condition to be set
    function updateWeather(string memory _weather) public {
        currentWeather = _weather;
        emit WeatherUpdated(_weather);
    }

    /// @notice Retrieves the current weather condition
    /// @dev Returns the current value of the state variable `currentWeather`
    /// @return The current weather condition as a string
    function getWeather() public view returns (string memory) {
        return currentWeather;
    }
}
