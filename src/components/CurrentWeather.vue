<template>
  <div class="container">
    <div class="card card-weather mt-5">
      <div class="card-body">
        <div class="row">
          <div class="col-3 align-self-center text-white h2">
            <div @click="unFavorite()" v-if="faveIcon" :key="'active'">
              <i class="fas fa-heart text-danger"></i>
            </div>
            <div @click="favorite()" v-else :key="'desactive'">
              <i class="far fa-heart"></i>
            </div>
            <h1 class="card-subtitle mb-3 text-capitalize text-white">
              {{ city.locality }}
            </h1>
            <h3 class="card-subtitle mb-3 text-capitalize text-white">
              <span>{{ new Date() | moment("dddd") }}</span>
            </h3>
          </div>
          <div class="col-3 p-2">
            <h1 class="card-title">
              <WeatherIcon :icon="data.weather[0].icon" />
            </h1>
            <h3 class="card-subtitle text-white text-capitalize">
              {{ data.weather[0].description }}
            </h3>
          </div>
          <div class="col-3 align-self-center">
            <h1 class="card-subtitle temp text-white">
              {{ parseInt(data.temp.day) }}
            </h1>
            <div class="row" style="justify-content: center;">
              <h5 class="card-subtitle mb-3 text-white">
                <i class="fas fa-long-arrow-alt-up"></i>
                {{ parseInt(data.temp.max) }}º
              </h5>
              <h5 class="card-subtitle mb-3 ml-2 text-white">
                <i class="fas fa-long-arrow-alt-down"></i>
                {{ parseInt(data.temp.min) }}º
              </h5>
            </div>
            <h5 class="card-subtitle text-white text-capitalize">
              {{ $t("current.feels-like") }}
              {{ parseInt(data.feels_like.day) }}º
            </h5>
          </div>
          <div class="col-3 align-self-center">
            <h5 class="card-subtitle mb-3 text-white">
              <div class="row">
                <div class="col-2 align-self-center p-0">
                  <i class="fas fa-tint"></i>
                </div>
                <div
                  class="col align-self-center p-0 text-left text-capitalize"
                >
                  {{ $t("current.humidity") }} {{ data.humidity }}%
                </div>
              </div>
            </h5>
            <h5 class="card-subtitle mb-3 text-white">
              <div class="row">
                <div class="col-2 align-self-center p-0">
                  <i class="fas fa-thermometer-half"></i>
                </div>
                <div
                  class="col align-self-center p-0 text-left text-capitalize"
                >
                  {{ $t("current.dew-point") }}
                  {{ parseInt(data.dew_point) }}º
                </div>
              </div>
            </h5>
            <h5 class="card-subtitle text-white">
              <div class="row">
                <div class="col-2 align-self-center p-0">
                  <i class="fas fa-wind"></i>
                </div>
                <div
                  class="col align-self-center p-0 text-left text-capitalize"
                >
                  {{ $t("current.wind") }}
                  {{ parseInt(data.wind_speed) }} km/h
                </div>
              </div>
            </h5>
          </div>
        </div>

        <vue-horizontal-list
          :items="hourlyData"
          :options="{
            responsive: [{ size: 12 }]
          }"
        >
          <template v-slot:default="{ item }">
            <HourlyWeather :data="item" />
          </template>
        </vue-horizontal-list>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherIcon from "../components/WeatherIcon";
import HourlyWeather from "../components/HourlyWeather";
import VueHorizontalList from "vue-horizontal-list";

export default {
  name: "CurrentWeather",
  data() {
    return {
      faveIcon: false
    };
  },
  mounted() {
    this.faveIcon =
      this.$store.state.listOfFavorites.findIndex(
        item => item.locality === this.city.locality
      ) > -1;
  },

  methods: {
    unFavorite() {
      var cityToDelete = {
        locality: this.city.locality,
        longitude: this.city.longitude,
        latitude: this.city.latitude
      };
      this.$store.commit("deleteFavorite", cityToDelete);
      this.faveIcon = false;
    },
    favorite() {
      this.faveIcon = !this.faveIcon;

      var cityToSave = {
        locality: this.city.locality,
        longitude: this.city.longitude,
        latitude: this.city.latitude
      };

      this.$store.commit("saveFavorite", cityToSave);
    }
  },
  components: {
    WeatherIcon,
    HourlyWeather,
    VueHorizontalList
  },
  props: ["data", "city", "hourlyData"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-weather {
  color: aliceblue;
  width: 60%;
  height: 1%;
}
.card-weather {
  background-color: #0e3569 !important;
  background: radial-gradient(
    ellipse at bottom 20% left 50%,
    #055594 1%,
    #05508a 22%,
    #03294e 88%,
    #011933 100%
  );
  border-radius: 14px;
  border-color: rgb(167, 225, 238);
  border-width: 5px;
}
.temp {
  font-size: 100px;
}
</style>
