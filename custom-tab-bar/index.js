Component({
  data:{
    active:0,
    arr:[
      {
        "pagePath": "/pages/home/home",
        "text": "首页",
        "icon":"wap-home-o"
      },
      {
        "pagePath": "/pages/topic/topic",
        "text": "专题",
        "icon":"label-o"
      },
      {
        "pagePath": "/pages/category/category",
        "text": "分类",
        "icon":"apps-o"
      },
      {
        "pagePath": "/pages/cart/cart",
        "text": "购物车",
        "icon":"shopping-cart-o"
      },
      {
        "pagePath": "/pages/user/user",
        "text": "我的",
        "icon":"manager-o"
      }
    ]
  },
  methods:{
    onChange(event) {
      // console.log(event.detail)
      // event.detail 的值为当前选中项的索引
      // this.setData({ active: event.detail });
      if(this.data.arr[event.detail].pagePath==='/pages/cart/cart'&& !wx.getStorageSync("token")){
          wx.showToast({
            title: '请先登录',
            icon:'none',
            duration:1500
          })
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/user/user',
            })
          }, 1500);
          return
      }
      wx.switchTab({
        url:this.data.arr[event.detail].pagePath
      })
    }
  }
  
})