<template>
  <div>
    <header-top :title="title"></header-top>
  </div>
</template>

<script>
import HeaderTop from "@/components/headerTop/HeaderTop";
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  components: {
    HeaderTop
},
  data(){
    return {
      title:'个人'
    }
}
}
</script>

<style>

</style>