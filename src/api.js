const API_KEY = "fda162adce857de507b0fa9fb36a4afb";

export default async function weather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

  const weatherData = await loadWeatherJson(url).catch(alert);
  if (weatherData) {
    const temp = weatherData.main.temp;
    const maxTemp = weatherData.main.temp_max;
    const minTemp = weatherData.main.temp_min;
    const humidity = weatherData.main.humidity;
    const pressure = weatherData.main.pressure;
    const windSpeed = weatherData.wind.speed;
    const feelsLike = weatherData.main.feels_like;
    const weatherDescription = weatherData.weather[0].description;

    const weatherObj = {
      temp,
      maxTemp,
      minTemp,
      humidity,
      pressure,
      windSpeed,
      feelsLike,
      weatherDescription,
    };

    return weatherObj;
  }
}

export async function loadWeatherJson(url) {
  const response = await fetch(url, { mode: "cors" });
  if (response.status == 200) {
    const weatherData = await response.json();
    return weatherData;
  }
  throw new Error("City value is incorrect");
}
