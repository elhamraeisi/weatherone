<template>
  <i v-bind:class="iconCss"></i>
</template>

<script>
export default {
  name: "WeatherIcon",
  components: {},
  props: ["icon"],
  computed: {
    iconCss: function() {
      switch (this.icon) {
        case "01d":
        case "01n":
          return "fas fa-sun icon-weather";
        case "02d":
        case "02n":
          return "fas fa-cloud-sun icon-weather";
        case "03d":
        case "03n":
          return "fas fa-cloud icon-weather";
        case "04d":
        case "04n":
          return "fas fa-cloud icon-weather";
        case "09d":
        case "09n":
          return "fas fa-cloud-showers-heavy icon-weather";
        case "10d":
        case "10n":
          return "fas fa-cloud-sun-rain icon-weather";
        case "11d":
        case "11n":
          return "fas fa-poo-storm icon-weather";
        case "13d":
        case "13n":
          return "fas fa-snowflake icon-weather";
        case "50d":
        case "50n":
          return "fas fa-smog icon-weather";

        default:
          alert("error");
          return "";
      }
    }
  }
};
</script>
