<template lang="">
  <div>
    <footer class="page-footer">
      <div class="footer-copyright h-12">
        <div class="container">
        © 2022 Copyright CNTT
        <a class="grey-text text-lighten-4 right underline underline-offset-8 hover:underline-offset-4 duration-300 ease-out" href="https://github.com/hoach-linux">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style>
.page-footer {
  background: rgb(41, 151, 255);
  position: fixed;
  left: 0;
  bottom: 0;
  min-width: 100%;
  padding-top: 0;
}
@media screen and (max-width: 785px) {
  .page-footer {
    bottom: 70px;
  }
}
</style>