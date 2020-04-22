<template>
  <div>
    <headerSection />
    <mainSection />
    <div>{{ this.Skills }}</div>
    <aboutSection />
    <skillSection />
    <visionSection />
    <footerSection />
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
  },
  data: function(){
    return {
      skills: [],
      category: 'front-end',
    };
  },

  created () {
    this.$store.dispatch('updateSkillCategories')
  }
  }
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
</style>

