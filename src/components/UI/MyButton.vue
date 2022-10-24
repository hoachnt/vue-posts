<template>
  <button class="btn waves-effect waves-light">
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
  background: rgb(26,92,255);
  border: none;
  transition: 0.3s;
  cursor: pointer;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  align-self: flex-end;
  min-height: 54px;
}
.btn:hover {
  box-shadow: rgba(26, 92, 255, 0.5) 0px 20px 20px -10px;
  color: white;
  min-width: 180px;
}
</style>