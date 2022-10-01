<template>
  <div class="about">
    <h1>{{this.hotel.name}}</h1>
    <img style="max-width: 500px;" :src="`http://localhost/assets/${this.hotel.logo}`" alt="">
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        hotel: {
          name: '',
          logo: '',
          adress: '',
        }
      }
    },
    methods: {
      async fetchHotel() {
        try {
          const response = await axios.get('https://localhost/items/hotel')
          
          this.hotel = response.data.data[0]
        } catch (error) {
          
        }
      }
    },
    mounted() {
      this.fetchHotel()
    },
  }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
