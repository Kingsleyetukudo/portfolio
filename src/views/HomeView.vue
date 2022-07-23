<template>
  <div class="home">
    <Hero />
    <Counter />
    <AboutViewPage />
    <Skill />
    <Project />
    <Testimonal />
    <Contact />
    <Action />
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import Counter from '@/components/Counter-boxs.vue'
import AboutViewPage from '@/components/About-view-page.vue'
import Skill from '@/components/Skills.vue'
import Project from '@/components/Project-filter.vue'
import Testimonal from '@/components/Testimonals.vue'
import Footer from '@/components/Footer-page.vue'
import Contact from '@/components/Contact-form.vue'
import Action from '@/components/Call-to-action.vue'
export default {
  name: 'HomeView',
  components: {
    Hero,
    Counter,
    AboutViewPage,
    Skill,
    Project,
    Testimonal,
    Contact,
    Action,
    Footer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
