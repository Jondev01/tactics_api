<template>
  <div class="Board">
      <Square type="dark" />
  </div>
</template>

<script>
import Square from './Square/Square.vue';

export default {
  name: 'Board',
  data() {
    return {
        squares: Array(8).fill(0)
    }
  },
  components: {
      Square
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
