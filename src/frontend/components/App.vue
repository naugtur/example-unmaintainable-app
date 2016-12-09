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
