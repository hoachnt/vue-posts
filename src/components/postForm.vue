<template>
  <form @submit.prevent>
    <h2>Create Post</h2>
    <my-input
      v-model:value="post.title"
      type="text"
      placeholder="Title"
    />
    <my-input
      v-bind:value="post.body"
      @input="post.body = $event.target.value"
      type="text"
      placeholder="Description"
    />
    <my-button class="btn" @click="createPost">Create</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 10px;
  display: flex;
  flex-direction: column;
}
h2 {
  margin-bottom: 10px;
}
</style>
