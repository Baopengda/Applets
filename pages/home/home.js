// pages/home/home.js

import {_getData } from "../../request/api"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[]
  },
  
  onShow: function () {
   
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // wx.request({
    // url: 'http://mockjs.docway.net/mock/1Ve70KqViGf/index/index',
    // success(res){
    //   console.log(res.data)
    // }
    let res = await _getData()
    console.log(res)
    let {banner,brandList,categoryList,channel,hotGoodsList,newGoodsList,topicList}=res.data
    this.setData({banner,brandList,categoryList,channel,hotGoodsList,newGoodsList,topicList})
    // })
  },
  onTap(){
    wx.navigateTo({
      url: '/pages/popup/popup',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */


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