import currWeather from "./api.js";
import "./style.css";

const userWeatherInput = document.querySelector("#user-weather-input");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  currWeather(userWeatherInput.value).then((resolve) => {
    if (resolve) {
      console.log(resolve);
    }
  });
});
