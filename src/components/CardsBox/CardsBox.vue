<template>
  <div class="cards-box">
    <div class="cards-box__column"></div>
    <div class="cards-box__column"></div>
    <div class="cards-box__column"></div>
    <div class="cards-box__column"></div>
  </div>
</template>

<script>
export default {
  name: "CardsBox"
};
</script>

<style lang="scss" scoped>
.cards-box {
  width: 100%;
  display: flex;
  border: 1px rgb(203, 122, 235) solid;
}
</style>
