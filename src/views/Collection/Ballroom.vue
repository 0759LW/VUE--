<template>
  <div class="container">
    <div class="collcont">
      <div class="concont" @click="backme">
        <i class="cubeic-back"></i>
      </div>

      <div class="collection">体育馆收藏</div>
    </div>

    <div class="pubcontainer" id="pubId">
      <div class="pub" v-for="(item, index) in publish" :key="index">
        <div class="up" data-index="index" @click="clickpub(index)">
          <img :src="require('../../assets/activity/' + item.img)" alt="" />
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


  </div>
</template>

<script>
export default {
  data() {
    return {
      publish: [],
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

    this.publish.push(this.$store.state.publish[2]);
    
    this.publish.push(this.$store.state.publish[4]);
    
  

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