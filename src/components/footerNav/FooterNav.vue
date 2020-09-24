<template>
  <div class="tabbar">
    <div :class="{on:'/home'=== $route.path}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont icon-food"></i>
      </span>
      <span>外卖</span>
    </div>
    <div :class="{on:'/search'=== $route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </div>
     <div :class="{on:'/order'=== $route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>订单</span>
    </div>
    <div :class="{on:'/profile'=== $route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-user"></i>
      </span>
      <span>个人</span>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goTo(path){
      this.$router.replace(path)
    }
  }
};
</script>

<style>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 49px;
  border-top: 1px solid #ccc;
}
.tabbar > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 14px;
}
.tabbar > div span:first-child {
  margin-bottom: 4px;
}
.iconfont {
  font-size: 20px;
}
.on {
  background-color: pink;
}
</style>