<template>
  <transition>
    <div>
      <h1>Posts</h1>
      <my-input
        v-focus
        v-model:value="searchQuery"
        placeholder="Search..."
        style="padding: 10px 0; border-left: 0; border-right: 0"
      />
      <div class="app__btns">
        <my-button @click="showDialog" class="create-post"
          >Create Post</my-button
        >
        <my-select
          class="select"
          v-model="selectedSort"
          :options="sortOptions"
        />
      </div>
      <transition name="modal-show">
        <my-dialog v-model:show="dialogVisible" style="will-change: transform">
          <post-form @create="createPost"/>
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
import MySelect from "@/components/UI/MySelect.vue"
import axios from "axios";

export default {
  components: {
    postList,
    postForm,
    MySelect
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      dark: false,
      root: null,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 1,
      metaAll: 0,
      meta: "total_count",
      totalPages: 0,
      serverUrl: "http://localhost:8055/items/posts",
      sortOptions: [
        { value: "title", name: "Title" },
        { value: "body", name: "Description" },
      ],
    };
  },
  methods: {
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
    async fetchPosts() {
      try {
        this.isPostLoading = true;

        const response = await axios.get(this.serverUrl, {
          params: {
            page: this.page,
            limit: this.limit,
            meta: this.meta,
          },
        });

        this.totalPages = Math.ceil(
          response.data.meta.total_count / this.limit
        );
        this.posts = await response.data.data;
        this.metaAll = response.data.meta.total_count;
      } catch (error) {
        alert(error.message);

        document.location.reload(true);
      } finally {
        setTimeout(() => (this.isPostLoading = false), 0);
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;

        const response = await axios.get(this.serverUrl, {
          params: {
            page: this.page,
            limit: this.limit,
          },
        });
        this.posts = await [...this.posts, ...response.data.data];
      } catch (error) {
        alert(error.message, error.name);

        document.location.reload(true);
      }
    },
  },
  mounted() {
    this.fetchPosts();
    this.root = document.documentElement;
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    searchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    getIdFromMeta() {
      this.fetchPosts();

      return this.metaAll;
    },
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