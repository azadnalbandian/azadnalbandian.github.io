<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition name="slide">
            <div v-if="isPanelOpen"
                 class="sidebar-panel row justify-content-left">
                <slot>
                    <ul class="sidebar-panel-nav col-12">
                        <li v-for="routes in links" v-bind:key="routes.id" class="sidebar-links">
                            <router-link :to="`${routes.page}`">
                                <i v-bind:class="routes.icon"></i>
                                {{ routes.text }}
                            </router-link>
                        </li>
                    </ul>
                </slot>
                <div class="footer row">
                    <ul class="footer-nav">
                        <li v-for="profile in profiles" v-bind:key="profile.id">
                            <a :href="`${profile.link}`" target="_blank">
                                <i v-bind:class="profile.icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import { store, mutations } from '../../store.js'

export default {
  methods: {
    closeSidebarPanel: mutations.toggleNav
  },
  computed: {
    isPanelOpen () {
      return store.isNavOpen
    }
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
          text: 'Projects',
          page: '/projects',
          icon: 'fas fa-project-diagram'
        },
        {
          id: 3,
          text: 'Blog',
          page: '/blog',
          icon: 'fas fa-blog'
        }
      ],
      profiles: [
        {
          id: 0,
          link: 'https://github.com/azadnalbandian',
          icon: 'footer-icon fab fa-github fa-3x'
        },
        {
          id: 1,
          link: 'https://www.linkedin.com/in/azad-nalbandian-057a4b149/',
          icon: 'footer-icon fab fa-linkedin fa-3x'
        }
      ]
    }
  }
}
</script>
<style>
    .slide-enter-active,
    .slide-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }

    .sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
        z-index: 997;
    }

    .sidebar-panel {
        overflow-y: auto;
        position: fixed;
        left: 0;
        top: 0;
        width: 200px;
        height: 100vh;
        z-index: 998;
        padding-top: 50px;
    }

    ul.sidebar-panel-nav {
        list-style-type: none;
    }

    ul.sidebar-panel-nav > li {
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }

    ul.sidebar-panel-nav > li > a {
        color: #fff;
    }

    ul.sidebar-panel-nav > li:hover {
        background-color: lightblue;
    }

    .footer {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
    }

    ul.footer-nav {
        list-style-type: none;
        width: 100%;
    }

    ul.footer-nav > li {
        display: inline;
    }

    .footer-icon {
        color: white;
    }

    .footer-icon:hover {
        color: lightblue;
    }
</style>
