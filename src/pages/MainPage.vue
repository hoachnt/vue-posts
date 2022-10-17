<template lang="">
  <div>
    <h1>Welcome</h1>
    <p>Here you can see posts from other people</p>
    <my-button @click="$router.push('/posts')" class="go-to-posts">Posts Here!</my-button>
  </div>
</template>
<script>
export default {};
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
