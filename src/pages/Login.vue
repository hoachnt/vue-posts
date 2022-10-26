<template>
  <div class="flex justify-center items-center min-h-screen container">
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
      <p @click="$router.push('/register')" class="text-right cursor-pointer mt-2 underline underline-offset-8 hover:underline-offset-4 duration-300 hover:text-blue-400 ease-out">Register</p>
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
      try {
        let response = await axios.post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/auth/login", {
          email: data.email,
          password: data.password,
        });

        await localStorage.setItem("userData", response.config.data);
        await localStorage.setItem("token", response.data.data.access_token);
        await localStorage.setItem("refresh_token", response.data.data.refresh_token)
        await router.push("/");
      } catch (error) {
        alert("Wrong email or password")
      }
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