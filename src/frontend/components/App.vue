<template>
  <div id="app">
    <error></error>
    <list></list>
    <hr>
    <user></user>
  </div>
</template>

<script>
import List from './List.vue'
import User from './User.vue'
import Error from './Error.vue'

export default {
  components: { List, Error, User }
}
</script>

<style scoped>
#app{
  margin: 0 auto;
  width: 50%;
  border: 1px solid #555;
  padding: 5px;
}


</style>
