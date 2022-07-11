import currWeather from "./api.js";
import createWeatherComponent from "./dom";
import "./style.css";

const userWeatherInput = document.querySelector("#user-weather-input");
const submitButton = document.querySelector("#submit");
const weatherComponent = document.querySelector(".weather-component");
const body = document.body;

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  currWeather(userWeatherInput.value).then((resolve) => {
    if (resolve) {
      console.log(resolve);
      const htmlElement = createWeatherComponent(resolve);
      console.log(htmlElement);
      weatherComponent = htmlElement;
    }
  });
});

currWeather("Tel Aviv").then((resolve) => {
  createWeatherComponent(resolve);
});
