import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
        cards: []
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
    }
  },
  mutations: {
    createCard(state, newCard) {
      state.columns[0].cards.unshift(newCard);
    }
  },
  actions: {},
  modules: {}
});
