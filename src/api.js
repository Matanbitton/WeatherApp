const API_KEY = "fda162adce857de507b0fa9fb36a4afb";

export default async function weather(cityName) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`,
    { mode: "cors" }
  );
  const weatherData = await response.json();

  console.log(weatherData);
  const getTemp = () => {
    const temperature = weatherData.main.temp;
    return temperature;
  };
  const getMaxTemp = () => {
    const maxTemperature = weatherData.main.temp_max;
    return maxTemperature;
  };
  const getMinTemp = () => {
    const minTemperature = weatherData.main.temp_min;
    return minTemperature;
  };
  const getHumidity = () => {
    const humidity = weatherData.main.humidity;
    return humidity;
  };
  const getPressure = () => {
    const pressure = weatherData.main.pressure;
    return pressure;
  };
  const getWindSpeed = () => {
    const windSpeed = weatherData.wind.speed;
    return windSpeed;
  };

  const getFeelsLike = () => {
    const feelsLike = weatherData.main.feels_like;
    return feelsLike;
  };
  const getWeatherDescription = () => {
    const weatherDescription = weatherData.weather[0].description;
    return weatherDescription;
  };

  const temp = getTemp();
  const maxTemp = getMaxTemp();
  const minTemp = getMinTemp();
  const humidity = getHumidity();
  const pressure = getPressure();
  const windSpeed = getWindSpeed();
  const feelsLike = getFeelsLike();
  const weatherDescription = getWeatherDescription();

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
