<template>
  <div class="form">
    <h2 class="form__title">Create new card</h2>
    <a-form-model :model="form">
      <a-form-model-item label="Card Title">
        <a-input v-model="form.title" />
      </a-form-model-item>
      <a-form-model-item label="Activity form">
        <a-input v-model="form.desc" type="textarea" />
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" @click="onSubmit">
          Create
        </a-button>
        <router-link @click="(form.title = ''), (form.desc = '')" to="/">
          <a-button style="margin-left: 10px;">
            Cancel
          </a-button>
        </router-link>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        title: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.form);
    }
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
