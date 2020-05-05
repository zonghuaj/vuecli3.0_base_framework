<template>
  <div class="home">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box">
      <div class="content">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import vHead from "./Header.vue";
import vSidebar from "./Sidebar.vue";

export default {
  name: "Home",
  components: {
    vHead,
    vSidebar
  }
};
</script>
