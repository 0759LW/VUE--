<template>
  <div class="container">
      <div class="backgroup">
          <img src="../assets/index.png" alt="">

          <div class="button">
             
 <cube-button :outline="true" @click="clickme">登录</cube-button>
             
      
        <!-- <cube-button class="mybutton">注册</cube-button> -->
          </div>
      
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
    clickme:function(){
          const toast = this.$createToast({
        time: 2000,
        txt: '正在进入登陆页面'
      })
      toast.show()

     setTimeout(() => {
           this.$router.push('/Login')
     }, 1000);
    
    }

},


}
</script>

<style lang="less" scoped>

.container img{
    width: 100vw;
    height: 100vh;
}

.container .backgroup{
 position: relative;

}

.container .button{
    width: 100vw;
    height: 100px;
    position: absolute;
    bottom: 30%;
   
    
}
// .container .mybutton{
//     width: 100%;
//     height: 100%;
//     margin: 10px 20px;
// }


</style>

