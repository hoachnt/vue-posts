<template>
  <transition>
    <div>
      <h1>Posts</h1>
      <my-input
        v-focus
        :value="searchQuery"
        @update:value="setSearchQuery"
        placeholder="Search..."
        style="padding: 10px 0; border-left: 0; border-right: 0"
      />
      <div class="app__btns">
        <my-button @click="showDialog" class="create-post"
          >Create Post</my-button
        >
        <my-select
          class="select"
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
        />
      </div>
      <transition name="modal-show">
        <my-dialog v-model:show="dialogVisible" style="will-change: transform">
          <post-form @create="createPost" />
        </my-dialog>
      </transition>
      <transition>
        <post-list
          :posts="searchedPosts"
          @remove="removePost"
          v-if="!isPostLoading"
          style="will-change: transform"
          class="posts"
        />
        <div v-else style="will-change: transform" class="posts-loading">
          Posts Loading...
        </div>
      </transition>
      <div v-intersection="loadMorePosts" class="observer"></div>
      <!-- <div class="page__wrapper">
        <post-pages :pages="totalPages" :page="page" @change="changePage" />
      </div> -->
      <!-- <my-button class="dark-light-btn" @click="dark = !dark"
        >Change Theme</my-button
      > -->
    </div>
  </transition>
</template>

<script>
import postForm from "@/components/postForm.vue";
import postList from "@/components/postList.vue";
import MySelect from "@/components/UI/MySelect.vue";
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    postList,
    postForm,
    MySelect,
  },
  data() {
    return { dialogVisible: false };
  },
  methods: {
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    reversePosts() {
      this.posts.reverse();
    },
    createPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false;

      return axios
        .post(this.serverUrl, {
          title: post.title,
          body: post.body,
        })
        .then(() => {
          setTimeout(() => document.location.reload(true), 1000);
        });
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);

      return axios.delete(`${this.serverUrl}/${post.id}`);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    },
  },
  mounted() {
    this.fetchPosts();
    this.root = document.documentElement;
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostLoading: (state) => state.post.isPostLoading,
      dark: (state) => state.post.dark,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      metaAll: (state) => state.post.metaAll,
      meta: (state) => state.post.meta,
      totalPages: (state) => state.post.totalPages,
      serverUrl: (state) => state.post.serverUrl,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      searchedPosts: "post/searchedPosts",
    }),
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

.create-post {
  width: max(70%);
  margin-right: 20px;
}

h1 {
  margin-bottom: 20px;
  color: var(--main-text-color);
}

/* .posts {
  max-width: 50vw;
  margin: 0 auto;
} */
.posts-loading {
  color: var(--main-text-color);
}

.v-enter-active,
.v-leave-active {
  transition: 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(50px);
  transition: 0.3s ease-in-out;
}

.modal-show-enter-active,
.modal-show-leave-active {
  transition: 0.2s ease-in-out;
}

.modal-show-enter-from,
.modal-show-leave-to {
  transform: scale(0);
}

.app__btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 10px;
}

.select {
  padding: 15px;
  min-width: 20%;
  background: #fff;
  border: 2px solid var(--main-button-color);
  border-radius: 10px;
  font-size: 16px;
  text-align: center;
  color: var(--main-color);
  font-weight: 500;
}

.page__wrapper {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  justify-content: space-between;
  background: var(--page-wrapper-bg);
  border-radius: 15px;
  position: fixed;
  max-width: 100%;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(4px);
  padding: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.dark-light-btn {
  position: fixed;
  right: 20px;
  top: 20px;
  background: var(--dark-background-color) !important;
  color: var(--white-text-color) !important;
  transform: none !important;
}

.dark-light-btn:hover {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px !important;
}
.observer {
  height: 30px;
}

@media screen and (max-width: 700px) {
  .posts {
    grid-template-columns: 1fr;
  }
}
</style>
