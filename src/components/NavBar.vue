<template>
  <div>
      <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#">Vue and Bootstrap Todo App</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
