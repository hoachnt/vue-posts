<template>
  <form @submit.prevent>
    <h2 style="color: var(--main-text-color)">Create Post</h2>
    <my-input
      v-model:value="post.title"
      type="text"
      placeholder="Title"
      required
      minlength="10"
      class="input-modal"
    />
    <my-input
      v-bind:value="post.body"
      @input="post.body = $event.target.value"
      type="text"
      placeholder="Description"
      required
      minlength="10"
      class="input-modal"
    />
    <my-button class="btn" @click="canClickBtn" type="submit">Create</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
        id: 0,
      },
      isDisabled: true,
    };
  },
  methods: {
    createPost() {
      this.$emit("create", this.post);

      this.post = {
        title: "",
        body: "",
      };
    },
    canClickBtn() {
      let myInput = document.querySelector(".input-modal");

      if (myInput.value.length < 10) {
        this.isDisabled = true;
      } else {
        this.createPost();
      }
    },
  },
  mounted() {},
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
.btn {
  margin-top: 20px;
}
.input-modal {
  min-width: auto;
}
</style>
