<template>
  <main class="main">
    <div class="container">
      <div class="main__car">
        <div class="main__car-item" v-for="car in cars" :key="car.id">
          <img :src="car.img" alt="" />
          <router-link :to="/cars/ + car.id">{{ car.title }}</router-link>
          <p>{{ car.text }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { bd } from "@/bd";

export default {
  data() {
    return {
      cars: bd,
    };
  },
};
</script>

<style scoped></style>
