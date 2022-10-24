<template>
  <div v-if="this.posts.length > 0" class="posts">
    <transition-group name="post-list" mode="out-in">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
        style="will-change: transform"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: #c21e56; text-align: center; display: block" class="text-2xl">
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
  transition: .8s ease-in-out;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.post-list-move {
  transition: transform .8s ease;
}
.posts {
  margin-bottom: 30px;
}
</style>
