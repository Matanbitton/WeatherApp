const API_KEY = "fda162adce857de507b0fa9fb36a4afb";

const getCurrCityTemp = async (cityName) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fda162adce857de507b0fa9fb36a4afb&units=metric`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  const temperature = weatherData.main.temp;
  console.log(temperature);
};
getCurrCityTemp("Eilat");
