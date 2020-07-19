<template>
  <div class="home">
    <Header @switchChange="onSwitch" />
    <CardsBox :switch="onSwitch()" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header/Header.vue";
import CardsBox from "@/components/CardsBox/CardsBox.vue";

export default {
  name: "Home",
  methods: {
    onSwitch(value) {
      const switchValue = value;
      return switchValue;
    }
  },
  components: {
    Header,
    CardsBox
  }
};
</script>
