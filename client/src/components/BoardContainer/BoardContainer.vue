<template>
  <div class="BoardContainer">
          
  </div>
</template>

<script>
import * as util from '../../util/pieces.js';

export default {
  name: 'Board',
  data() {
    return {
        position: []
    }
  },

  components: {
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
