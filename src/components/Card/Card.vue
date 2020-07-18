<template>
  <div class="card">
    <h4 class="card__title">Card Title</h4>
    <p class="card__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo aut
      soluta nam ratione, dignissimos molestias inventore, blanditiis sint ipsam
      quae! Harum necessitatibus a incidunt temporibus accusantium ad cum totam
      saepe beatae autem suscipit deserunt, atque facere inventore voluptas
      accusamus, neque ipsam! Voluptas quidem in soluta ipsa est maiores
      ducimus!
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  width: 95%;
  height: 300px;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;

  &__title {
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    text-align-last: left;
    color: rgb(41, 106, 248);
  }

  &__text {
    font-size: 16px;
    text-align: left;
    line-height: 1.1;
    overflow-y: auto;
    height: 80%;
  }
}
</style>
