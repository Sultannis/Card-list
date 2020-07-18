<template>
  <div class="cards-box">
    <div class="cards-box__column">
      <Card />
    </div>
    <div class="cards-box__column"></div>
    <div class="cards-box__column"></div>
    <div class="cards-box__column"></div>
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
  width: 100%;
  display: flex;

  &__column {
    width: 25%;
    border: 1px solid rgb(36, 173, 144);
    padding-top: 10px;
  }
}
</style>
