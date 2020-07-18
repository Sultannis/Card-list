<template>
  <div class="cards-box">
    <div :key="i" v-for="(column, i) in columns" class="cards-box__column">
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

export default {
  name: "CardsBox",
  components: {
    Card
  },
  data() {
    return {
      columns: [
        {
          number: 1,
          cards: [
            {
              title: "Shit Title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
            },
            {
              title: "Card Title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisic  "
            },
            {
              title: "FUcjing Title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
            }
          ]
        },
        {
          number: 1,
          cards: [
            {
              title: "Card Title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
            },
            {
              title: "Card Title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
            },
            {
              title: "Card Title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
            }
          ]
        },
        {
          number: 1,
          cards: [
            {
              title: "Card Title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
            },
            {
              title: "Card Title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
            },
            {
              title: "Card Title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
            }
          ]
        },
        {
          number: 1,
          cards: [
            {
              title: "Card Title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
            },
            {
              title: "Card Title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
            },
            {
              title: "Card Title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo akkomon Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.  "
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.cards-box {
  width: 80%;
  margin: auto;
  display: flex;
  margin-top: 10px;
  height: calc(100vh - 70px);
  padding-bottom: 10px;

  &__column {
    width: 25%;
    padding-top: 10px;
    overflow-y: auto;
  }
}
</style>
