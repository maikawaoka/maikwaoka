import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)//vueが読み込まれている

const store = new Vuex.Store({
  state: {
    skillCategories: [],
  },
  getters: {
    getSkill: (state) => (category) =>{
      if (state.skillCategories.length > 0) {
        return state.skillCategories.find((skill) =>skill.category===category);
      }
      return [];
    },
  },
  mutations: {
    setSkillCategories(state,payload) {
      state.skillcategories = payload.skillCategories;
    },
  },
  actions: {
    async updateSkillCategories({commit}) {
      const skillCategories = [];
      const res = await Axios.get('https://us-central1-portfolio-e55ed.cloudfunctions.net/skills');
      res.data.forEach((category) => {
        skillCategories.push(category);
      });
      commit('setSkillCategories',{skillCategories});
    },
  },
});
console.log(store.state);

export default store



