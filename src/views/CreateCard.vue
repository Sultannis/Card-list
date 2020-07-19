<template>
  <div class="form">
    <h2 class="form__title">Create new card</h2>
    <CardForm />
  </div>
</template>
<script>
import CardForm from "@/components/CardForm/CardForm";

export default {
  components: {
    CardForm
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: 40%;
  margin: auto;
  height: 100vh;
  padding-top: 20vh;
  text-align: left;

  &__title {
    color: rgb(67, 138, 245);
  }
}
</style>
