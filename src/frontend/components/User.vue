<template>
  <div  v-show="!!user.username" class="user">
    <ul>
      <li class="name">{{ user.username }}</li>
      <li>name: {{ user.displayName }}</li>
      <li>twitter: {{ user.twitter }}</li>
      <li>memberFor: {{ user.memberFor }}</li>
    </ul>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    user: 'user'
  })
}
</script>


<style scoped>
.name {
  font-weight: bold;
}
</style>
