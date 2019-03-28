<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <BoardContainer />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import BoardContainer from './components/BoardContainer/BoardContainer.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    BoardContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
