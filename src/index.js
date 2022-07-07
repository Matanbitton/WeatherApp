import weather from "./api.js";

console.log(
  weather("Eilat").then((resolve) => {
    console.log(resolve);
  })
);
