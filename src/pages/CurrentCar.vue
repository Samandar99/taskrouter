<template>
  <main class="main">
    <div class="container">
      <div class="main__item">
        <div class="main__item-img">
          <img :src="getCar.img" alt="" />
        </div>
        <div class="main__item-info">
          <h2>{{ getCar.title }}</h2>
          <p>{{ getCar.text }}</p>
          <router-link to="/cars">
            back
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import bd from "@/bd";
export default {
  data() {
    return {
      cars: bd,
      currentId: null,
    };
  },
  created() {
    this.currentId = this.$route.params.id;
  },
  computed: {
    getCar() {
      return this.cars.find((car) => car.id == this.currentId);
    },
  },
};
</script>

<style></style>
