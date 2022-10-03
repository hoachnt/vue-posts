<template lang="">
  <div>
    <h1>Welcome</h1>
    <p>Here you can see posts from other people</p>
    <my-button @click="$router.push('/posts')" class="go-to-posts">Posts Here!</my-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dark: false,
      root: null,
    };
  },
  mounted() {
    this.root = document.documentElement;
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
    dark: {
      handler: function () {
        this.$nextTick(() => {
          if (!this.dark) {
            this.root.style.setProperty("--main-background-color", "#000");
            this.root.style.setProperty("--dark-background-color", "#fff");
            this.root.style.setProperty("--main-text-color", "#fff");
            this.root.style.setProperty("--white-text-color", "#000");
            this.root.style.setProperty("--white-color", "#202124");
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
:root {
  --main-button-color: #42b883;
  --delete-color: #c21e56;
  --main-text-color: #000;
  --main-background-color: #f2f2f2;
  --dark-background-color: #000;
  --white-text-color: #fff;
  --white-color: #fff;
  --page-wrapper-bg: rgba(32, 32, 32, 0.1);
}
body {
  background: var(--main-background-color);
}
.go-to-posts {
  background: none !important;
  color: #fff !important;
}
</style>
