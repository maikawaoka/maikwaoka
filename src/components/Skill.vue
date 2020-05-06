<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Set
    </div>
    <div id="skillskill">
      <div id="skillExplain">
        現在のスキルをまとめました。
        プログラミングスキルはまだ乏しいですが、このポートフォリオの実装にあたりフロントエンドのスキルは力をつけることができたと実感しています。
        今回、目に見えて変化がわかるフロントエンドの分野を非常に楽しく感じました。
        これから幅広く、また高度な技術を得ることで、自分でできることが増えるのが楽しみです。
        そのために日々たゆまぬ努力を続けてまいります。
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
    </div>
    <div id="skillList">
      <div
        id="front-end"
        :class="{'front-change': isFrontActive && loaded}"
      >
        <div class="front-list">
          <span>HTML</span>
          <span>css</span>
          <span>Javascript</span>
          <span>jQuery</span>
          <span>SCSS</span>
          <span>Vue</span>
        </div>
      </div>
      <div
        id="back-end"
        :class="{'back-change': isBackActive}"
      >
        <div class="back-list">
          <span>Java</span>
          <span>Ruby</span>
          <span>RubyOnRails</span>
          <span>MySQL</span>
          <span>Python</span>
        </div>
      </div>
      <div
        id="devops"
        :class="{'dev-change': isDevOpsActive}"
      >
        <div class="dev-list">
          <span>Linux</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Firebase</span>
          <span>AWS</span>
        </div>
      </div>
    </div><br>
    <div
      v-if="isFrontActive && loaded"
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
    loaded()  {
      return this.$store.state.loaded
    }
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
  padding: 30px;
}

#skillskill {
  background: #fff;
  border-radius: 10px 10px 10px 10px;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

#skillTitle {
  color: #fafad2;
  text-shadow: 2px 2px #000;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 24pt;
}

#skillExplain {
  background: #fff;
  border-radius: 10px 10px 10px 10px;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  margin: 0 auto;
  text-align: center;
}

#gitHubLabel {
  font-size: 16px;
  cursor: pointer;
}

#front {
  background: #a52a2a;
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  width: 40%;
  margin: 10px;
  padding: 10px;
  text-align: center;
  display: inlien-block;
  cursor: pointer;
}

.front-end {
  display: inlien-block;
  font-family: 'Montserrat', sans-serif;
}

#back {
  background: #4682b4;
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  width: 40%;
  margin: 10px;
  padding: 10px;
  text-align: center;
  display: inlien-block;
  cursor: pointer;
}

.back-end {
  display: inlien-block;
  font-family: 'Montserrat', sans-serif;
}

#DevOps {
  background: #483d8b;
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 12pt;
  word-break: break-all;
  width: 40%;
  margin: 10px;
  padding: 10px;
  text-align: center;
  display: inlien-block;
  cursor: pointer;
}

.devops {
  display: inlien-block;
  font-family: 'Montserrat', sans-serif;
}

ul {
  list-style: none;
  padding: 0;/* user agent stylesheet抹消 */
}

li {
  padding: 0;
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
}

.graph {
  background: #fff;
  width: 40%;
  height: auto;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
}

.front-list span {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 6px;
  display: inline-block;
  margin: 8px 4px;
  border: none; /* 枠線を消す */
}

.front-change span {
  background: #a52a2a; /* 多分cssも上から順番に反応してくからlistのすぐ下にchange */
}

.back-list span {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 6px;
  display: inline-block;
  margin: 8px 4px;
  border: none;
}

.back-change span {
  background: #4682b4;
}

.dev-list span {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 6px;
  display: inline-block;
  margin: 8px 4px;
  border: none;
}

.dev-change span {
  background: #483d8b;
}
</style>
