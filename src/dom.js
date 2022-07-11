export default function createWeatherComponent(weatherObj) {
  const weather = weatherObj;
  console.log(weather);
  const htmlSkeleton = document.querySelector(".weather-component");
  const cityNameHTML = htmlSkeleton.querySelector(".city-name");
  const tempHTML = htmlSkeleton.querySelector(".degrees");
  const feelsLikeHTML = htmlSkeleton.querySelector(".feels-like");
  const descriptionHTML = htmlSkeleton.querySelector(".description");
  const highTempHTML = htmlSkeleton.querySelector(".high-temp");
  const lowTempHTML = htmlSkeleton.querySelector(".low-temp");
  const humidityHTML = htmlSkeleton.querySelector(".humidity");

  cityNameHTML.innerText = weather.name;
  descriptionHTML.innerText = weather.description;
  feelsLikeHTML.innerText = weather.feelsLike;
  tempHTML.innerText = `${weather.temp}`;
  highTempHTML.innerText = `H: ${weather.maxTemp} `;
  lowTempHTML.innerText = `L: ${weather.minTemp} `;
  humidityHTML.innerHTML = `humidity: ${weather.humidity}%`;

  return htmlSkeleton;
}
