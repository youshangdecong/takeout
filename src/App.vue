<template>
  <div id="app">
    <router-view/>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  import FooterNav from './components/footerNav/FooterNav'
  export default {
    components:{
      FooterNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
// 整个应用组件的样式
 .app
   width 100%
   height 100%
   background f5f5f5
</style>
