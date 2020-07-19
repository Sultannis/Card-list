<template>
  <div class="cards-box">
    <div :key="i" v-for="(column, i) in allColumns" class="cards-box__column">
      <Card
        :key="j"
        v-for="(card, j) in column.cards"
        :title="card.title"
        :description="card.description"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card/Card";
import { mapGetters } from "vuex";

export default {
  name: "CardsBox",
  components: {
    Card
  },
  computed: mapGetters(["allColumns"])
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
