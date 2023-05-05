<template >
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <router-link to="/" class="logo">Vue-router</router-link>
        <ul class="header__nav-list">
          <li v-for="link in links" :key="link.url">
            <router-link class="header__nav-link" :to="link.url">
              {{ link.title }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: ['links']
}
</script>
<style></style>