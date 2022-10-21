<template lang="">
  <div>
    <h1 class="text-4xl text-center">Welcome !</h1>
    <p class="text-center mt-5">Here you can see posts from other people</p>
  </div>
</template>
<script>
import { onMounted } from '@vue/runtime-core';
export default {
  setup() {
    onMounted(async () => {
      await fetch("http://91.105.198.56/users", {
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      })
    })
  }
};
</script>
<style>
</style>
