<template>
  <Nav />
  <router-view/>
</template>

<script>
import Nav from '@/components/Nav-bar.vue'
export default {

  components: {
    Nav
  },
  data() {
    return {

    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #212529;
}
</style>
