<template>
  <div id="app">
    <div class="container">
      <Navbar/>
      <br/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Navbar from "./components/Navbar.vue"

  export default {
    name: 'my-rdv',
    components: {
      Navbar,
    }
  }
</script>

<style>
  /* CSS */
</style>
