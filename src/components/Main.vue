<template>
  <div id="mainSection">
    <div id="userName">
      <span style="text-decoration: underline;">Mai Kawaoka</span>
    </div>


    <div id="companyName">
      Seattle  consulting
    </div>
    <img
      id="profilePicture"
      src="@/assets/img_mai.jpg"
    >
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
  background: #966;
  padding-bottom: 30px;
  text-align: center;
}

#userName {
  color: rgb(0, 0, 0);
  font-family: 'Impact', sans-serif;
  font-weight: 200;
  font-size: 18pt;
  letter-spacing: 10px;
  text-decoration: underline;
}

#companyName {
  color: rgb(0, 0, 0);
  font-family: 'Impact', sans-serif;
  font-weight: 200;
  font-size: 18pt;
  letter-spacing: 10px;
}

#profilePicture {
  border-radius: 50%;
  width: 64px;
  height: 64px;
}
</style> 