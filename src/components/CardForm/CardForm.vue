<template>
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
</template>

<script>
export default {
  name: "CardForm",
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      card: {
        title: "",
        desc: ""
      }
    };
  }
};
</script>

<style></style>
