<template>
  <form @submit.prevent>
    <h2 style="color: var(--main-text-color)">Create Post</h2>
    <my-input
      v-focus
      v-model:value="post.title"
      type="text"
      placeholder="Title"
      required
      minlength="1"
      class="input-modal"
    />
    <my-input
      v-bind:value="post.body"
      @input="post.body = $event.target.value"
      type="text"
      placeholder="Description"
      required
      minlength="1"
      class="input-modal"
    />
    <input type="file" id="file" class="file">
    <my-button class="btn" @click="canClickBtn" type="submit">Create</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        image: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.file = document.getElementById("file");

      this.$emit("create", this.post, this.file);
      console.log(this.file)

      this.post = {
        title: "",
        image: "",
        body: "",
      };
    },
    canClickBtn() {
      let myInput = document.querySelector(".input-modal");

      if(myInput.value.length >= 1) return this.createPost()
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
  margin-top: 5px;
}
.input-modal {
  min-width: auto;
}
.file {
  color: #fff;
}
</style>
