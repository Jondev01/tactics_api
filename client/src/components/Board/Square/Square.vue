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
    background: linear-gradient(45deg, rgb(70, 52, 3), rgb(59, 47, 8));
  }
  .light {
    background: linear-gradient(-45deg, rgb(236, 172, 52), rgb(236, 178, 70));
  }
</style>
