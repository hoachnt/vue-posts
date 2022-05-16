<template>
  <div class="app">
    <h1>Posts</h1>
    <my-button @click="showDialog" class="create-post">Create Post</my-button>
    <transition name="modal-show">
      <my-dialog v-model:show="dialogVisible" style="will-change: transform;">
        <post-form @create="createPost" />
      </my-dialog>
    </transition>
    <transition>
      <post-list :posts="posts" @remove="removePost" v-if="!isPostLoading" style="will-change: transform;"/>
      <div v-else style="will-change: transform;">Posts loading...</div>
    </transition>
  </div>
</template>

<script>
import postForm from "./components/postForm.vue";
import postList from "./components/postList.vue";
import axios from 'axios'

export default {
  components: {
    postList,
    postForm,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false

    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id != post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')

        this.posts = response.data;
      } catch (error) {
        alert('Sever Error')
      } finally {
        setTimeout(() => this.isPostLoading = false, 1000)
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
.app {
  margin: 0 10px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.create-post {
  width: max(100%);
  margin-bottom: 40px;
}

h1 {
  margin-bottom: 20px;
}

.v-enter-active,
.v-leave-active {
  transition: 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
.modal-show-enter-active,
.modal-show-leave-active {
  transition: .2s ease-in-out;
}
.modal-show-enter-from,
.modal-show-leave-to {
  transform: scale(0);
}
</style>