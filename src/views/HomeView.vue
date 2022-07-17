<template>
  <div class="home">
    <Hero />
    <Counter />
    <AboutViewPage />
    <Skill />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Counter from '@/components/Counter-boxs.vue'
import AboutViewPage from '@/components/About-view-page.vue'
import Skill from '@/components/Skills.vue'
export default {
  name: 'HomeView',
  components: {
    Hero,
    Counter,
    AboutViewPage,
    Skill
  }
}
</script>
