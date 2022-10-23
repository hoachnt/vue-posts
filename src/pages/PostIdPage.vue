<template>
  <div class="post-id-page">
    <font-awesome-icon
      icon="fa-solid fa-arrow-left"
      class="return"
      @click="$router.push('/posts')"
    />
    <div
      v-for="post in posts"
      :post="post"
      :key="post.id"
      style="will-change: transform"
    >
      <div class="post min-w-full">
        <div>
          <div class="post-main title mb-8">{{ post.title }}</div>
          <div class="img-wrapper">
            <img
              :src="`https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/assets/${post.image}`"
              alt=""
              class="img"
            />
          </div>
          <span class="post-main">{{ post.body }}</span>
        </div>
      </div>
    </div>
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
.post-id-page .post {
  margin: 10px 0;
  margin-bottom: 80px !important;
  border: 1px solid #3e3c3c;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  color: var(--main-text-color);
  max-width: 900px;
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
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.return:hover {
  color: rgb(26, 92, 255);
  box-shadow: rgba(26, 92, 255, 0.5) 0px 20px 20px -10px;
  transform: rotate(360deg);
}
.img-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.img {
  max-width: 100%;
  border-radius: 10px;
}
.post-main {
  min-width: 100%;
}

.title {
  font-size: 25px;
  font-weight: 600;
}

</style>
