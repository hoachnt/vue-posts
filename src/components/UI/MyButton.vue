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
  background: linear-gradient(90deg, #2EE59D, #00A86B);
  border: none;
  transition: 0.3s;
  cursor: pointer;
  color: rgb(0, 0, 0);
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  align-self: flex-end;
  min-height: 54px;
}
.btn:hover {
  background: linear-gradient(90deg, #2EE59D, #2EE59D);
  box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
  color: white;
  min-width: 180px;
}
</style>