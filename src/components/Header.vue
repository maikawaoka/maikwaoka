<template>
<div id="headerSection">
<button @click="toggle" class="headerButton"><img id="imgButton" src= "../assets/headerButton.png"></button>
<Drawer @close="toggle" align="left" :closeable="true">
<div v-if="open">content here</div>
</Drawer>
</div>
</template>

<script>
import Drawer from "vue-simple-drawer";
export default {
name: "headerSection",
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
this.open = !this.open
}
}
};
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


#imgButton {
background-color: #FFFFFF;
width : 30px;
height: auto;
}

</style>
