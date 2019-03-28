<template>
  <div :class="['Square', type]">
    <div v-if="piece === 0" >
       
    </div>
    <div v-if="piece === 'r'" >
      <img src="../../../assets/BR.png" alt="" />
    </div>
    <div v-else-if="piece === 'p'" >
      <img src="../../../assets/BP.png" alt="" />
    </div>
    <div v-else-if="piece === 'q'" >
      <img src="../../../assets/BQ.png" alt="" />
    </div>
    <div v-else-if="piece === 'b'" >
      <img src="../../../assets/BB.png" alt="" />
    </div>
    <div v-else-if="piece === 'n'" >
      <img src="../../../assets/BN.png" alt="" />
    </div>
    <div v-else-if="piece === 'k'" >
      <img src="../../../assets/BK.png" alt="" />
    </div>
    <div v-else-if="piece === 'R'">
      <img src="../../../assets/WR.png" alt="" />
    </div>
    <div v-else-if="piece === 'P'" >
      <img src="../../../assets/WP.png" alt="" />
    </div>
    <div v-else-if="piece === 'Q'" >
      <img src="../../../assets/WQ.png" alt="" />
    </div>
    <div v-else-if="piece === 'B'" >
      <img src="../../../assets/WB.png" alt="" />
    </div>
    <div v-else-if="piece === 'N'" >
      <img src="../../../assets/WN.png" alt="" />
    </div>
    <div v-else-if="piece === 'K'" >
      <img src="../../../assets/WK.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Square',
  props: [
    'type',
    'piece'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Square {
    position: relative;
    display: inline-block;
    margin: 0;
    padding: 0;
    border: none;
    width: 12.5%;
    height: 12.5%;
  }
  .Square div {
    margin: 0;
    padding: 0;
    display: inline-block;
  }
  .Square img {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 80%;
    width: auto;
  }
  .dark {
    background: linear-gradient(45deg, rgb(70, 52, 3), rgb(59, 47, 8));
  }
  .light {
    background: linear-gradient(-45deg, rgb(236, 172, 52), rgb(236, 178, 70));
  }
</style>
