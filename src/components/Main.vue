<template>
  <div id="mainSection">
    <div id="userName">
      Mai Kawaoka
    </div>
    <hr
      color="#fff"
      width="20%"
      size="3"
    >
    <div id="companyName">
      Seattle consulting
    </div>
    <img
      id="profilePicture"
      src="../assets/img_mai.png"
    >
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
  msg :String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');

#mainSection {
  background: #966;
  width: 100%;
  height: auto;
  padding: 30px;
  text-align: center;
}

#userName {
  color: #fff;
  font-family: 'Oswald', sans-serif;
  font-weight: bolder;
  font-size: 18pt;
  text-shadow: 0 0.5px 2px black;
  padding: 20px;
  margin: 0 310px;
}

#companyName {
  color: #fff;
  font-family: 'Oswald', sans-serif;
  font-weight: bolder;
  font-size: 18pt;
  text-shadow: 0 0.5px 2px black;
  padding: 30px;
  margin: 0 310px;
}

#profilePicture {
  background-position: center;
  border-radius: 50%;
  width: 64px;
  height: auto;
}
</style>
