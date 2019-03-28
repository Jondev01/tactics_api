<template>
  <div class="BoardContainer">
    <Board :position="position"/>
  </div>
</template>

<script>
import * as util from '../../util/pieces.js';
import Board from '../Board/Board.vue';

export default {
  name: 'BoardContainer',
  data() {
    return {
        position: util.fenToArray()
    }
  },

  components: {
    Board
  },
  methods: {

  },
  created() {
      /* eslint-disable no-console */
      console.log(util.fenToArray());
      /* eslint-enable no-console */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
