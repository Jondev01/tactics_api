<template>
  <div class="Board">
          <Square v-for="(square, i) in squares" v-bind:key="i" :type="getType(i)" />
  </div>
</template>

<script>
import Square from './Square/Square.vue';

export default {
  name: 'Board',
  data: () => {
    return {
        squares: Array(64).fill(0)
    }
  },
  components: {
      Square
  },
  methods: {
      getType:  i => (Math.floor(i/8)+i%8)%2==0 ? 'light' : 'dark'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Board{
        width: 320px;
        height: 320px;
    }
</style>
