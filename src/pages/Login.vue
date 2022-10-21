<template>
  <div class="flex justify-center items-center min-h-screen">
    <form
      class="flex flex-col bg-gray-900 p-5 rounded-xl w-96"
      @submit.prevent="submit"
    >
      <h1 class="text-4xl mb-5">Log in</h1>
      <my-input
        v-model:value="data.email"
        type="email"
        placeholder="Email"
        required
      />
      <my-input
        v-model:value="data.password"
        type="password"
        placeholder="Password"
        required
      />
      <my-button
        type="submit"
        class="
          btn-register
          border-solid border-blue-700 border-2
          text-white
          mt-1
        "
        >Continue</my-button
      >
    </form>
  </div>
</template>
<script>
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "Login",
  setup() {
    const data = reactive({
      email: "",
      password: "",
    });
    const router = useRouter();

    const submit = async () => {
      let response = await axios.post("http://91.105.198.56/users", {
        email: data.email,
        password: data.password,
      });

      // await router.push("/");
    };

    return {
      data,
      submit,
    };
  },
};
</script>
<style scoped>
.btn-register {
  min-width: 100%;
}
.btn-register:hover {
  min-width: 100%;
}
</style>