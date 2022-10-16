<template>
  <input
    :value="value"
    @input="updateInput"
    type="text"
    name="text" 
    class="input"
  />
</template>
<script>
export default {
  name: "my-input",
  props: {
    value: [Number, String],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>
<style scoped>
.input {
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
