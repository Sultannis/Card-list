<template>
  <header class="header">
    <router-link class="header__btn" to="/create">
      <a-button type="primary">
        Add card
      </a-button></router-link
    >
    <div class="header__switch">
      <h3 class="header__title">Drag -n drop</h3>
      <a-switch default-checked @change="onChange" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      switch: true
    };
  },
  methods: {
    onChange() {
      this.switch = !this.switch;
      this.$emit("switchChange", this.switch);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid rgb(136, 146, 192);

  &__switch {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__title {
    font-size: 16px;
    color: black;
    margin: 0;
    margin-right: 10px;
  }
}
</style>
