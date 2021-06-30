import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    publish:[
      {
        img: "pp.png",
        place: "肇庆大道中88号 乒乓球馆",
        far: "1.3km",
        time: "周末2、4、6下午15:00",
        charge: "免费",
        phone:'',
      },
      {
        img: "1.jpg",
        place: "端州区西江北路11号 肇庆体育中心",
        far: "12.3km",
        time: "周末4、6下午15:00",
        charge: "免费",
        phone:'',
      },
      {
        img: "2.jpg",
        place: "肇庆新区体育中心",
        far: "23.6km",
        time: "周末2、4、6下午15:00",
        charge: "免费",
        phone:'',
      },
      {
        img: "3.jpg",
        place: "肇庆大道动78号 田径场",
        far: "10.3km",
        time: "周末2、4、6下午15:00",
        charge: "免费",
        phone:'',
      },
      {
        img: "4.jpg",
        place: "广宁体育中心",
        far: "40.3km",
        time: "周末2、4、6下午15:00",
        charge: "免费",
        phone:'',
      },
      {
        img: "5.jpg",
        place: "端州体育馆",
        far: "13.3km",
        time: "周末4、6下午15:00",
        charge: "免费",
        phone:'',
      },
    ],
    activity: [
      {
        img: "pp.png",
        title: "红双喜俱乐部 乒乓球比赛",
        currentpeople: 8,
        fullpeople: 16,
        time: "周五13:00",
        charge: "免费",
        place: "肇庆大道中88号 乒乓球馆",
      },
      {
        img: "2.jpg",
        title: "赛跑比赛",
        currentpeople: 8,
        fullpeople: 16,
        time: "周五13:00",
        charge: "免费",
        place: "肇庆新区体育中心",
      },
      {
        img: "5.jpg",
        title: "篮球比赛",
        currentpeople: 8,
        fullpeople: 16,
        time: "周五13:00",
        charge: "免费",
        place: "端州体育馆",
      },
      {
        img: "3.jpg",
        title: "慢跑组队",
        currentpeople: 8,
        fullpeople: 16,
        time: "周五13:00",
        charge: "免费",
        place: "肇庆大道动78号 田径场",
      },
      {
        img: "1.jpg",
        title: "肇庆学院男篮比赛",
        currentpeople: 8,
        fullpeople: 16,
        time: "周五13:00",
        charge: "免费",
        place: "端州区西江北路11号 肇庆体育中心",
      },
    ],
    order:[
      {
        sports:'篮球',
        time:'2021/6/25 00:05',
        phone:'123456788',

      }
    ]

  },
  mutations: {
    addorder(state,order){
     
      // console.log('state',state);
      // console.log('order',order);
      state.order.push(order);

    },
    //设置vuex的token
    settoken(state,token){
      state.token=token
    },
    
  },
  actions: {
    addorder(context,order){
    context.commit('addorder',order)
    }
  },
  modules: {
  }
})
