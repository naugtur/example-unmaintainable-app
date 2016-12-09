<template>
  <div class="error">
      {{ error }}
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters({
    error: 'error'
  })
}
</script>
