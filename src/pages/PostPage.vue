<template>
  <transition>
    <div class="container">
      <my-input v-model:value="searchQuery" placeholder="Search..." />
      <div class="app__btns">
        <my-button @click="showDialog" class="create-post flex-1 md:flex-auto"
          >Create Post</my-button
        >
        <my-select
          v-model:modelValue="selectedSort"
          class="select flex-1"
          :options="sortOptions"
        />
      </div>
      <post-nasa-earth />
      <teleport to="body">
        <transition name="modal-show">
          <my-dialog
            v-model:show="dialogVisible"
            style="will-change: transform"
          >
            <post-form @create="createPost" />
          </my-dialog>
        </transition>
      </teleport>
      <my-header :header="'Posts from users'" />
      <transition mode="out-in">
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
import postNasaEarth from "@/components/postNasaEarth.vue";
import MySelect from "@/components/UI/MySelect.vue";
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import usePosts from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSearchedPosts from "@/hooks/useSearchedPosts";

export default {
  components: {
    postList,
    postForm,
    postNasaEarth,
    MySelect,
  },
  data() {
    return { dialogVisible: false };
  },
  setup(props) {
    const {
      posts,
      totalPages,
      isPostLoading,
      page,
      meta,
      serverUrl,
      loadMorePosts,
    } = usePosts(5);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { searchQuery, searchedPosts } = useSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostLoading,
      page,
      meta,
      serverUrl,
      loadMorePosts,
      selectedSort,
      sortedPosts,
      searchQuery,
      searchedPosts,
    };
  },
  methods: {
    ...mapActions({
      // loadMorePosts: "post/loadMorePosts",
    }),
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    reversePosts() {
      this.posts.reverse();
    },
    createPost(post, file) {
      this.dialogVisible = false;
      this.pushPostImage(file);

      setTimeout(() => {
        const response = axios
          .get(`${this.serverUrl}/files?sort=uploaded_on`)
          .then((response) => {
            let responseData = response.data.data;

            return axios({
              method: 'post',
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
              url: `${this.serverUrl}/items/posts`,
              data: {
                title: post.title,
                image: responseData[responseData.length - 1].id,
                body: post.body,
              },
            })
              .then(() => this.posts.unshift(post))
              .then(() => {
                document.location.reload(true);
              });
          });
      }, 1000);
    },
    pushPostImage(file) {
      const formData = new FormData();
      console.log(file);

      formData.append("title", "Image");
      formData.append("file", file.files[0]);

      return axios.post(`${this.serverUrl}/files`, formData);
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);

      return axios.delete(`${this.serverUrl}/items/posts/${post.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    },
  },
  computed: {
    ...mapState({
      metaAll: (state) => state.post.metaAll,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      // sortedPosts: "post/sortedPosts",
      // searchedPosts: "post/searchedPosts",
    }),
  },
  mounted() {},
};
</script>

<style>
:root {
  --main-button-color: #06c;
  --delete-color: #c21e56;
  --main-text-color: #000;
  --main-background-color: #f2f2f2;
  --dark-background-color: #18191c;
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
  transition: 0.3s ease-in-out;
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
