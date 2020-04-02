<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>-->
  </div>
</template>

<script>

export default {
  data() {
    return { }
  },

  // Fetches posts when the component is created.
  created() {
    this.axios.get(`http://localhost:5000/`)
            .then(response => {
              // JSON responses are automatically parsed.
              console.log(response)
            })
            .catch(e => {
              console.log(e)
            })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
