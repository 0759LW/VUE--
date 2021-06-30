<template>
  <div>
    <div class="container">
      <div class="title">
        <div class="left" @click="clicktui">
          <i class="iconfont icon-huitui"></i>
        </div>

        <div class="text">体育馆详情</div>
      </div>
      <div class="second">
        <div class="up">
          <div class="img">
            <img :src="require('../assets/activity/' + publish.img)" alt="" />
          </div>
        </div>
        <div class="center">
          <div class="yuyue" @click="clickyu">预定</div>
        </div>
        <div class="down">
          <div class="place">
            <span class="font">位置 </span>
            <span>{{ publish.place }}</span>
          </div>
          <div class="time">
            <span class="font">时间</span>
            <span>{{ publish.time }}</span>
          </div>

          <div class="phone">
            <span class="font">电话</span>
            <cube-input
              v-model="phone"
              :type="type"
              :placeholder="placeholder"
            ></cube-input>
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
      type: "number",
      MyIndex: 1,
      placeholder: "请输入手机号",
      phone: "",
      publish: {},
    };
  },
  methods: {
    clickyu() {
      //   this.$router.push({
      //     name: "detail",

      //     params: {
      //       index: this.MyIndex,
      //     },
      //   });

      setTimeout(() => {
        const toast = this.$createToast({
          time: 1000,
          txt: "预约完成",
          mask: true,
        });

        toast.show();
      });
setTimeout(() => {
       this.$router.push({
        path: "/botnav/publish",
      });

}, 1500);
   


    },

    clicktui() {
      //this.$router.back();

      this.$router.push({
        path: "/botnav/publish",
      });
    },
  },
  created() {
    let currentId = this.$route.params.index;

    this.index = currentId;
    //    console.log(currentId)
    //    console.log(this.MyIndex ,'MyIndex');
    this.publish = this.$store.state.publish[currentId];

    // console.log(this.publish);
    this.MyIndex = currentId;
    //console.log( this.MyIndex,'MyIndex');

    // console.log( this.$route.path);
  },

  beforeDestroy() {
    this.$store.state.publish[this.MyIndex].phone = this.phone;
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  margin-bottom: 53px;
}
// .container {
//   overflow-x: hidden;
// }
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
.container .second {
  //border: 2px solid black;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
}

.container .second .up {
  width: 100%;
  flex: 2;
  // border: 2px solid green;
  display: flex;
}

.container .second .up .img {
  padding: 10px 15px 10px 10px;
}

.container .second .up img {
  width: 100%;
}

.container .second .center {
  width: 100%;
  flex: 1;
  //  border: 2px solid red;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-right: 20px;
}
.container .second .center .yuyue {
  width: 60px;
  height: 30px;
  line-height: 30px;
  text-align: center;

  margin: 10px;
  background: rgba(20, 194, 155, 100);
  border-radius: 30px;
  color: white;
}

.container .second .down {
  width: 100%;
  flex: 3;
  //border: 2px solid green;
  display: flex;
  flex-direction: column;
}

.container .second .down .font {
  color: rgb(146, 143, 143);
}

.container .second .down .place {
  margin: 0 10px;
  border-bottom: 1px solid rgba(177, 174, 174, 0.3);
  //border: 2px solid red;
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 16;
  padding: 0 10px;
  font-size: 18px;
}
.container .second .down .time {
  margin: 0 10px;
  border-bottom: 1px solid rgba(177, 174, 174, 0.3);
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 16;
  padding: 0 10px;
  font-size: 18px;
}
.container .second .down .phone {
  margin: 0 10px;
  border-bottom: 1px solid rgba(177, 174, 174, 0.3);
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 16;
  padding: 0 10px;
  font-size: 18px;
}
</style>