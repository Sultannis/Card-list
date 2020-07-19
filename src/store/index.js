import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dragnDrop: false,
    columns: [
      {
        cards: [
          {
            title: "Card Title",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
          },
          {
            title: "Card Title",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisic  "
          }
        ]
      },
      {
        cards: [
          {
            title: "Card Title",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisic  "
          }
        ]
      },
      {
        cards: []
      },
      {
        cards: []
      }
    ]
  },
  getters: {
    allColumns(state) {
      return state.columns;
    },
    getSwitch(state) {
      return state.dragnDrop;
    }
  },
  mutations: {
    createCard(state, newCard) {
      state.columns[0].cards.unshift(newCard);
      const parsed = JSON.stringify(state.columns);
      localStorage.setItem("allColumns", parsed);
    },
    onSwitch(state) {
      state.dragnDrop = !state.dragnDrop;
      console.log(state.dragnDrop);
    },
    saveCard(state) {
      const parsed = JSON.stringify(state.columns);
      localStorage.setItem("allColumns", parsed);
    },
    getLocalStorageData(state, columns) {
      state.columns = columns;
    }
  },
  actions: {},
  modules: {}
});
