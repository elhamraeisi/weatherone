import axios from "axios";
export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  timeout: 5000,
  params: {
    appid: "ae302b82dc3c59a92c1ac173953f8fb4",
    lang: "fr",
    units: "metric"
  }
});
