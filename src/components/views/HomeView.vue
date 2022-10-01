<template>
  <div class="home">
    <input v-model="hotels.name" type="text" placeholder="name" />
    <input v-model="hotels.adress" type="text" placeholder="adress" />
    <input type="file" id="file" />
    <button @click="createHotel">Create</button>
    <div class="hotels" v-for="hotel in hotels">
      <h1>{{ hotel.name }}</h1>
      <img
        style="max-width: 500px"
        :src="`http://localhost/assets/${hotel.logo}`"
        alt=""
      />
      <p>{{ hotel.adress }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      hotels: {
        name: "",
        logo: "",
        adress: "",
      },
    };
  },
  methods: {
    async fetchHotel() {
      try {
        const response = await axios.get("https://localhost/items/hotel");

        this.hotels = response.data.data;
      } catch (error) {}
    },
    createHotel() {
      let file = document.getElementById("file");
      console.log(file);
      return axios.post("https://localhost/items/hotel", {
        name: hotel.name,
        logo: file,
        adress: hotel.adress,
      });
    },
  },
  mounted() {
    this.fetchHotel();
  },
};
</script>

