import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listOfFavorites: []
  },
  mutations: {
    saveFavorite: (state, city) => {
      state.listOfFavorites.push(city);
    },
    deleteFavorite(state, city) {
      state.listOfFavorites = state.listOfFavorites.filter(
        fav =>
          fav.latitude !== city.latitude && fav.longitude !== city.longitude
      );
    }
  },
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin]
});
