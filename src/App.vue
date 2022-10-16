<template lang="">
  <navbar></navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from "@/components/UI/Navbar";
export default {
  components: { Navbar },
};
</script>
<style>
.app {
  margin: 20px 10px;
  position: relative;
  min-height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
#app, html, body {
  background: var(--main-background-color);
}
</style>