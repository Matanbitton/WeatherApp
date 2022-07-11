export default function createWeatherComponent(weatherObj) {
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
  feelsLikeHTML.innerText = `Feels Like: ${weather.feelsLike}`;
  tempHTML.innerText = `${weather.temp}`;
  highLowTempHTML.innerText = `H: ${weather.maxTemp} / L: ${weather.minTemp}`;
  humidityHTML.innerHTML = `Humidity: ${weather.humidity}%`;

  return htmlSkeleton;
}

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
