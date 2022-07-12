const API_KEY = "fda162adce857de507b0fa9fb36a4afb";

export async function currWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

  const weatherData = await loadWeatherJson(url).catch(alert);
  if (weatherData) {
    const name = weatherData.name;
    const temp = Math.round(weatherData.main.temp);
    const maxTemp = Math.round(weatherData.main.temp_max);
    const minTemp = Math.round(weatherData.main.temp_min);
    const humidity = weatherData.main.humidity;
    const feelsLike = Math.round(weatherData.main.feels_like);
    const description = weatherData.weather[0].description;

    const weatherObj = {
      name,
      temp,
      maxTemp,
      minTemp,
      humidity,
      feelsLike,
      description,
    };

    return weatherObj;
  }
}

export async function hourlyWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`;
  const weatherData = await loadWeatherJson(url).catch(alert);
  const hoursForecastList = weatherData.list;
  const weatherArr = [];
  hoursForecastList.forEach((item) => {
    weatherArr.push({ date: item.dt_txt, temp: item.main.temp });
  });
  return weatherArr;
}

export async function loadWeatherJson(url) {
  const response = await fetch(url, { mode: "cors" });
  if (response.status == 200) {
    const weatherData = await response.json();
    return weatherData;
  }
  throw new Error("City value is incorrect");
}
