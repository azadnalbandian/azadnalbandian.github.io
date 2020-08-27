<template class="row">
  <div class="col-12" id="app">
    <NavigationBar></NavigationBar>
    <Sidebar></Sidebar>
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
import Sidebar from './components/Navigation/Sidebar'

export default {
  name: 'App',
  components: {
    'NavigationBar': NavigationBar,
    'Sidebar': Sidebar
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 120px;
}

 .parent-box {
    margin: 20px 20px 20px 20px;
    display: flex;
}

h1 {
  color: white;
}

i {
  margin-right: 20px;
}
</style>
