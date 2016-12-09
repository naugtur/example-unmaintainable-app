<template>
  <div class="list x">
    <div v-for="item in items" class="user">
      <span className="main">
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
