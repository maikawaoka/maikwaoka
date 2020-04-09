<template>
  <div id="mainSection">
    <div id="userName">MaiKawaoka</div>
    <div id="companyName">Seattle consulting</div>
    <img id="profilePicture" src="../assets/img_mai.jpg">
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>


<style scoped>
@import url(https://www.google.com/get/noto/);
  #mainSection {
    background: linear-gradient(180deg, #06E1C6, #06C1E6);
    padding-bottom: 30px;
    text-align: center;
  }

  #userName {
    color: #FFFFFF;
    font-family: 'Noto Suns';
    font-weight: bold;
    font-size: 18pt;
  }

  #companyName {
    color: #FFFFFF;
    font-family: Bold;
    font-size: 18pt;
  }

  #profilePicture {
    border-radius: 10px;
    width: 370px;
    height: 500px;
  }
</style> 