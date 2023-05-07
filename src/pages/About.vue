<template>
  <main class="main">
    <div class="main__about">
      <div class="main__about-item" v-for="user in users" :key="user.id">
        <p>Name: {{ user.name }}</p>
        <p>Surname: {{ user.surname }}</p>
        <a :href="`mailto:${user.email}`">{{ user.email }}</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      users: null,
    };
  },
  methods: {
    async getUser() {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await result.json();
        this.users = data;
      } catch (error) {
        console.log("error ");
      }
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style scoped></style>
