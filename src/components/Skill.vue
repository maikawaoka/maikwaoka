<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Set
    </div>
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
    </div>
    <div id="skillList">
      <ul
        id="front-end"
        :class="{'front-change': isFrontActive}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>jQuery</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="back-end"
        :class="{'back-change': isBackActive}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
        <li>Python</li>
      </ul>
      <ul
        id="devops"
        :class="{'dev-change': isDevOpsActive}"
      >
        <li>Linux</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
        <li>AWS</li>
      </ul>
    </div>
    <div
      v-if="isFrontActive"
    >
      <Frontendchart />
    </div>
    <div
      v-if="isBackActive"
    >
      <Backendchart />
    </div>
    <div
      v-if="isDevOpsActive"
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
    background-color: #a08181;
    width: 100%;
    height: auto;
  }

  #skillTitle {
    color: #000;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    font-size: 18pt;
    text-align: center;
  }

  #skillExplain {
    background: #cfc;
    color: #707070;
    font-family: 'Oswald', sans-serif;
    font-size: 12pt;
    word-break: break-all;
    font-weight: bold;
    width: 40%;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
  }

  #GitHub {
    text-align: center;
  }

  #gitHubLabel {
    background: #cfc;
    color: #707070;
    font-family: 'Oswald', sans-serif;
    font-size: 12pt;
    word-break: break-all;
    font-weight: bold;
    width: 40%;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
  }

  #gitHubLink {
    background: #cfc;
    color: #707070;
    font-family: 'Oswald', sans-serif;
    font-size: 12pt;
    word-break: break-all;
    width: 40%;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
  }
</style>
