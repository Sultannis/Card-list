<template>
  <div class="form">
    <h2 class="form__title">Create new card</h2>
    <a-form-model :model="card">
      <a-form-model-item label="Card Title">
        <a-input v-model="card.title" />
      </a-form-model-item>
      <a-form-model-item label="Activity form">
        <a-input v-model="card.desc" type="textarea" />
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" @click="onSubmit">
          Create
        </a-button>
        <router-link @click="(card.title = ''), (card.desc = '')" to="/">
          <a-button style="margin-left: 10px;">
            Cancel
          </a-button>
        </router-link>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import cardForm from "vuex";

export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      card: {
        title: "",
        desc: ""
      }
    };
  },
  mutations: {},
  // methods: {
  //   onSubmit() {
  //     this.$store.commit("onSubmit(this.card)");
  //   }
  // }
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
