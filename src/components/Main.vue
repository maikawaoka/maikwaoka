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
    <p>
      <img
        id="profilePicture"
        src="../assets/img_mai.png"
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: {
      type: String,
      default: ''
    }
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
}

#userName {
  color: #fff;
  font-family: 'Oswald', sans-serif;
  font-weight: bolder;
  font-size: 18pt;
  text-shadow: 0 0.5px 2px black;
  text-align: center;
}

#companyName {
  color: #fff;
  font-family: 'Oswald', sans-serif;
  font-weight: bolder;
  font-size: 18pt;
  text-shadow: 0 0.5px 2px black;
  text-align: center;
}

#profilePicture {
  border-radius: 50%;
  width: 64px;
  height: auto;
  margin: 50px auto;
  display: block;
  text-align: center;
}
</style>
