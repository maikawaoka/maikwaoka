<template>
  <div id="footerSection">
    <a
      href="#header"
      @click="clickSmoothScroll()"
    >
      <img
        id="footerScroll"
        alt="Footer"
        src="../assets/yajirushi.svg"
      >
    </a>
    <div id="footerCopyright">
      ©︎SeattleConsulting
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#headerSection'), //このセクションまでスクロールしてください
        400, //smoothscrollの決まり、秒
        null, //
        null, //
        'y' //縦方向
      )
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');

  #footerSection {
    background: #fff;
    width: 100%;
    height: auto;
  }

  #footerScroll {
    background: white;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    display: block;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    position: relative;
    top: -25px;
  }

  #footerCopyright {
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 16pt;
    text-shadow: 0 0.5px 2px black;
    text-align: center;
  }
</style>
