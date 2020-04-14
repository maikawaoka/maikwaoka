<template>
  <div id="App">
    <headerSection />
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap',"https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap");
</style>

