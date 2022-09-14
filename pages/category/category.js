import {_classfi,_checkgoods} from '../../request/api'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //初始化
        activeKey: 0,ids:'',
        //获取请求数据
        categoryList:"",currentCategory:'',

        //点击后获取的信息
        currentCategory:'',subCategoryList:'',

        active:0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onhange(e){
        _checkgoods({data:{
            id:e.target.dataset.ids
        }}).then(res=>{
            let {currentCategory} = res.data;
            this.setData({currentCategory,subCategoryList:currentCategory.subCategoryList});
            
        })
    },




    onLoad(options) {
        _classfi().then(res=>{
            let {categoryList,currentCategory} = res.data;
            this.setData({categoryList,currentCategory,subCategoryList:currentCategory.subCategoryList})

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
            active:2
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