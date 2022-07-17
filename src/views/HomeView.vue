<template>
  <div class="home">
    <Hero />
    <Counter />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Counter from '@/components/Counter-boxs.vue'
export default {
  name: 'HomeView',
  components: {
    Hero,
    Counter
  }
}
</script>
