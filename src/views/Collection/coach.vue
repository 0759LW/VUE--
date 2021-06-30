<template>
  <div class="container">
    <div class="collcont">
      <div class="concont" @click="backme">
        <i class="cubeic-back"></i>
      </div>

      <div class="collection">教练预约</div>
    </div>
    <div class="coachlist">
      <div class="coach" v-for="(item,index) in order" :key="index">
     <div class="left">
         <img :src="require('../../assets/coach/coach.jpg')" alt="" />
     </div>
     <div class="right">
         <div class="txt first"><span>项目:</span>{{item.sports}}</div>
         <div class="txt second"><span>时间:</span>{{item.time}}</div>
         <div class="txt third"><span>手机:</span>{{item.phone}}</div>
     </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: [],
    };
  },
  methods: {
    backme() {
      this.$router.push({
        path: "/botnav/mine",
      });
    },
  },
  mounted() {
    this.order = this.$store.state.order;
    console.log(this.order);
  },
};
</script>

<style lang="less" scoped>
.container {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  margin-bottom: 53px;
  flex-direction: column;
}
.container .concont {
  padding-left: 10px;
  width: 30px;
  height: 20px;
  // border: 1px solid black;
}

.container .collcont {
  margin-top: 5px;
  display: flex;
}

.container .collection {
  margin: 0 auto;
  width: 100px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 16px;
  border-radius: 100px;
  //border: 1px solid bisque;

  background: bisque;
  color: gray;
}

//教练
.coachlist{
    padding-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.coachlist .coach{
 width: 100%;
 //border: 1px solid black;
 height: 100px;
 display: flex;
 margin-bottom: 10px;
}

.coachlist .coach .left{
    flex: 1;
 //   border: 1px solid gold;
}

.coachlist .coach .left img{
  padding-left: 5px;
    width: 100%;
    height: 100%;
}

.coachlist .coach .right{

    flex:2;
  // border: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10px;
}

.coachlist .coach .right .txt{
     border-bottom: 1px solid rgba(177, 174, 174, 0.3);
}

</style>