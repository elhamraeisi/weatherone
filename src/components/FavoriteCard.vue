<template>
  <div class="card card-weather mt-2">
    <div @click="deleteFav()" class="close-icon">
      <i class="fas fa-times-circle"></i>
    </div>
    <h5
      @click="onCityClick()"
      class="card-subtitle text-capitalize text-white py-4 px-3"
    >
      {{ city.locality }}
    </h5>
  </div>
</template>

<script>
export default {
  name: "FavoriteCard",
  methods: {
    deleteFav() {
      this.$store.commit("deleteFavorite", this.city);
    },
    onCityClick() {
      this.$parent.onCityClick(this.city);
    }
  },
  props: ["city"]
};
</script>

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
  border-width: 2px;
}
.close-icon {
  position: absolute;
  color: lightgrey;
  font-size: 20px;
  padding: 3px;
}
</style>
