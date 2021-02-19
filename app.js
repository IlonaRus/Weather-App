// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country, config.apiKey);

// Init UI
const ui = new UI();


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country');

  // Change location
  weather.changeLocation(city, country);

  // Set location in local storage
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close modal (JQuery)
  $('#locationModal').modal('hide');
});

// Paint the detail overview
function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(error => console.log(error));
}

// Change wind degrees to wind direction
function windDirectionCode(deg) {
  if (deg >= 338 && deg <= 23) {
    return 'N'
  } else if (deg >= 24 && deg <= 68) {
    return 'N-O'
  } else if (deg >= 69 && deg <= 114) {
    return 'O'
  } else if (deg >= 115 && deg <= 160) {
    return 'Z-O'
  } else if (deg >= 161 && deg <= 206) {
    return 'Z'
  } else if (deg >= 207 && deg <= 252) {
    return 'Z-W'
  } else if (deg >= 253 && deg <= 298) {
    return 'W'
  } else {
    return 'N-W'
  }
}

// Capatalize first letter
function capatalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Round numbers to 1 decimal
function roundToOneDecimal(string) {
  return Math.round(string * 10) / 10;
}
