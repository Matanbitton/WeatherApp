import { currWeather, hourlyWeather } from "./api.js";
import { createWeatherComponent, createWeatherForecastComponent } from "./dom";
import "./style.css";

const userWeatherInput = document.querySelector("#user-weather-input");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  currWeather(userWeatherInput.value).then((resolve) => {
    if (resolve) {
      const htmlElement = createWeatherComponent(resolve);
      weatherComponent = htmlElement;
    }
  });
  hourlyWeather(userWeatherInput.value).then((resolve) => {
    if (resolve) {
      let hourlyWeatherElement = createWeatherForecastComponent(resolve);
      weatherForecast = hourlyWeatherElement;
    }
  });
});

currWeather("Tel Aviv").then((resolve) => {
  createWeatherComponent(resolve);
});

hourlyWeather("Tel Aviv").then((resolve) => {
  const hourlyWeatherElement = createWeatherForecastComponent(resolve);
  weatherForecast = hourlyWeatherElement;
});
