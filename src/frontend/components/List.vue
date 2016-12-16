<template>
  <div class="list x">
    <div v-for="item in items" class="user">
      <span class="main">
      {{ item.displayName }}
      </span>
      <a href="#" @click="getUser(item.id)">details</a>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    items: 'list'
  }),
  methods: mapActions([
    'getUser'
  ]),
  created () {
    this.$store.dispatch('getList')
  }
}
</script>

<style scoped>
.user{
  height: 20px;
  background-color: #eee;
}
.user, .list {
  display:block;
  padding: 10px;
  margin: 10px;
}
</style>
