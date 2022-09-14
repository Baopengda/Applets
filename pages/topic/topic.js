import {_pagerequest} from '../../request/api'
// pages/topic/topic.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //请求页面数据
        count:'',currentPage:'',datas:'',pageSize:'',totalPages:'',

    },
    onChange(event) {
        _pagerequest({data:
            {"page":event.detail,"size":"10"}
        }).then(res=>{
            let {count,currentPage,data,pageSize,totalPages} = res.data;
            this.setData({count,currentPage,datas:data,pageSize,totalPages})
            wx.pageScrollTo({ scrollTop: 0 })
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        _pagerequest({data:
            {"page":"1","size":"10"}
        }).then(res=>{
            let {count,currentPage,data,pageSize,totalPages} = res.data;
            this.setData({count,currentPage,datas:data,pageSize,totalPages})
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getTabBar().setData({
            active:1
        })



    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
 
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})