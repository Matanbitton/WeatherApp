import parseISO from "date-fns/parseISO";
import format from "date-fns/format";

const sun = `<i class="fa-regular fa-sun"></i>`;
const cloud = `<i class="fa-solid fa-cloud"></i>`;
const partlyCloudy = `<i class="fa-solid fa-cloud-sun"></i>`;
const rain = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
const snow = '<i class="fa-solid fa-snowflake"></i>';
const night = `<i class="fa-solid fa-moon"></i>`;
const day = `<i class="fa-solid fa-sun"></i>`;

export function createWeatherComponent(weatherObj) {
  const weather = weatherObj;
  const htmlSkeleton = document.querySelector(".weather-component");
  const cityNameHTML = htmlSkeleton.querySelector(".city-name");
  const tempHTML = htmlSkeleton.querySelector(".degrees");
  const feelsLikeHTML = htmlSkeleton.querySelector(".feels-like");
  const descriptionHTML = document.querySelector(".description");
  const highLowTempHTML = htmlSkeleton.querySelector(".high-low-temp");
  const humidityHTML = htmlSkeleton.querySelector(".humidity");

  cityNameHTML.innerText = weather.name;
  cityNameHTML.innerHTML += ` <i class="fa-solid fa-map-location-dot"></i>`;

  descriptionHTML.innerText = titleCase(weather.description);

  setIconBasedOnWeather(descriptionHTML);

  feelsLikeHTML.innerText = `Feels Like: ${weather.feelsLike}°c`;
  tempHTML.innerText = `${weather.temp}°c`;
  highLowTempHTML.innerText = `H: ${weather.maxTemp}°c / L: ${weather.minTemp}°c`;
  humidityHTML.innerHTML = `Humidity: ${weather.humidity}%`;

  return htmlSkeleton;
}

export function createWeatherForecastComponent(weatherArr) {
  const weatherForecast = document.querySelector(".weather-forecast");
  weatherForecast.innerHTML = "";
  weatherArr.forEach((item) => {
    const containerOne = document.createElement("div");
    containerOne.className = "container-one";
    const container = document.createElement("div");
    container.className = "container-forecast";

    const date = document.createElement("div");
    date.className = "date-forecast";
    let dateParsed = parseISO(item.date);
    date.innerText = format(dateParsed, "EEEE p  ");
    date.innerHTML += `<i class="fa-solid fa-clock"></i>`;

    const icon = document.createElement("div");
    icon.innerHTML = setIconBasedOnTimeOfDay(date.innerText);

    const temp = document.createElement("div");

    temp.innerText = `${Math.round(item.temp)}°c`;
    temp.innerHTML += `<i class="fa-solid fa-temperature-high"></i>`;
    temp.className = "temp-forecast";

    container.append(date, temp);
    containerOne.append(container, icon);

    weatherForecast.append(containerOne);
  });
  return weatherForecast;
}

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

function setIconBasedOnWeather(descriptionHTML) {
  const div = document.createElement("div");
  if (descriptionHTML.innerText.includes("Clear")) {
    div.innerHTML = sun;
    descriptionHTML.prepend(div);
  }
  if (
    descriptionHTML.innerText.includes("Clouds") ||
    descriptionHTML.innerText.includes("Cloudy")
  ) {
    div.innerHTML = cloud;
    descriptionHTML.prepend(div);
  }
  if (descriptionHTML.innerText.includes("Broken Clouds")) {
    div.innerHTML = partlyCloudy;
    descriptionHTML.prepend(div);
  }
  if (descriptionHTML.innerText.includes("Rain")) {
    div.innerHTML = rain;
    descriptionHTML.prepend(div);
  }
  if (descriptionHTML.innerText.includes("Snow")) {
    div.innerHTML = snow;
    descriptionHTML.prepend(div);
  }
}

function setIconBasedOnTimeOfDay(time) {
  if (
    time.includes("9:00 PM") ||
    time.includes("12:00 AM") ||
    time.includes("3:00 AM")
  ) {
    return night;
  } else {
    return day;
  }
}
