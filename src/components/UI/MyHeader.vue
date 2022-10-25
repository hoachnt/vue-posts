<template>
  <div>
    <blockquote
        class="
          text-4xl
          font-semibold
          italic
          text-left text-slate-900
          mb-10
          mt-14
        "
      >
        <span class="header-text">
          <h1 class="relative text-white">{{header}}</h1>
        </span>
      </blockquote>
  </div>
</template>
<script>
export default {
  name: "my-header",
  props: {
    header: String,
  }
};
</script>
<style>
.header-text {
  background: rgba(255, 255, 255, 0.1);
  min-width: 100%;
  display: inline-block;
  padding: 20px;
  border-radius: 10px;
}
</style>