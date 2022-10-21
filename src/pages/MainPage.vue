<template lang="">
  <div>
    <h1 class="text-4xl text-center">{{message}}</h1>
    <p class="text-center mt-5">Here you can see posts from other people</p>
  </div>
</template>
<script>
import { onMounted, ref } from "@vue/runtime-core";
import axios from "axios";
import { useRouter } from 'vue-router';
export default {
  name: "MainPage",
  setup() {
    const message = ref("Welcome !");
    const router = useRouter()

    onMounted(async () => {
      try {
        let response = await axios.get("https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response.data.data);
      } catch (error) {

        router.push("/register")
      }
    });

    return {
      message,
    };
  },
};
</script>
<style>
</style>
