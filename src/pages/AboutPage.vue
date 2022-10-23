<template lang="">
  <div>
    <h1 class="text-4xl text-center">About site</h1>
    <p class="text-center mt-5">This website was built by 
      <a href="https://hoach.ru" class="text-blue-500 underline underline-offset-8 ">Nguyen Tien Hoach</a> with love ❤
    </p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  methods: {
    ...mapActions({
      authTrue: "post/authTrue",
    }),
  },
  mounted() {
    this.authTrue();
  },
};
</script>
<style>
p {
  color: #fff;
}
</style>