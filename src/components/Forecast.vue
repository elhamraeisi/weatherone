<template>
  <div class="container">
    <div class="card card-weather mt-2">
      <div class="card-body">
        <div class="row">
          <DailyWeather
            v-for="item in data.slice(1, 8)"
            :key="item.dt"
            :data="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DailyWeather from "../components/DailyWeather";

export default {
  name: "Forecast",
  components: {
    DailyWeather
  },
  props: ["data"]
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
</style>
