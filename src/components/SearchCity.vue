<template>
  <div class="container w-100">
    <div class="row">
      <div class="col-4">
        <img src="../assets/weather-logo.png" width="280px" />
      </div>

      <div class="col-6">
        <div class="has-search text-center">
          <div class="flex-grow-1">
            <VueGooglePlaces
              :api-key="'AIzaSyBUDt3l_44xD1JPX51qm2_EPOfEqkCGk9g'"
              types="(cities)"
              placeholder="Input your place"
              @placechanged="onPlaceChanged"
            >
              <input
                class="form-control rounded-pill bg-transparent border-white transparent-bg text-white text-capitalize"
                type="text"
                :placeholder="$t('search.search-city')"
              />
            </VueGooglePlaces>
          </div>
        </div>
      </div>
      <div class="col-2">
        <b-button-group>
          <b-button variant="outline-light">
            <i @click="changeLang('fr')">
              <img src="../assets/fr.png" width="25px" />
            </i>
          </b-button>
          <b-button variant="outline-light">
            <i @click="changeLang('en')">
              <img src="../assets/en.png" width="25px" />
            </i>
          </b-button>
        </b-button-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCity",
  props: {
    msg: String
  },

  methods: {
    onPlaceChanged(city) {
      this.$parent.fetchWeather(city);
    },
    changeLang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-control {
  margin: auto;
  width: 100%;
  padding: 25px;
}
.has-search .form-control {
  text-align: center;
  font-size: 24px;
  background: url(../assets/search.png) 18px 12px no-repeat;
  background-size: 30px;
  padding: 0px 50px 0px 50px;
}
.transparent-bg {
  background-color: rgba(255, 255, 255, 0.29) !important;
}
.form-control::placeholder {
  color: rgb(230, 230, 230) !important;
}
.card-search {
  border-radius: 14px;
  border-color: #05508a;
  border-width: 5px;
}
</style>
