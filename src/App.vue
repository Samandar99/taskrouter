<template>
  <div class="wrapper">
    <Header :links="links" />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import '@/assets/styles/main.css'


export default {

  components: {
    Header,
  },
  data() {
    return {
      links: [
        { title: 'Home', url: '/' },
        { title: 'About', url: '/about' },
        { title: 'Cars', url: '/cars' },


      ]
    }
  }
}
</script>

<style></style>
