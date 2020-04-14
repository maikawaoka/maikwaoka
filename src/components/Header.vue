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
        <ul>
          <li>
            <a
              v-smooth-scroll
              href="#headerSection"
            >Home</a>
          </li>
          <li>
            <a
              v-smooth-scroll
              href="#AboutSection"
            >
              About Me</a>
          </li>
          <li>
            <a
              v-smooth-scroll
              href="#skillSection"
            >Skill Sets</a>
          </li>
          <li>
            <a
              v-smooth-scroll
              href="#visionSection"
            >Vision</a>
          </li>
          <li>
            <a
              v-smooth-scroll
              href="#visionSection"
            >Customize Item1</a>
          </li>
          <li>
            <a
              v-smooth-scroll
              href="#visionSection"
            >Customize Item2</a>
          </li>
        </ul>
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
  overflow-x: auto;
  width: 40px;
  height: auto;
}

#headerButton {
  background-color: #fff;
  border-style: none;
}

#bottonimg {
  text-align: left;
  background-color: #fff;
  width: 40px;
  height: auto;
}

#imgButton {
  background-color: #fff;
  width: 30px;
  height: auto;
}
</style>

