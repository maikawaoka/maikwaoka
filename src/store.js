import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({//説明の為、代入しました
  //ここに実装を書きます
  //stateオプションで初期値を設定
  state: {
    count: 10
  },
  //gettersオプションで定義
  getters: {
    //stateから別の値を計算
    squared: function(state) {
      return state.count * state.count
    },
    cubed: (state, getters) => state.count * getters.squared
  }
})

console.log(store.state.count) //10
//store.gettersで参照
console.log(store.getters.cubed) //1000

export default store
