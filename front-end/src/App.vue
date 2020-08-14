
<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <Sidebar>
      <img src="/static/34049696_10155655929778576_2324403723268259840_o.jpg">
      <p>AZAD NALBANDIAN</p>
      <hr>
      <ul class="sidebar-panel-nav">
        <li v-for="routes in links" v-bind:key="routes.id"><router-link :to="`${routes.page}`" class="sidebar-links"><i v-bind:class="routes.icon"></i>{{ routes.text }}</router-link></li>
      </ul>
      <p class="footer">i hate this</p>
    </Sidebar>
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
  },
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/',
          icon: 'fas fa-home'
        },
        {
          id: 1,
          text: 'About',
          page: '/About',
          icon: 'fas fa-address-card'
        },
        {
          id: 2,
          text: 'Contact',
          page: '/Contact',
          icon: 'fas fa-id-card'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

 ul.sidebar-panel-nav {
   list-style-type: none;
   margin-left: -30px;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }

 .parent-box {
    margin: 20px 20px 20px 20px;
    display: flex;
}

.box-content-left {
  width: 10%;
  height: 90vh;
  display: block;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 20px 20px 20px 20px;
}

.box-content-right {
    padding: 20px 20px 20px 20px;
    width: 90%;
    display: block;
    background-color: rgba(255, 255, 255, 0.2);
    height: 90vh;
    border-radius: 50px;
}

.sidebar-links {
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
}

.sidebar-links:hover {
  color: red;
}

.sidebar-links:active {
  background-color: grey;
}

img {
  height: 100px;
  border-radius: 180px;
  border-width: 1px;
  border-color: white;
  border-style: solid;
}

h1 {
  color: white;
}

i {
  margin-right: 20px;
}

.footer {
  position: fixed;
  bottom: 0;
}
</style>
