<template>
  <div class="topbar row justify-content-center">
    <Burger></Burger>
    <h1 class="col-1">{{ currentRouteName }}</h1>
  </div>
</template>

<script>
import Burger from './Navigation/Burger'

export default {
  components: {
    'Burger': Burger
  },
  computed: {
    currentRouteName () {
      return this.$route.name
    }
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
    background-color: #AEADF0;
    border-bottom-width: 1px;
    border-bottom-color: grey;
    border-bottom-style: solid;
  }

  h1 {
    vertical-align: center;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>
