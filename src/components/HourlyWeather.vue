<template>
  <div class="px-2">
    <h5 class="card-subtitle text-white">
      <span>{{ data.dt | moment("HH") }} h</span>
    </h5>
    <h1 class="card-title h-50">
      <WeatherIcon :icon="data.weather[0].icon" />
    </h1>
    <div style="justify-content: center;">
      <div class="card-subtitle mb-3 text-white">
        {{ parseInt(data.temp) }}º
      </div>
    </div>
  </div>
</template>

<script>
import WeatherIcon from "../components/WeatherIcon";

export default {
  name: "DailyWeather",
  components: {
    WeatherIcon
  },
  props: ["data"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-weather {
  background-color: #0e3569 !important;
  background: radial-gradient(
    ellipse at bottom 20% left 50%,
    #055594 1%,
    #05508a 22%,
    #03294e 88%,
    #011933 100%
  );
  border-color: rgb(167, 225, 238);
  border-width: 2px;
}
.icon-weather {
  color: aliceblue;
  width: 50%;
}
</style>
