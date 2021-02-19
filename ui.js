class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.country = document.getElementById('w-country');
    this.description = document.getElementById('w-description');
    this.temp = document.getElementById('w-temp');
    this.minTemp = document.getElementById('w-min-temp');
    this.maxTemp = document.getElementById('w-max-temp');
    this.feelsLike = document.getElementById('w-feels-like');
    this.humidity = document.getElementById('w-humidity');
    this.windSpeed = document.getElementById('w-wind-speed');
    this.windDirection = document.getElementById('w-wind-direction');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.country.textContent = `(${weather.sys.country})`;
    this.description.textContent = `${capatalize(weather.weather[0].description)}`;
    this.temp.textContent = `${roundToOneDecimal(weather.main.temp)} \u00b0C`;
    this.minTemp.textContent = `Min. Temp: ${roundToOneDecimal(weather.main.temp_min)} \u00b0C`;
    this.maxTemp.textContent = `Max. Temp: ${roundToOneDecimal(weather.main.temp_max)} \u00b0C`;
    this.feelsLike.textContent = `Gevoelstempertuur: ${roundToOneDecimal(weather.main.feels_like)} \u00b0C`;
    this.humidity.textContent = `Luchtvochtigheid: ${weather.main.humidity}%`;
    this.windSpeed.textContent = `Windsnelheid: ${roundToOneDecimal(weather.wind.speed)} km/u`;
    this.windDirection.textContent = `Windrichting: ${windDirectionCode(weather.wind.deg)}`;
  }
}