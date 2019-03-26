<template>
  <div :class="['Square', type]">
     a
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
  display: inline-block;
  margin: 0;
  padding: 0;
  border: none;
  width: 12.5%;
  height: 12.5%;
}
  .dark {
    background-color: black;
  }
  .light {
    background-color: #ccc;
  }
</style>
