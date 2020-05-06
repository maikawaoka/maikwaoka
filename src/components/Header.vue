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
              href="#headerSection"
              class="menu-bar"
              @click="toggle"
            >Home</a>
          </li><br>
          <li>
            <a
              href="#aboutSection"
              class="menu-bar"
              @click="toggle"
            >
              About Me</a>
          </li><br>
          <li>
            <a
              href="#skillSection"
              class="menu-bar"
              @click="toggle"
            >Skill Set</a>
          </li><br>
          <li>
            <a
              href="#visionSection"
              class="menu-bar"
              @click="toggle"
            >Vision</a>
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
  position: fixed;
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

.vue-simple-drawer {
  background: #fff !important;
}

.menu-bar {
  color: black;
  font-size: 24px;
  line-height: 1.8em;
}
</style>
