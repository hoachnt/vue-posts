<template>
  <form @submit.prevent>
    <h2 class="text-white text-4xl">Create Post</h2>
    <my-input
      v-focus
      v-model:value="post.title"
      type="text"
      placeholder="Title"
      required
      minlength="1"
      class="input-modal"
    />
    <textarea
      name="text"
      id=""
      cols="30"
      rows="10"
      v-bind:value="post.body"
      @input="post.body = $event.target.value"
      placeholder="Description"
      required
      class="input-modal"
    ></textarea>
    <input
      type="file"
      id="file"
      class="
        block
        w-full
        text-sm text-slate-500
        file:mr-4
        file:py-2
        file:px-4
        file:rounded-full
        file:border-0
        file:text-sm
        file:font-semibold
        file:bg-violet-50
        file:text-sky-600
        hover:file:bg-blue-600 hover:file:text-white
      "
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
        image: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.file = document.getElementById("file");

      this.$emit("create", this.post, this.file);
      console.log(this.file);

      this.post = {
        title: "",
        image: "",
        body: "",
      };
    },
    canClickBtn() {
      let myInput = document.querySelector(".input-modal");

      if (myInput.value.length >= 1) return this.createPost();
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
#file {
  cursor: pointer;
  margin-top: 5px;
}
textarea {
  background: #000;
  color: #fff;
  padding: 10px;
  min-width: 100%;
  min-height: 54px;
  border: 2px solid rgb(41, 151, 255);
  margin: 5px 0;
  transition: 0.3s ease-in-out;
  border-radius: 10px;
}
</style>
