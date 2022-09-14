import { LoginApi } from "../../request/api"

// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: "../../image/default_avatar.png",
    username: "点击登录",
    isShowLoginWindow: false,
    username_err: false,
    password_err: false,
    login_username: "",
    login_password: "",
    isLogin: false,
    avatar: wx.getStorageSync("token") ? JSON.parse(wx.getStorageSync("userInfo")).avatar : "../../image/default_avatar.png",
    username: wx.getStorageSync("token") ? JSON.parse(wx.getStorageSync("userInfo")).nickname : "点击登录",
    show: false,
    iconArr: [{
      icon: "label-o",
      text: "我的订单"
    },
    {
      icon: "bill-o",
      text: "优惠劵"
    },
    {
      icon: "goods-collect-o",
      text: "礼品卡"
    },
    {
      icon: "location-o",
      text: "我的收藏"
    },
    {
      icon: "flag-o",
      text: "我的足迹"
    },
    {
      icon: "contact",
      text: "会员福利"
    },
    {
      icon: "aim",
      text: "地址管理"
    },
    {
      icon: "warn-o",
      text: "账号安全"
    },
    {
      icon: "service-o",
      text: "联系客服"
    },
    {
      icon: "question-o",
      text: "帮助中心"
    },
    {
      icon: "smile-comment-o",
      text: "意见反馈"
    },
    ],
  },
  onInputU(e) {
    this.setData({
      username_err: e.detail.trim() === "",
      login_username: e.detail.trim()
    })
  },
  onInputP(e) {
    this.setData({
      password_err: e.detail.trim() === "",
      login_password: e.detail.trim()
    })
  },
  async goToLogin() {
    if (!this.data.login_username.trim()) {
      this.setData({
        username_err: true
      })
      return
    }
    if (!this.data.login_password.trim()) {
      this.setData({
        password_err: true
      })
      return
    }
    let res = await LoginApi({
      method: "POST",
      data: {
        username: this.data.login_username,
        pwd: this.data.login_password
      }
    });
    console.log(res)
    //登录成功后执行的业务逻辑
    // 1.提示登录成功
    wx.showToast({
      title: '登录成功！',
      icon: "success",
      mask: true
    })
    // 2.保存token值
    wx.setStorageSync("token", res.data.token)
    wx.setStorageSync("userInfo", JSON.stringify(res.data.userInfo))
    // 3.关闭模态，渲染用户信息
    setTimeout(() => {
      this.setData({
        isShowLoginWindow: false,
        username: res.data.userInfo.nickname,
        avatar: res.data.userInfo.avatar,
        isLogin: true
      });
    }, 1500);


  },
  showLoginWindow() {
    // if(this.data.isLogin){
    if (this.data.isLogin) {
      
      return
    }
    this.setData({ isShowLoginWindow: true });
  },
  onClose() {
    this.setData({ isShowLoginWindow: false });
  },
  goToLoginOut() {
    if (this.data.isLogin) {
      console.log("退出登录")
      this.setData({
        show: true
      })
      
    }
  },
  onConfirm() {
    wx.clearStorageSync();
    this.setData({
      isLogin: false,
      username: "用户登录",
      avatar: "../../image/default_avatar.png",
    })
    wx.showToast({
      title: '已退出',
      icon: "none",
      mask: true
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
if(wx.getStorageSync("token")){
  this.setData({
    isLogin: true,
    
  })
  console.log("已登录")
}
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().setData({
      active: 4
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})