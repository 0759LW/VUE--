<template>
  <div>
    <div class="container">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler"
        :showSlider="true"
        class="topper"
      >
      </cube-tab-bar>

      <div class="subcontainer">
        <div class="pubcontainer" id="pubId">
          <div class="pub" v-for="(item, index) in publish" :key="index">
            <div class="up" data-index="index" @click="clickpub(index)">
              <img :src="require('../assets/activity/' + item.img)" alt="" />
            </div>
            <div class="down">
              <div class="first">{{ item.place }}</div>
              <div class="second">
                <span>{{ item.far }}</span>
                <span>{{ item.time }}</span>

                <span class="free">{{ item.charge }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="activity" id="activity">
          <div
            class="com"
            v-for="(item, index) in activity"
            :key="index"
            @click="clickact(index)"
          >
            <div class="left">
              <img :src="require('../assets/activity/' + item.img)" alt="" />
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLabelDefault: "体育馆",
      tabs: [
        {
          label: "体育馆",
          index: 1,
        },

        {
          label: "活动",
        },
      ],
      activity: [
   
      ],

      publish: [
      
      ],
    };
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      // console.log(label);
    },
    changeHandler(label) {
      //console.log(label);
      // if you clicked different tab, this methods can be emitted
      let activityId = document.getElementById("activity");

      let pubId = document.getElementById("pubId");
      if (label == "活动") {
        activityId.style.visibility = "visible";
        activityId.style.display = "block";

        pubId.style.visibility = "hidden";
        pubId.style.display = "none";
      } else if (label == "体育馆") {
        activityId.style.visibility = "hidden";
        activityId.style.display = "none";

        pubId.style.visibility = "visible";
        pubId.style.display = "block";
      }
    },
    clickpub(index) {
      //console.log(event)
      //console.log(index)

      this.$router.push({
        name: "subpub",

        params: {
          index: index,
        },
      });

      //console.log()
    },

    clickact(index) {
      console.log(this.activity[index]);

      if (
        this.activity[index].currentpeople == this.activity[index].fullpeople
      ) {
        const toast = this.$createToast({
          txt: "人数已满",
          type: "error",
          time: 1000,
        });
        toast.show();
      } else if (
        this.activity[index].currentpeople < this.activity[index].fullpeople
      ) {
        this.activity[index].currentpeople++;
        const toast = this.$createToast({
          txt: "加入成功",
          type: "correct",
          time: 1000,
        });
        toast.show();
      }
    },
  },

  mounted() {
    let activityId = document.getElementById("activity");
    //console.log(activityId);
    activityId.style.display = "none";

    //console.log(this.$store.state.publish);
    this.publish = this.$store.state.publish;

    this.activity = this.$store.state.activity;
  },
};
</script>

<style scoped lang="less">
.container {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  margin-bottom: 53px;
}
.container .subcontainer {
  flex: 1;
  padding-top: 30px;
  margin: 0 10px;
  display: flex;
}

.container .topper {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  width: 100%;
  background: white;
}

// .container .firsttopper{
//   //   position: fixed;
//   // top: 0px;
//   // left: 0px;
// }
// .subcontainer {
//   //height: 100%;
//   //width: 100%;
//   padding-top: 30px;
//   margin: 0 10px;
// }

// .container .subcontainer .pubcontainer{
//   margin-bottom: 53px;
// }
.container .conact {
  width: 100vw;
  height: 100vh;
  padding-right: 10px;
}

.container .activity {
  visibility: hidden;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding-right: 10px;
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
  padding: 0 4px;
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
}
//体育馆
.container .pub {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  // border: 2px solid black;
}

.container .pub .up {
  flex: 2;
  height: 120px;
}

.container .pub .up img {
  width: 100%;
  height: 100%;
}
.container .pub .down {
  padding: 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container .pub .down .first {
  font-size: 15px;
}

.container .pub .down .second {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}

.container .pub .down .second {
  color: rgb(174, 185, 183);
}

.container .pub .down .second .free {
  color: black;
}
</style>