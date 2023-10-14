const convertToCelsius = function(fahrenheit) {
  fahrenheitToCelsius = (fahrenheit - 32) / 1.8;
  roundedNumber = Math.round(fahrenheitToCelsius * 10) / 10;
  return roundedNumber;
};

const convertToFahrenheit = function(celsius) {
  celsiusToFahrenheit = (celsius * 1.8) + 32;
  roundedNumber = Math.round(celsiusToFahrenheit * 10) / 10;
  return roundedNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
