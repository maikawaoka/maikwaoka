import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex) //vuexが読み込まれている

export default new Vuex.Store({ //storeをexport
  state: {
    skillCategories: [],
    loaded: false
  },
  //componentsの算出プロパティ//各componentsで共通のcomputedメソッドがあるとき、共通化の手段としてgettersオプションが提供
  getters: {
    skillName:(state) => (index) => {
      const skillNameArray = []
      if(state.skillCategories[index]) {
        state.skillCategories[index].skill.forEach((Skill) => {
          skillNameArray.push(Skill.name)
        })
      }
      return skillNameArray
    },
    skillScore:(state) => (index) => {
      const skillScoreArray = []
      if(state.skillCategories[index]) {
        state.skillCategories[index].skill.forEach((Score) => {
          skillScoreArray.push(Score.score)
        })
      }
      return skillScoreArray
    }
  },
  //同期処理、stateの更新
  mutations: {
    //payloadはVuexの引数
    setSkillCategories(state,payload) {
      //state.skillCategoriesをstateのskillCategoriesに代入
      //payloadは追加の引数
    state.skillCategories = payload.skillCategories; //payloadは追加の引数
    state.loaded = true
    }
  },
  //非同期処理、mutationをcommit
  actions: {
      //非同期
    async updateSkillCategories({commit}) {
      const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skills';
      return Axios.get(functionsUrl)
        .then (response => {
          const skillCategories = response.data
          commit('setSkillCategories',{skillCategories})
        })
    },
  },
})
