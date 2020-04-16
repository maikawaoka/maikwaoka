<template>
  <div>
    <div id="headerSection">
      <headerSection />
    </div>
    <div id="mainSection">
      <mainSection />
    </div>
    <div id="aboutSection">
      <aboutSection />
    </div>
    <div id="skillSection">
      <skillSection />
    </div>
    <div id="visionSection">
      <visionSection />
    </div>
    <div id="footerSection">
      <footerSection />
    </div>
  </div>
</template>

<script>
import headerSection from './components/Header.vue';
import mainSection from './components/Main.vue';
import aboutSection from './components/About.vue';
import skillSection from './components/Skill.vue';
import visionSection from './components/Vision.vue';
import footerSection from './components/Footer.vue';

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
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap");
</style>

