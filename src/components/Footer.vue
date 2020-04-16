<template>
  <div id="footerSection">
    <a
      href="#header"
      @click="clickSmoothScroll()"
    >
      <img
        id="footerScroll"
        alt="Footer"
        src="../assets/pagetop.jpg"
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
        document.querySelector('#headerSection'),
        400,
        null,
        null,
        'y'
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
    width: 40px;
    height: 40px;
    margin: 0 auto;
    display: block;
    text-align: center;
  }

  #footerCopyright {
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 12pt;
    text-shadow: 0 0.5px 2px black;
    padding: 20px;
    text-align: center;
  }
</style>
