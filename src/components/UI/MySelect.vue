<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Select</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped>
.select {
  background: #000;
  color: #fff;
  padding: 13px;
  min-width: 20%;
  border: 2px solid rgb(41, 151, 255);
  border-radius: 10px;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
}
select > option {
  text-align: left;
  background: #000;
  border-radius: 20px;
}
</style>
