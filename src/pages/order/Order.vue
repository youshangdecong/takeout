<template>
  <div>
    <header-top :title="title"></header-top>
  </div>
</template>

<script>
import HeaderTop from "@/components/headerTop/HeaderTop";
export default {
  components: {
    HeaderTop
},
  data(){
    return {
      title:'我的'
    }
}
}
</script>

<style>
</style>