

// 用于去创建应用的实例对象
App({
  // 在整个应用启动时触发    只会触发一次
  onLaunch:function(){
    // 在这里也能使用options利用返回的scene的值判断用户是从哪里进来的   但是这里由于触发的时机不同只能显示一次 在onShow中用户切换页面可以显示多次
      console.log("应用启动了");
  },
  // 应用程序显示到屏幕上
  onShow : function(options){
    console.log('应用显示了6666');
    console.log(options);
  },
  onHide:function(){
    // 这里的onHide不能传参数 
    console.log("隐藏到后台");
  },
  onError:function(msg){
    // onError只能捕获运行阶段的异常
    // 一旦出错 执行当前函数  返回的是一个字符串
    console.log(msg);
  },
    // 在这里可以定义任意的成员  在全局页面中都有可以使用
  foo : "13465798"
    

});