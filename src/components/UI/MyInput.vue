<template>
  <input :value="value" @input="updateInput" type="text" class="input" />
</template>
<script>
export default {
  name: 'my-input',
  props: {
    value: [Number, String],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:value', event.target.value)
    }
  },
};
</script>
<style scoped>
.input {
  padding: 10px;
  min-width: 100%;
  border: 2px solid #42b883;
  margin: 5px 0;
  transition: 0.3s ease-in-out;
}
</style>
