<template>
  <div class="card">
    <h4 class="card__title">{{ title }}</h4>
    <p class="card__text">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    description: String
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 95%;
  height: 180px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
  background-color: white;

  &__title {
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    text-align-last: left;
    color: rgb(41, 106, 248);
  }

  &__text {
    font-size: 13px;
    text-align: left;
    line-height: 1.1;
    overflow-y: auto;
    height: 80%;
  }
}
</style>
