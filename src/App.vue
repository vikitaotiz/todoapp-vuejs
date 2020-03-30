<template>
  <div id="app">
    <NavBar/>
    <TodoList/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
