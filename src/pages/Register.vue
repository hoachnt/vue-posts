<template>
  <div class="flex justify-center items-center min-h-screen">
    <form class="flex flex-col bg-gray-900 p-5 rounded-xl w-96" @submit.prevent="submit">
      <h1 class="text-4xl mb-5">Sign in</h1>
      <my-input v-model:value="data.firstName" type="text" placeholder="First Name" required />
      <my-input v-model:value="data.lastName" type="text" placeholder="Last Name" required />
      <my-input v-model:value="data.email" type="email" placeholder="Email" required />
      <my-input v-model:value="data.password" type="password" placeholder="Password" required />
      <my-button type="submit" class="btn-register border-solid border-blue-700 border-2 text-white mt-1">Continue</my-button>
      <p @click="$router.push('/login')" class="text-right cursor-pointer mt-2 underline underline-offset-8 hover:underline-offset-4 hover:text-blue-400 ease-out duration-300">I have an account</p>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  name: "Register",
  setup() {
    const data = reactive({
      firstName: "",
      lastName: "",
      role: "4e967166-975d-4a12-8fd8-e3fdb9e5be54",
      email: "",
      password: "",
    });
    const router = useRouter();

    const submit = async () => {
      await axios.post("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/users", {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
        role: data.role,
      });
      await router.push("/login");
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