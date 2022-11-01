<template lang="">
  <navbar></navbar>
  <div class="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>
import Navbar from "@/components/UI/Navbar";
export default {
  components: { Navbar },
  data() {
    return { dark: false, root: null };
  },
  mounted() {
    this.root = document.documentElement;
  },
  watch: {
    dark: {
      handler: function () {
        this.$nextTick(() => {
          if (!this.dark) {
            this.root.style.setProperty("--main-background-color", "#000");
            this.root.style.setProperty("--dark-background-color", "#fff");
            this.root.style.setProperty("--main-text-color", "#fff");
            this.root.style.setProperty("--white-text-color", "#000");
            this.root.style.setProperty("--white-color", "#161617");
            this.root.style.setProperty("--main-button-color", "#2EE59D");
            this.root.style.setProperty("--delete-color", "#fa0b5b");
            this.root.style.setProperty(
              "--page-wrapper-bg",
              "rgb(31 255 131 / 10%)"
            );
          } else {
            this.root.style.setProperty("--main-background-color", "#f2f2f2");
            this.root.style.setProperty("--dark-background-color", "#000");
            this.root.style.setProperty("--main-text-color", "#000");
            this.root.style.setProperty("--white-text-color", "#fff");
            this.root.style.setProperty("--white-color", "#fff");
            this.root.style.setProperty("--main-button-color", "#42b883");
            this.root.style.setProperty("--delete-color", "#c21e56");
            this.root.style.setProperty(
              "--page-wrapper-bg",
              "rgba(32, 32, 32, 0.1)"
            );
          }
        });
      },
      immediate: true,
    },
  },
};
</script>
<style>
.app {
  padding-top: 60px;
}
.container {
  margin: 20px 10px;
  min-height: 100%;
  max-width: 910px !important;
  margin: 0 auto;
  padding: 20px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
#app,
html,
body {
  background: var(--main-background-color);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>