<template>
  <div class="BoardContainer">
          
  </div>
</template>

<script>
import Board from './Board/Board.vue';

export default {
  name: 'Board',
  data() {
    return {
        position: []
    }
  },

  components: {
      Board
  },
  methods: {

  },

  created() {
      return
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
