import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)//vueが読み込まれている

export default new Vuex.Store({ //storeをexport
  state: {
    skillCategories: [],
    loaded: false
  },
  //componentsの算出プロパティ//各componentsで共通のcomputedメソッドがあるとき、共通化の手段としてgettersオプションが提供
  getters: {
    getSkill: (state) => (category) =>{
      if (state.skillCategories.length >0) {
        //skill.categoriesと同じ値のcategoryだった
        //skill.category・・・配列の中の1つの要素、カテゴリーを表す
        //=>アロー関数
        return state.skillCategories.find((skill) =>skill.category==category);
      }
      return []
    },
  },
  //同期処理、stateの更新
  mutations: {
    //payloadはVuexの引数
    setSkillCategories(state,payload) {
      //state.skillCategoriesをstateのskillCategoriesに代入
      //payloadは追加の引数
    state.skillcategories = payload.skillCategories; //payloadは追加の引数
    state.loaded = true
    }
  },
  //非同期処理、mutationをcommit
  actions: {
    async updateSkillCategories({commit}) {
      //dataのスキルを初期化
      const skillCategories = [];
      //functionにawait axiosを用いてアクセス
      const res = await Axios.get('https://us-central1-portfolio-e55ed.cloudfunctions.net/skills');
      //取得したデータを入れるに設定
      res.data.forEach((category) => {
        skillCategories.push(category);
      });
      commit('setSkillCategories',{skillCategories});
    },
  },
})
