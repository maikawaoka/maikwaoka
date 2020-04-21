<template>
  <div>
    <headerSection />
    <mainSection />
    <div>{{ this.skills }}</div>
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
    data() {
      return {
        skills: []
      }
    },
    mounted () {
      this.getSkills();
    },
    methods: {
    getSkills() {
      // dataのスキルを初期化する
      this.skills = [];
      // this.skillsを一時変数のitemsに参照コピーする
      let items = this.skills;
      // axios.getを用いてデプロイ済のfunctionにアクセスする
      this.axios.get('https://maikawaoka-87700.firebaseio.com/')
        .then((response) => {
          response.data.forEach(function(skill) {
            // 取得したデータを１件ずつ配列に設定する
            items.push(skill);
          })
        })
        .catch((e) => {
          alert(e);
        });
      console.log(items)
    }
  }
}
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
</style>

