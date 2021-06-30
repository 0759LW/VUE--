<template>
  <div>
    <div class="contaniner">
      <div class="subcontainer">
        <!-- 轮播图 -->
        <div class="myswiper">
          <cube-slide
            ref="slide"
            :data="items"
            @change="changePage"
            :auto-play="true"
          >
            <cube-slide-item v-for="(item, index) in items" :key="index">
              <img
                class="banner"
                :src="require('../assets/' + index + '.png')"
              />
            </cube-slide-item>
          </cube-slide>
        </div>

        <div class="sports">
          <div class="icontaniner">
            <div
              class="iconfontitem"
              v-for="(item, index) in iconimg"
              :key="index"
            >
              <div class="img">
                <i :class="'iconfont ' + item.img"></i>
              </div>
              <div class="label">
                <span>{{ item.label }} </span>
              </div>
            </div>
          </div>
        </div>

        <div class="center">
          <img src="../assets/center.jpg" alt="" />
        </div>
        <div class="actcontainer">
          <div class="activity">
            <div class="up">推荐活动</div>
            <div class="down">
              <!-- <img src="../assets/yue.jpg" alt="" /> -->
              <div class="img">
                <div class="imgitem first">
                  <div class="left">
                    <span class="title">红双喜俱乐部</span>
                    <span class="time">周五13:00-15:30</span>
                  </div>
                  <div class="right">
                    <div class="join" @click="joinme">
                      <span>加入约球</span>
                    </div>
                  </div>
                </div>
                <div class="imgitem second">
                  <div class="left">
                    <span class="title">红双喜俱乐部</span>
                    <span class="time">周五13:00-15:30</span>
                  </div>
                  <div class="right">
                    <div class="join" @click="joinme">
                      <span>加入约球</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="activity second">
            <div class="up second">近期对战</div>
            <div class="down second last" @click="joincurrent">
              <div class="mytime">4月26 周五13:00</div>
              <div class="pk">
                <div class="pkitem left"><img :src="require('../assets/college/3.png')" alt=""></div>
                <div class="pkitem center"><img :src="require('../assets/college/PK.png')" alt=""></div>
                <div class="pkitem right"><img :src="require('../assets/college/4.png')" alt=""></div>
              </div>
            </div>
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
      iconimg: [
        {
          img: "icon-pingpangqiu",
          label: "乒乓",
        },
        {
          img: "icon-zuqiu",
          label: "足球",
        },
        {
          img: "icon-Yoga",
          label: "瑜伽",
        },
        {
          img: "icon-yumaoqiu",
          label: "羽毛球",
        },
      ],

      items: [
         {
                url: '',
                image: ''
              },
              {
                url: '',
                image: ''
              },
              {
                url: '',
                image: ''
              },
              {
                url: '',
                image: ''
              },
              {
                url: '',
                image: ''
              }
      ], //轮播图数组
    };
  },
  methods: {
    changePage(current) {
      //  console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {},
    joinme() {
      this.$router.push({
        path: "/botnav/publish",
      });
    },
    joincurrent(){
        this.$router.push({
        path: "/botnav/publish",
      });
    }
  },
  async created() {
    try {
      //获取轮播图数据

      // const items = await this.$http.get("/api/banner");

      // //console.log(items);

      // this.items = items.data.data;
      //获取滚动分类数据
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style lang="less" scoped>
.contaniner {
  overflow-x: hidden;
  //margin-left: 10px;
  display: flex;
  flex-direction: column;
  padding: 0;
  //position: relative;
  //width: 100%;
  //height: 100%;
  //overflow: auto;
  margin-bottom: 53px;
}

// .contaniner .swipcontainer{
//   width: 100%;
//     display: flex;
//     flex: 1;
// }

// .contaniner .subcontainer{
//   width: 100%;
//   flex: 1;
//   padding-right: 20px;
// }

.contaniner .subcontainer {
  flex: 1;
  display: flex;
  flex-direction: column;
  // display: flex;
  // flex-direction: column;
}

.contaniner .myswiper {
  padding: 10px 10px 10px 10px;
}

.contaniner .banner {
  display: block;
  width: 100%;
  height: 150px;
}

.contaniner .swpier {
  //position: absolute;
  //top: 0px;
  //left: 0px;
  // width: 100vw;
  height: 150px;
  border-radius: 2px;
  //padding-right: 40px;
}

.contaniner .swpier img {
  width: 100vw;
  height: 100%;
}
//运动分类图标
.contaniner .sports {
  // position: absolute;
  // top: 160px;
  padding-top: 20px;
  width: 100vw;

  height: 60px;
}

.contaniner .center {
  display: flex;
  padding: 0 10px;
}

.contaniner .sports .icontaniner {
  width: 100%;
  height: 100%;
  display: flex;
}
.contaniner .sports .icontaniner .iconfontitem {
  flex: 1;
  justify-content: center;
  align-items: center;

  display: flex;
  flex-direction: column;
}
.contaniner .sports .icontaniner .iconfontitem .img {
  height: 40px;
  width: 40px;

  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}

.contaniner .sports .icontaniner .iconfontitem .img .iconfont {
  font-size: 30px;
}
.contaniner .sports .icontaniner .iconfontitem:nth-child(1) .img {
  background: rgb(0, 132, 255);
  opacity: 0.8;
  color: white;
}

.contaniner .sports .icontaniner .iconfontitem:nth-child(2) .img {
  background: rgb(255, 174, 0);
  opacity: 0.8;
  color: white;
}
.contaniner .sports .icontaniner .iconfontitem:nth-child(3) .img {
  background: rgb(119, 0, 255);
  opacity: 0.8;
  color: white;
}
.contaniner .sports .icontaniner .iconfontitem:nth-child(4) .img {
  background: rgb(76, 0, 255);
  opacity: 0.8;
  color: white;
}
.contaniner .sports .icontaniner .iconfontitem .label {
  color: rgba(90, 83, 83, 0.452);
}
// 中间
.contaniner .center {
  //padding-left: 5px;
  //position: absolute;
  //top: 250px;
  // width: 100%;
  height: 150px;
}

.contaniner .center img {
  width: 100vw;
  height: 150px;
}
//推荐活动
.contaniner .activity {
  //width: 100vw;
  height: 200px;
  display: flex;
  flex-direction: column;
  // position: absolute;
  //top: 390px;
}

.contaniner .activity .up {
  border-left: 5px solid rgb(10, 194, 93);
  height: 16px;
  margin-top: 10px;
  padding-left: 10px;
  // width: 100%;
  color: rgba(0, 0, 0, 0.829);
}

.contaniner .activity .down {
  display: flex;
  margin-top: 20px;

  //width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
   
}

.contaniner .activity  .last{
  box-shadow: 0 0 10px rgba(177, 184, 184, 0.5);
  margin: 10px  10px 0 10px;
  
}

.contaniner .activity .down .pk{
  width: 80%;
  height: 80%;
 // border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contaniner .activity .down .mytime{
  color:white;
  
 background: rgba(20, 194, 155, 100);
 width: 140px;
 height: 20px;
 border-radius: 20px;
 line-height: 20px;
 text-align: center;
}


.contaniner .activity .down .pk .left{
 // border: 1px solid green;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  //flex: 2;
}

.contaniner .activity .down .pk .left img{
  width: 100%;
  height: 100%;
}

.contaniner .activity .down .pk .center{

    //border: 1px solid green;
  width: 80px;
  height: 80px;
   //flex: 1;
}

.contaniner .activity .down .pk .right{

   // border: 1px solid green;
  width: 80px;
  height: 80px;
  border-radius: 80px;
   //flex: 2;
}

// .contaniner .activity .down .pk .pkitem{
//       border: 1px solid green;
//   width: 80px;
//   height: 80px;
// }

.contaniner .activity .down img {
  width: 100%;
  height: 100%;
}

.contaniner .activity .down .img {
  //border: 1px solid black;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.contaniner .activity .down .img .imgitem {
  //box-shadow:  0 1px 10px #888;
  box-shadow: 0 0 10px rgba(177, 184, 184, 0.5);
  flex: 1;
  //border: 1px solid green;
  margin: 0 20px;
  display: flex;
  margin-bottom: 10px;
}

// .contaniner .activity .down .img .second{

//   flex: 1;
//   border: 1px solid goldenrod;
//     margin: 0 20px;
// }

.contaniner .activity .down .img .imgitem .left {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
}



.contaniner .activity .down .img .imgitem .left .title {
  font-weight: bolder;
}

.contaniner .activity .down .img .imgitem .left .time {
  font-weight: 100;
  font-size: 14px;
  color: grey;
}

.contaniner .activity .down .img .imgitem .right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contaniner .activity .down .img .imgitem .right .join {
  border: 1px solid yellowgreen;
  width: 90px;
  height: 30px;
  border-radius: 30px;
  background: rgba(20, 194, 155, 100);
  color: white;
}

.contaniner .activity .down .img .imgitem .right .join {
  line-height: 30px;
  text-align: center;
}
</style>