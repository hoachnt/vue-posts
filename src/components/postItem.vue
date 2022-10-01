<template>
  <transition>
    <div class="post-wrapper">
      <div class="post">
        <div>
          <div class="post-main title">{{ post.title }}</div>
          <div class="post-main">{{ post.body }}</div>
        </div>
        <div class="buttons">
          <my-button
            class="btn-read_more-post"
            @click="$router.push(`/posts/${post.id}`)"
            >Read More</my-button
          >
          <my-button class="btn-delete-post" @click="$emit('remove', post)"
            >Remove</my-button
          >
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    copyPost() {
      return this.post;
    },
  },
};
</script>

<style scoped>
.post-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.post {
  padding: 15px;
  border: 2px solid #42b883;
  display: flex;
  flex-direction: column;
  z-index: 1;
  color: var(--main-text-color);
  margin: 10px;
}
.post-main {
  min-width: 100%;
}

.title {
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: 600;
}

.buttons {
  position: relative;
  min-height: 53px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.buttons > button {
  margin: 0 5px;
}
.btn-delete-post {
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