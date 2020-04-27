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
        そのために日々がむしゃらに努めてまいります。
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
        <button class="HTML">
          HTML
        </button>
        <button class="css">
          css
        </button>
        <button class="Javascript">
          Javascript
        </button>
        <button class="jQuery">
          jQuery
        </button>
        <button class="SCSS">
          SCSS
        </button>
        <button class="Vue">
          Vue
        </button>
      </div>
      <div
        id="back-end"
        :class="{'back-change': isBackActive}"
      >
        <button class="Java">
          Java
        </button>
        <button class="Ruby">
          Ruby
        </button>
        <button class="RubyOnRails">
          RubyOnRails
        </button>
        <button class="MySQL">
          MySQL
        </button>
        <button class="Python">
          Python
        </button>
      </div>
      <div
        id="devops"
        :class="{'dev-change': isDevOpsActive}"
      >
        <button class="Linux">
          Linux
        </button>
        <button class="Git">
          Git
        </button>
        <button class="GitHub">
          GitHub
        </button>
        <button class="Firebase">
          Firebase
        </button>
        <button class="AWS">
          AWS
        </button>
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

.front-change button {
  background: #a52a2a;
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

.back-change button {
  background: #4682b4;
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

.dev-change button {
  background: #483d8b;
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
  background: #fff;
  width: 40%;
  height: auto;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

.HTML {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.css {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.Javascript {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.jQuery {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.SCSS {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.Vue {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.Java {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.Ruby {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.RubyOnRails {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.MySQL {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.Python {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.Linux {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.Git {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.GitHub {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.Firebase {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}

.AWS {
  background: rgba(227, 227, 227, 0.2);
  border-radius: 10px 10px 10px 10px;
  color: #fff;
  padding: 4px;
  margin: 5px;
  border: none;  /* 枠線を消す */
}
</style>
