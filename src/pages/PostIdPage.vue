<template>
  <div>
    <h1>Page with id post: {{ $route.params.id }}</h1>
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
      style="will-change: transform"
    />
  </div>
</template>

<script>
import axios from "axios";
import postItem from "@/components/postItem.vue";

export default {
  components: { postItem },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    filterPost() {
      this.posts = this.posts.filter((p) => p.id == this.$route.params.id);
    },
    async fetchPost() {
      try {
        const response = await axios.get("http://91.105.198.245/items/posts");

        this.posts = response.data.data;

        this.filterPost();
      } catch (error) {}
    },
  },
  mounted() {
    this.fetchPost();
  },
};
</script>

<style>
.post {
  margin: 10px;
  padding: 15px;
  background: var(--white-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  color: var(--main-text-color);
  max-width: 900px;
  margin: 0 auto;
}

.post-main {
  min-width: 100%;
}

.title {
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: 600;
}
</style>
