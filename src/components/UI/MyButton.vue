<template>
  <button class="btn">
      <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'my-button'
};
</script>

<style scoped>
.btn {
  min-width: 130px;
  padding: 15px;
  background: #fff;
  border: 2px solid #42b883;
  transition: 0.3s;
  cursor: pointer;
  color: #42b883;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  align-self: flex-end;
}
.btn:hover {
  background: #42b883;
  color: #fff;
}
</style>