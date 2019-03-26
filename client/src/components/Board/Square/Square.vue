<template>
  <div :class="['Square', type]">
  </div>
</template>

<script>
export default {
  name: 'Square',
  props: {
    type: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Square {
  width: 30px;
  height: 30px;
}
  .dark {
    background-color: black;
  }
  .light {
    background-color: white;
  }
</style>
