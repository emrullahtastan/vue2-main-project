<template>
  <div id="app">
    Vue3 Child Project
    <ul>
      <li>
        <TRButton title="Primary"/>
      </li>
    </ul>
  </div>
</template>

<script>
import TRButton from "@/components/TRButton.vue";

export default {
  name: 'App',
  components: {TRButton}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
