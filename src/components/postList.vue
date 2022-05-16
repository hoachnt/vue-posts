<template>
  <div v-if="this.posts.length > 0">
    <h2>Posts list</h2>
    <transition-group name="post-list">
      <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)" />
    </transition-group>
  </div>
  <h2 v-else style="color: #c21e56; text-align: center;">
    POST LIST IS EMPTY!
  </h2>
</template>

<script>
import postItem from "./postItem.vue";

export default {
  components: { postItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-list-enter-active,
.post-list-leave-active {
  transition: .5s ease-in-out;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
