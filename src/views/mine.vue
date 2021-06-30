<template>
    <div> 
      <div class="headerimg">
         <img :src="require('../assets/coach/mine.jpg')" alt="" />
      </div>
         <!-- <img class="headerimg" src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png" alt=""> -->
        <ul>
            <li v-for="item in minearry" class="mineitem" @click="itemclick(item)" :key="item.label">
                <span class="minetitle">{{item.label}}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            minearry:[
                {label:'体育馆收藏'},
                {label:'活动发布'},
                {label:'教练预约'},
                {label:'退出',type:'exit'},
            ]
        }
    },
    methods:{
        itemclick(item){
            if(item.type=='exit'){
                this.$store.commit('settoken','')
                localStorage.removeItem('token')
                this.$router.push({path:'/login'})
            }

            else if(item.label=='活动发布'){
               this.$router.push({path:'/botnav/myactivity'})

            }
                 else if(item.label=='体育馆收藏'){
               this.$router.push({path:'/botnav/Ballroom'})

            }
               else if(item.label=='教练预约'){
               this.$router.push({path:'/botnav/coach'})

            }


        }
    }
}
</script>

<style lang="less" scoped>

.headerimg{
height: 150px;
width: 50%;
//border: 1px solid green;
margin: 0 auto;
margin-bottom: 10px;
}

.headerimg img{
  height: 100%;
  width: 100%;
  border-radius: 190px;

}
.mineitem{
  font-size: 14px;
  text-align: left;
  height: 50px;
  line-height: 50px;
  padding-left: 5%;
  border-bottom: 1px solid #eee;

}

.mineitem .minetitle{
  display: inline-block;
  width: 90%;
}



</style>