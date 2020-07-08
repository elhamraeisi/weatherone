<template>
  <div class="banner-area">
    <SearchCity />
    <Favorites />
    <div v-if="weatherData">
      <CurrentWeather
        :city="currentCity"
        :data="weatherData.daily[0]"
        :hourlyData="weatherData.hourly.slice(0, 24)"
      />
      <Forecast :data="weatherData.daily" />
    </div>
  </div>
</template>

<script>
import SearchCity from "../components/SearchCity";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import Favorites from "../components/Favorites";
import weatherApi from "../weatherApi";

export default {
  name: "Home",
  components: {
    SearchCity,
    CurrentWeather,
    Forecast,
    Favorites
  },
  data() {
    return {
      weatherData: null,
      currentCity: null
    };
  },
  mounted() {},
  methods: {
    fetchWeather(city) {
      this.weatherData = null;
      weatherApi
        .get("/onecall?lat=" + city.latitude + "&lon=" + city.longitude)
        .then(resp => {
          this.weatherData = resp.data;
          this.currentCity = city;
        });
    }
  }
};
</script>

<style scoped>
.banner-area {
  padding-top: 70px; /* x1 header padding */
  height: auto;
  min-height: 100vh;
  width: 100%;
  margin-bottom: 0;
  padding-bottom: 0;
  position: relative;
  background: url("../assets/wallpaper.jpeg") no-repeat center center/cover;
}
</style>
