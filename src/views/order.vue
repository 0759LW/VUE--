<template>
  <div>
    <div class="container">
      <div class="title">
        <!-- <div class="iconf"></div> -->
        <div class="txt">教练预约</div>
      </div>

      <div class="img">
        <div class="subimg">
          <img :src="require('../assets/coach/coach.jpg')" alt="" />
        </div>

        <div class="yuyue">
          <div class="subyu" @click="showToastTime">预约</div>
        </div>
      </div>

      <div class="input">
        <div class="text first">
          <span class="left">运动分类</span>
          <div class="right" @click="showPicker">
            <span>{{ order.sports }}</span>
             <i class="cubeic-arrow"></i>
          </div>
        </div>
        <div class="text second">
          <span class="left">时间</span>
          <div class="right" @click="showTimePicker">
            <span>{{ order.time }}</span>
            <i class="cubeic-arrow"></i>
          </div>
        </div>
        <div class="text thid">
          <span class="left">电话</span>
          <div class="right">
            <cube-input v-model="order.phone" :placeholder="placeholder"></cube-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const column = [
  { text: "足球", value: "足球" },
  { text: "篮球", value: "篮球" },
  { text: "排球", value: "排球" },
  { text: "健身", value: "健身" },
  { text: "羽毛球", value: "羽毛球" },
  { text: "乒乓球", value: "乒乓球" },
  { text: "田径", value: "田径" },
  { text: "拳击", value: "拳击" },
];
export default {
  data() {
    return {
      placeholder: "请输入手机号",
    

     order:{
  sports: "点击此处",
      time: "点击此处",
      phone: "",
     }

    };
  },
  methods: {
    showPicker() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: "运动类别",
          data: [column],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle,
        });
      }
      this.picker.show();
    },

    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.order.sports = selectedVal.join(",");
    },
    cancelHandle() {
      this.$createToast({
        type: "correct",
        txt: "取消",
        time: 1000,
      }).show();
    },

    showTimePicker() {
     
      this.$createTimePicker({
        showNow: true,
        minuteStep: 5,
        delay: 15,
        onSelect: (selectedTime, selectedText, formatedTime) => {
       

          this.order.time = formatedTime;
        },
        onCancel: () => {
          this.$createToast({
            type: "correct",
            txt: "取消",
            time: 1000,
          }).show();
        },
      }).show();
    },
    showToastTime() {

     //this.$store.state.activity.push(this.order)
 this.$store.dispatch('addorder',this.order);

      const toast = this.$createToast({
        time: 1000,
        txt: "预约发布成功",
        type: 'correct'
      });

       toast.show()
       setTimeout(() => {
            this.$router.push({
        path: "/botnav/index",
      })
       }, 1500);
   
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
}

.container .title {
  width: 100%;
  height: 40px;
  display: block;
  line-height: 40px;
  text-align: center;
  margin: 0 10px;
  border-bottom: 1px solid rgba(151, 146, 146, 0.2);
}

.container .img {
  margin-top: 18px;
  width: 100%;
  height: 230px;
  //border:2px solid black;
  display: flex;
  flex-direction: column;
  //flex: 1;
}

.container .img img {
  flex: 1;
  width: 100%;
  height: 180px;
  flex: 3;
}

// .container .img .subimg{
//   padding: 20px;
// }

.container .img .yuyue {
  //border: 1px solid black;
  height: 40px;

  display: flex;
  padding-right: 20px;
  padding-top: 10px;
  justify-content: flex-end;
  flex: 1;
}

.container .img .yuyue .subyu {
  //border: 1px solid green;
  height: 100%;
  line-height: 40px;
  text-align: center;
  width: 60px;
  background: rgba(20, 194, 155, 100);
  color: white;
  border-radius: 20px;
}

.container .input {
  //flex: 1;
  //margin-top: 60px;
  margin-top: 30px;
  width: 100%;
  height: 300px;
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 5px;
}

.container .input .text {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(177, 174, 174, 0.3);
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.container .input .text .left {
  color: rgb(175, 171, 171);
}

.container .input .text .right {
  padding-top: 10px;
  width: 180px;
  height: 50px;
  //border: 1px solid red;
  line-height: 50px;
  text-align: right;

  padding-right: 10px;
}
</style>