<template>
  <div class="container">
    <div class="title">
        <div class="left" @click="clicktui">
          <i class="iconfont icon-huitui"></i>
        </div>

        <div class="text">体育馆详情</div>
      </div>
  </div>
</template>

<script>
export default {
 data() {
   return {
     
   }
 },
 methods: {
    clicktui() {
      this.$router.go(-1);
    },
 },
}
</script>

<style lang="less" scoped>
.container{
 display: flex;
 flex-direction: column;
}

.container .title {
  width: 100vw;
  height: 40px;
  //    border: 2px solid black;
  display: flex;
}

.container .title .left {
  flex: 1;
  width: 20px;
  height: 20px;
}

.container .title .iconfont {
  line-height: 40px;
  text-align: left;
  font-size: 22px;
}

.container .title .text {
  width: 100%;
  height: 100%;
  line-height: 40px;
  text-align: center;
  //  padding-left: 60px;
  font-weight: 500;
}

</style>