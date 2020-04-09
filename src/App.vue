<template>
  <div id="App">
  <headerSection />
  <skillSection />
  <mainSection />
  <aboutSection />
  <skillSection />
  <visionSection />
  <footerSection />
  </div>
</template>

<script>
import headerSection from './components/Header.vue'
import mainSection from './components/Main.vue'
import aboutSection from './components/About.vue'
import skillSection from './components/Skill.vue'
import visionSection from './components/Vision.vue'
import footerSection from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    headerSection,
    mainSection,
    aboutSection,
    skillSection,
    visionSection,
    footerSection,
  }
}
</script>

<style>
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
