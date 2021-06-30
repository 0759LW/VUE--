module.exports = {
 
  configureWebpack:{
    devServer:{
 //MOCK接口编写的地方
        //每次做更改这个配置文件的时候，都必须重启项目才会生效
        before(app){

        //   //用户信息池
        //   let userpoor=[
        //    {username:'123',password:'123'},
        //    {username:'tim',password:'123456'}
        //  ]
     
        //  //登录接口
        //  let tokenkey='xdclass'
        //  app.get('/api/login',(req,res)=>{
        //    const {username,password}=req.query
        //    if(username=='123' && password=='123' || username=='tim' && password=='123456'){
        //      res.json({
        //        code:0,
        //        message:'登录成功',
        //        token:tokenkey+'-'+username+'-'+(new Date().getTime()+60*60*1000)
        //      })
        //    }else{
        //      res.json({
        //        code:1,
        //        message:'账号或密码错误'
        //      })
        //    }
        //  })
      //首页轮播图数据接口
    //   app.get('/api/banner',(req,res)=>{
    //     res.json({
    //         data:[  {
    //             url: '',
    //             image: ''
    //           },
    //           {
    //             url: '',
    //             image: ''
    //           },
    //           {
    //             url: '',
    //             image: ''
    //           },
    //           {
    //             url: '',
    //             image: ''
    //           },
    //           {
    //             url: '',
    //             image: ''
    //           }
            
    //         ]
    //     })
    // })
 
     
         }
    }

  },
  
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
