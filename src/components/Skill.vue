<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Set
    </div>
    <div id="skillskill">
      <div id="skillExplain">
        skillskillskillskillsksklskilllskillskillskillskskillskillskillsk
      </div>
      <label id="gitHubLabel">
        GitHub:
        <a
          id="gitHubLink"
          href="https://github.com/maikawaoka/portfolio"
        >
          https://github.com/maikawaoka/portfolio</a>
      </label>
    </div><br><br>
    <div id="skillCategories">
      <ul>
        <li>
          <span
            id="front"
            @click="setCurrentChart('front')"
          >
            Front-end
          </span>
        </li>
        <li>
          <span
            id="back"
            @click="setCurrentChart('back')"
          >
            Back-end
          </span>
        </li>
        <li>
          <span
            id="DevOps"
            @click="setCurrentChart('devOps')"
          >
            DevOps
          </span>
        </li>
      </ul>
    </div><br>
    <div id="skillList">
      <ul
        id="front-end"
        :class="{'front-change': isFrontActive}"
      >
        <li id="HTML">
          HTML
        </li>
        <li id="css">
          css
        </li>
        <li id="Javascript">
          Javascript
        </li>
        <li id="jQuery">
          jQuery
        </li>
        <li id="SCSS">
          SCSS
        </li>
        <li id="Vue">
          Vue
        </li>
      </ul>
      <ul
        id="back-end"
        :class="{'back-change': isBackActive}"
      >
        <li id="Java">
          Java
        </li>
        <li id="Ruby">
          Ruby
        </li>
        <li id="RubyOnRails">
          RubyOnRails
        </li>
        <li id="MySQL">
          MySQL
        </li>
        <li id="Python">
          Python
        </li>
      </ul>
      <ul
        id="devops"
        :class="{'dev-change': isDevOpsActive}"
      >
        <li id="Linux">
          Linux
        </li>
        <li id="Git">
          Git
        </li>
        <li id="GitHub">
          GitHub
        </li>
        <li id="Firebase">
          Firebase
        </li>
        <li id="AWS">
          AWS
        </li>
      </ul>
    </div>
    <div
      v-if="isFrontActive"
      class="graph"
    >
      <Frontendchart />
    </div>
    <div
      v-if="isBackActive"
      class="graph"
    >
      <Backendchart />
    </div>
    <div
      v-if="isDevOpsActive"
      class="graph"
    >
      <DevOpschart />
    </div>
  </div>
</template>

<script>
import Frontendchart from '../components/Frontendchart.vue';
import Backendchart from '../components/Backendchart.vue';
import DevOpschart from '../components/DevOpschart.vue';

export default {
  components: {
    Frontendchart,
    Backendchart,
    DevOpschart
  },
  data(){
    return {
      currentChart: 'front'
    }
  },
  computed: {
    isFrontActive() {
      return this.currentChart=='front';
    },
    isBackActive() {
      return this.currentChart=='back';
    },
    isDevOpsActive() {
      return this.currentChart=='devOps';
    },
  },
  methods: {
    setCurrentChart(chart) {
      this.currentChart = chart;
    }
  }
}

</script>

<style>
#skillSection {
  background-color: #333;
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
}

#skillskill {
  background: #fff;
  border-radius: 20px 20px 20px 20px;
}

#skillTitle {
  color: #fff;
  text-shadow: 2px 2px #000;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18pt;
  text-align: center;
}

#skillExplain {
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  width: 40%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

#gitHubLabel {
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 12pt;
  width: 40%;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
}

#front {
  background: brown;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  width: 40%;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  display: inlien-block;
}

.front-end {
  display: inlien-block;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}

.front-change {
  background: brown;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
}

#back {
  background: navy;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  width: 40%;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  display: inlien-block;
}

.back-end {
  display: inlien-block;
  font-family: 'Montserrat', sans-serif;
}

.back-change {
  background: navy;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
}

#DevOps {
  background: purple;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  width: 40%;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  display: inlien-block;
}

.devops {
  display: inlien-block;
  font-family: 'Montserrat', sans-serif;
}

.dev-change {
  background: purple;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
}

ul {
  list-style: none;
}

li {
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
}

.graph {
  background: #bbb;
  width: 30%;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
}

#HTML {
  background: rgba(102, 51, 51, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}

#css {
  background: rgba(102, 51, 51, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}

#Javascript {
  background: rgba(102, 51, 51, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}

#jQuery {
  background: rgba(102, 51, 51, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}

#SCSS {
  background: rgba(102, 51, 51, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}

#Vue {
  background: rgba(102, 51, 51, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}

#Java {
  background: rgba(0, 51, 151, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}

#Ruby {
  background: rgba(0, 51, 151, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}

#RubyOnRails {
  background: rgba(0, 51, 151, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}

#MySQL {
  background: rgba(0, 51, 151, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}

#Python {
  background: rgba(0, 51, 151, 0.6);
  color: #fff;
  padding: 5px;
}

#Linux {
  background: rgba(102, 51, 102, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}

#Git {
  background: rgba(102, 51, 102, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}

#GitHub {
  background: rgba(102, 51, 102, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}

#Firebase {
  background: rgba(102, 51, 102, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}

#AWS {
  background: rgba(102, 51, 102, 0.6);
  color: #fff;
  padding: 5px;
  margin: 5px;
}
</style>
