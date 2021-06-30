<template>
  <div class="container">
    <div class="collcont">
      <div class="concont" @click="backme">
        <i class="cubeic-back"></i>
      </div>

      <div class="collection">活动发布</div>
    </div>

    <div class="activity" id="activity">
      <div class="com" v-for="(item, index) in activity" :key="index">
        <div class="left">
          <img :src="require('../../assets/activity/' + item.img)" alt="" />
        </div>

        <div class="right">
          <div class="first">{{ item.title }}</div>

          <div class="second">
            <span>
              <div class="count">
                {{ item.currentpeople }}/{{ item.fullpeople }}
              </div>
            </span>

            <span> {{ item.charge }}</span>
          </div>

          <div class="third">
            <span>{{ item.time }} </span>
            <span>{{ item.place }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activity: [],
    };
  },
 methods: {
   backme(){
     this.$router.push({
       path:'/botnav/mine'
     })
   }
 },
  mounted() {
    this.activity.push( this.$store.state.activity[1]);
     this.activity.push( this.$store.state.activity[4]);
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
.container .concont{
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

.container .activity {
  width: 100%;
  height: 100%;
  // border: 1px solid black;
  display: flex;
  flex-direction: column;
}

.container .activity .com {
  display: flex;
  width: 100%;
  height: 90px;
  padding: 10px;
  border-bottom: 1px solid rgba(151, 146, 146, 0.2);
  //box-shadow: 1px 1px 2px gray;
}

.container .activity .com .left {
  padding: 10px;

  flex: 1;
}

.container .activity .com .left img {
  width: 100px;
  height: auto;
}

.container .activity .com .right {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container .activity .com .right .first {
  font-size: 15px;
}

.container .activity .com .right .second {
  display: flex;
  padding: 0 15px 0 0;
  justify-content: space-between;
  font-size: 13px;
}

.container .activity .com .right .second .count {
  width: 50px;
  height: 20px;
  background: orange;
  text-align: center;
  line-height: 20px;
  border-radius: 10px;
  color: white;
}

.container .activity .com .right .third {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: rgb(128, 125, 125);
  padding-right: 16px;
}
</style>