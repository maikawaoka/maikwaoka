<template>
  <div id="mainSection">
    <div id="userName">
      <span style="text-decoration: underline;">
        Mai Kawaoka
      </span>
    </div>
    <p />
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
  background-color: linear-gradient(to bottom, #80e1f7, #06c1e6);
  width: 100%;
  height: auto;
  padding-bottom: 30px;
  text-align: center;
}

#userName {
  color: #fff;
  font-family: 'Noto Sans', sans-serif;
  font-weight: bolder;
  font-size: 18pt;
  text-shadow: 0 0.5px 2px black;
  padding: 20px 0;
  margin: 0 310px;
}

#companyName {
  color: #fff;
  padding-top: 20px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 18pt;
}

#profilePicture {
  background-position: center;
  border-radius: 50%;
  width: 300px;
  height: auto;
}
</style>
