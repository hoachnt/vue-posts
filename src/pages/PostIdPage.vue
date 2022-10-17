<template>
  <div>
    <font-awesome-icon
      icon="fa-solid fa-arrow-left"
      class="return"
      @click="$router.push('/posts')"
    />
    <h1>Page with id post: {{ $route.params.id }}</h1>
    <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
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
        const response = await axios.get(this.$store.state.post.serverUrl);

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
.return {
  color: #fff;
  font-size: 20px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: .2s ease-in-out;
}
.return:hover {
  color: rgb(26, 92, 255);
  box-shadow: rgba(26, 92, 255, 0.5) 0px 20px 20px -10px;
}
</style>
