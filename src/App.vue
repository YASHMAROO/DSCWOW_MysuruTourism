<template>
  <div id="app">
    <div v-show="loader" class="loader">
      <Preloader />
    </div>   
    <NavBar v-show="!loader"/>
    <router-view class="top" v-show="!loader" @hideloader="hideLoader"/>
    <Footer v-show="!loader"/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/PageFooter'
import Preloader from './components/Preloader'
// import $ from 'jquery'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    Preloader
  },
  data() {
    return {
      loader: true,
      loaderCount: 0
    }
  },
  watch : {
    // eslint-disable-next-line no-unused-vars
    $router (to, from) {
      this.loader = true
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    hideLoader (val) {
      this.loader = false
      document.getElementsByTagName('html')[0].style.overflow = 'auto'
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
    }
  } 
}
</script>

<style>
router-view{
  position: absolute;
}
</style>