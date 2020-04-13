<template>
  <div id="headerSection">
    <button
      id="headerButton"
      @click="toggle"
    >
      <img
        id="bottonimg"
        src="@/assets/button.png"
      >
    </button>
    <Drawer
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        content here
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";
export default {
name: "HeaderSection",
components: {
Drawer
},
data() {
return {
open: false
}
},
methods: {
toggle() {
this.open = !this.open}
}
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
  "~bootstrap/scss/buttons";
</style>

<style>
#headerSection {
  text-align: left;
  width: 100%;
  height: auto;
}

#headerButton {
  background-color: #fff;
  border-style: none;
}

#bottonimg {
  text-align: left;
  background-color: #fff;
  width: 30px;
  height: 30px;
}

#imgButton {
  background-color: #fff;
  width: 30px;
  height: auto;
}
</style>

