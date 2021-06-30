<template>
  <div>
        <transition :name="transitionName">
            <router-view class="Router"></router-view>
        </transition>

   
    <cube-tab-bar

            v-model="selectedLabelDefault"
            :data="tabs"
            @click="clickHandler"
            @change="changeHandler"
            class="botnav">

        </cube-tab-bar>
       
    
  </div>
</template>

<script>
export default {
data() {
    return {
        transitionName:'slide-right',
           selectedLabelDefault: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '发布',
        icon: 'iconfont icon-fabu'
      }, {
        label: '教练预约',
        icon: 'iconfont icon-jiaoliandenglu'
      },  {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
},
methods: {
     clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
        changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      switch(label){
          case '首页':
          this.$router.push('/botnav/index');
          break;
          case '发布':
          this.$router.push({path:'/botnav/publish'});
          break;
          case '教练预约':
          this.$router.push({path:'/botnav/order'});
          break;
          case '我的':
          this.$router.push({path:'/botnav/mine'});
          break;
      }
    }
},
  created(){
    switch(this.$route.path){
      case '/botnav/index':
      this.selectedLabelDefault='首页';
      break;
      case '/botnav/publish':
      this.selectedLabelDefault='发布';
      break;
      case '/botnav/order':
      this.selectedLabelDefault='教练预约';
      break;
      
      case '/botnav/mine':
      this.selectedLabelDefault='我的';
      break;
    }
  },
  updated(){
    switch(this.$route.path){
      case '/botnav/index':
      this.selectedLabelDefault='首页';
      break;
      case '/botnav/publish':
      this.selectedLabelDefault='发布';
      break;
      
      case '/botnav/order':
      this.selectedLabelDefault='教练预约';
      break;
      
      case '/botnav/mine':
      this.selectedLabelDefault='我的';
      break;

       
    }
  },
}
</script>

<style lang="stylus">
   
   

    
 
      .botnav
        position  fixed
        width 100%
        bottom  0px
        left 0px
        z-index 1000
       
        height 53px
        background #fff
        .cube-tab div
            font-size  16px
            padding-top  3px
        i 
            font-size 20px
    .Router
        position absolute
        width  100%
        transition all 0.8s ease
    .silde-left-enter,.slide-right-leave-active
        opacity 0
        -webkit-transform  translate(100%,0)
        transform  translate(100%,0)
    .slide-left-leave-active,.slide-right-enter
        opacity 0
        -webkit-transform  translate(-100%,0)
        transform  translate(-100%,0)
    
      
</style>