import weather from "./api.js";
import "./style.css";

console.log(
  weather("Eilat").then((resolve) => {
    console.log(resolve);
  })
);
