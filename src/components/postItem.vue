<template>
  <div class="post-wrapper">
    <transition mode="out-in">
      <div class="post min-w-full">
        <div>
          <div class="post-main title mb-8">{{ post.title }}</div>
          <div class="img-wrapper">
            <img
              :src="`https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/assets/${post.image}`"
              alt=""
              class="img"
            />
          </div>
          <blockquote
            class="
              post-main
              first-line:uppercase first-line:tracking-widest
              first-letter:text-7xl
              first-letter:font-bold
              first-letter:text-white
              first-letter:mr-3
              first-letter:float-left
              tracking-widest
              selection:bg-sky-300 selection:text-sky-900
            "
          >
            {{ post.body }}
          </blockquote>
        </div>
        <div class="buttons">
          <my-button
            class="btn-read_more-post post-button"
            @click="$router.push(`/posts/${post.id}`)"
            >Read More</my-button
          >
          <my-button
            class="btn-delete-post post-button"
            @click="$emit('remove', post)"
            >Remove</my-button
          >
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      maxSymbol: 300,
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    truncate(post) {
      if (post.body != null) {
        post.body =
          post.body.length > this.maxSymbol
            ? `${post.body.slice(0, this.maxSymbol - 1)}...`
            : post.body;
      }
    },
  },
  mounted() {
    this.truncate(this.post);
  },
};
</script>

<style scoped>
.img-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.img {
  max-width: 100%;
  border-radius: 10px;
}
.post-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.post {
  padding: 15px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  color: var(--main-text-color);
  margin: 10px 0;
  border: 1px solid #3e3c3c;
  user-select: none;
  border-radius: 10px;
  background: var(--white-color);
}
.post:hover .buttons {
  max-height: 53px;
  opacity: 1;
  transform: scale(1);
}
.post:hover .buttons > button {
  display: block;
}
.post-main {
  min-width: 100%;
}

.title {
  font-size: 25px;
  font-weight: 600;
}

.buttons {
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  transition: 0.3s ease-in-out;
  max-height: 0px;
  transform: scale(0);
}
.buttons > .post-button {
  margin: 0 5px;
  flex: 1;
  transition: 0.3 ease-in-out;
}
.buttons > .post-button:hover {
  flex: 2;
}
.btn-delete-post {
  padding: 15px 20px !important;
  color: #fff !important;
  background: #c21e56 !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  transition: 0.3s ease-in-out !important;
  border-radius: 10px !important;
}
.btn-delete-post:hover {
  box-shadow: 0 15px 20px #740127;
  background: #df1659 !important;
  color: #fff !important;
}
</style>
