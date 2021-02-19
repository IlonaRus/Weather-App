class Weather {
  constructor(city, country) {
    this.apiKey = '0607c40c2fb3b3cef24d6de2e48332c4';
    this.city = city;
    this.country = country;
  }

  // fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&lang=nl&appid=${this.apiKey}`)
    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}