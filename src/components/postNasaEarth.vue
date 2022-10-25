<template>
  <div>
    <blockquote
      class="text-4xl font-semibold italic text-left text-slate-900 mb-10 mt-20"
    >
      <span class="header-text">
        <h1 class="relative text-white">News about Earth from NASA</h1>
      </span>
    </blockquote>
    <div class="post min-w-full">
      <div>
        <div class="creator flex justify-between opacity-50">
          <span>{{ postsEarth.copyright }}</span>
          <p>{{ postsEarth.date }}</p>
        </div>
        <div class="post-main title mb-8">{{ postsEarth.title }}</div>
        <div class="img-wrapper">
          <img :src="`${postsEarth.hdurl}`" alt="" class="img" />
        </div>
        <p
          class="
            post-main
            first-line:uppercase first-line:tracking-widest
            first-letter:text-7xl
            first-letter:font-bold
            first-letter:text-white
            first-letter:mr-3
            first-letter:float-left
            selection:bg-sky-300 selection:text-sky-900
          "
        >
          {{ postsEarth.explanation }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      postsEarth: [],
      api: "https://api.nasa.gov/planetary/apod?api_key=3wWET2KESGYV3qYhDPGZB6pwaqyhLWdAzZt8ZzV3",
    };
  },
  methods: {
    async fetchEarth(api) {
      let response = await axios.get(api);

      this.postsEarth = response.data;
    },
  },
  mounted() {
    this.fetchEarth(this.api);
  },
};
</script>
<style scoped>
.post {
  margin: 10px 0;
  margin-bottom: 80px !important;
  border: 1px solid #3e3c3c;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  color: var(--main-text-color);
  max-width: 900px;
  background: var(--white-color);
}
.post-main {
  min-width: 100%;
}

.title {
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: 600;
}
.return {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.return:hover {
  color: rgb(26, 92, 255);
  box-shadow: rgba(26, 92, 255, 0.5) 0px 20px 20px -10px;
  transition: 0.2s ease-in-out;
  transform: rotate(-360deg);
}
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
.post-main {
  min-width: 100%;
}

.title {
  font-size: 25px;
  font-weight: 600;
}
</style>