<template>
  <div id="mainSection">
    <div id="userName">
      Mai Kawaoka
    </div>
    <hr
      color="#5F9EA0"
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
  background: #333;
  width: 100%;
  height: auto;
  padding: 30px;
}

#userName {
  color: #fafad2;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  font-size: 24pt;
  text-shadow: 2px 2px black;
  text-align: center;
}

#companyName {
  color: #fafad2;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  font-size: 22pt;
  text-shadow: 2px 2px black;
  text-align: center;
}

#profilePicture {
  border-radius: 50%;
  width: 300px;
  height: auto;
  margin: 50px auto;
  display: block;
  text-align: center;
}
</style>
