<template>
  <div class="cards-box">
    <div class="cards-box__column">
      <draggable
        class="list-group"
        style="height: 100%;"
        :list="allColumns[0].cards"
        group="people"
        @change="saveCard"
      >
        <div
          class="list-group-item"
          v-for="(element, i) in allColumns[0].cards"
          :key="i"
        >
          <Card :title="element.title" :description="element.description" />
        </div>
      </draggable>
    </div>

    <div class="cards-box__column">
      <draggable
        style="height: 100%;"
        class="list-group"
        :list="allColumns[1].cards"
        group="people"
        @change="saveCard"
      >
        <div
          class="list-group-item"
          v-for="(element, i) in allColumns[1].cards"
          :key="i"
        >
          <Card :title="element.title" :description="element.description" />
        </div>
      </draggable>
    </div>
    <div class="cards-box__column">
      <draggable
        style="height: 100%;"
        class="list-group"
        :list="allColumns[2].cards"
        group="people"
        @change="saveCard"
      >
        <div
          class="list-group-item"
          v-for="(element, i) in allColumns[2].cards"
          :key="i"
        >
          <Card :title="element.title" :description="element.description" />
        </div>
      </draggable>
    </div>
    <div class="cards-box__column">
      <draggable
        style="height: 100%;"
        class="list-group"
        :list="allColumns[3].cards"
        group="people"
        @change="saveCard"
      >
        <div
          class="list-group-item"
          v-for="(element, i) in allColumns[3].cards"
          :key="i"
        >
          <Card :title="element.title" :description="element.description" />
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card/Card";
import draggable from "vuedraggable";
import { mapGetters, mapMutations } from "vuex";

export default {
  display: "Two Lists",
  order: 1,
  name: "CardsBox",
  components: {
    Card,
    draggable
  },
  mounted() {
    if (localStorage.getItem("allColumns")) {
      try {
        let columns = JSON.parse(localStorage.getItem("allColumns"));
        this.getLocalStorageData(columns);
      } catch (e) {
        localStorage.removeItem("allColumns");
      }
    }
  },
  computed: mapGetters(["allColumns"]),
  methods: {
    ...mapMutations(["createCard", "getLocalStorageData", "saveCard"]),
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    },
    saveDagnDrop() {
      this.saveCard;
    }
  }
};
</script>

<style lang="scss" scoped>
.cards-box {
  width: 90%;
  margin: auto;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  height: calc(100vh - 70px);
  padding-bottom: 10px;

  &__column {
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    width: 24%;
    padding-top: 10px;
    overflow: hidden;
    overflow-y: auto;
  }
}
</style>
