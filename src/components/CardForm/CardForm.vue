<template>
  <a-form-model>
    <a-form-model-item v-model="card" label="Card Title">
      <a-input v-model="card.title" />
    </a-form-model-item>
    <a-form-model-item label="Activity form">
      <a-input v-model="card.desc" type="textarea" />
    </a-form-model-item>
    <a-form-model-item>
      <router-link @click="(card.title = ''), (card.desc = '')" to="/">
        <a-button type="primary" @click="submit">
          Create
        </a-button>
      </router-link>
      <router-link @click="(card.title = ''), (card.desc = '')" to="/">
        <a-button style="margin-left: 10px;">
          Cancel
        </a-button>
      </router-link>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import { mapMutations } from "vuex";

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
  },
  methods: {
    ...mapMutations(["createCard"]),
    submit() {
      this.createCard({
        title: this.card.title,
        description: this.card.desc
      });
    }
  }
};
</script>

<style></style>
