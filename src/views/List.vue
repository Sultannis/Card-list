<template>
  <div class="home">
    <Header />
    <CardsBox />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header/Header.vue";
import CardsBox from "@/components/CardsBox/CardsBox.vue";

export default {
  name: "Home",
  components: {
    Header,
    CardsBox
  }
};
</script>
