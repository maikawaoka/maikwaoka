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
    >
      <div v-if="open">
        <ul>
          <li>
            <a
              v-smooth-scroll
              href="#headerSection"
              class="Menubar"
              @click="toggle"
            >Home</a>
          </li><br>
          <li>
            <a
              v-smooth-scroll
              href="#AboutSection"
              class="Menubar"
              @click="toggle"
            >
              About Me</a>
          </li><br>
          <li>
            <a
              v-smooth-scroll
              href="#skillSection"
              class="Menubar"
              @click="toggle"
            >Skill Set</a>
          </li><br>
          <li>
            <a
              v-smooth-scroll
              href="#visionSection"
              class="Menubar"
              @click="toggle"
            >Vision</a>
          </li><br>
          <li>
            <a
              v-smooth-scroll
              href="#visionSection"
              class="Menubar"
              @click="toggle"
            >Customize Item1</a>
          </li><br>
          <li>
            <a
              v-smooth-scroll
              href="#visionSection"
              class="Menubar"
              @click="toggle"
            >Customize Item2</a>
          </li><br>
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
$--simple-drawer-bg-color:white;

@import "~vue-simple-drawer/src/index"
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

.Menubar {
  color: black;
  font-size: 20px;
}
</style>
