<template>
  <div class="container px-5">
    <div class="row">
      <div
        v-for="city in $store.state.listOfFavorites"
        :key="city.locality"
        class="col-2"
      >
        <FavoriteCard :city="city" />
      </div>
    </div>
  </div>
</template>

<script>
import FavoriteCard from "../components/FavoriteCard";

export default {
  name: "Favorites",
  components: {
    FavoriteCard
  },
  data() {
    return {
      favList: this.$store.state.listOfFavorites
    };
  },
  methods: {
    onCityClick(city) {
      this.$parent.fetchWeather(city);
    }
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
  border-radius: 14px;
  border-color: rgb(167, 225, 238);
  border-width: 5px;
}
</style>
