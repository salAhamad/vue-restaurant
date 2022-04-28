<template>
  <router-view></router-view>
  <!-- <HomePage /> -->
  <!-- <Signup /> -->
</template>

<script>
// import HomePage from './components/HomePage.vue'
// import Signup from './components/Signup.vue'

export default {
  name: 'App',
  components: {
    // HomePage,
    // Signup
  }
}
</script>

<style>
  /* :root {} */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  body {
    background-color: var(--bs-gray-200);
  }

</style>
