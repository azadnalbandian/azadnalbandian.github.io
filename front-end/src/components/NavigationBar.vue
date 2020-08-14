
<template>
  <div class="topbar">
    <Burger></Burger>
    <marquee><h1>i don't give a <em>fuck</em></h1></marquee>
</div>
</template>

<script>
import Burger from './Navigation/Burger'

export default {
  components: {
    'Burger': Burger
  }
}
</script>

<style scoped>
  .topbar {
    position: fixed;
    display: flex;
    top: 0;
    width: 100%;
    height: 50px;
    z-index: 999;
  }

  marquee {
    float: right;
  }

  h1 {
    line-height: 20px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>
