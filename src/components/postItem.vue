<template>
  <div class="post">
    <div>
      <div class="post-main"><strong>Title: </strong>{{ post.title }}</div>
      <div class="post-main"><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <div class="buttons">
      <my-button class="btn-delete-post" @click="$emit('remove', post)">Remove</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  margin: 10px;
  padding: 15px;
  border: 2px solid #42b883;
  display: flex;
  flex-direction: column;
  z-index: 1;
}
.post-main {
  min-width: 100%;
}
.buttons {
  position: relative;
  min-height: 43px;
}
.btn-delete-post {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  padding: 15px 20px !important;
  border: 2px solid #c21e56 !important;
  color: #fff !important;
  background: #fff !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  color: #c21e56 !important;
  transition: 0.3s ease-in-out !important;
  border-radius: 10px !important;
}

.btn-delete-post:hover {
  background: #c21e56 !important;
  color: #fff !important;
}
</style>