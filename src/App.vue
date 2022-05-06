<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {},
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
