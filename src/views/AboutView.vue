<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ data }}
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return { data: {} };
  },
  async mounted() {
    // import.meta.env用來讀取環境變數
    const url = import.meta.env.VITE_PATH;
    const text = import.meta.env.VITE_TEXT;
    console.log('url', url); //會印出環境變數
    console.log('text', text); //會印出環境變數
    try {
      const res = await axios.get(url);
      console.log(res.data.results[0]);
      this.data = res.data.results[0];
    } catch (error) {
      console.log(error.response.data);
    }
  },
};
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
