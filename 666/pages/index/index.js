// 创建一个页面实例对象
Page({
  data : {

  },
  // 页面加载
  // 就是这个页面即将要加载了
  //比较适合做数据初始化的东西
  onLoad : function() {
    this.setData({foo : 'helloworld'});
    console.log('这是onLoad启动了');
  },
  // 页面进入焦点状态（就是在页面中可以看到）
  onShow : function(){
    console.log('这时候onShow已经启动了');
  },
  // 当页面准备好了 就是页面渲染完成了
  onReady : function(){
    console.log('onReady已经启动');
    //在wx下有许多微信API
    // 只有页面加载完成才能设置标题
    wx.setNavigationBarTitle({
      title: '小程序开始',
    })
  },
  onHide : function(){
    console.log('onHide已经启动');
  },
  onUnload : function(){
    //页面卸载功能  就是当这个页面被销毁掉的时候
    // 可以用于页面卸载之前保存用户页面状态
    console.log('onUnload已经启动');
  }
  

});