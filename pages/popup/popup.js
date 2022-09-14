import {_searchbegin,_realtimesearch,_searchenter} from '../../request/api'
Page({
    /**
     * 页面的初始数据
     */
    data: {
        value:'',//关键字
        //用于筛选搜索框状态
        active:0,
        defaultKeyword:'',
        historyKeywordList:'',
        hotKeywordList:'',
        datass:'',//获取列表数据
        //按下回车后
        datas:'',filterCategory:'',goodsList:'',

    },
    //点击取消时
    onCancel(){
        wx.navigateBack('/pages/home/home');
    },
    //输入值时
    onChange(e){
        this.setData({active:1});
         _realtimesearch({
            data:{
                keyword:e.detail
            }
        }).then(res=>{
            let {data}= res.data;
            this.setData({datass:data})
        }).catch(err=>{
            console.log(err);
        })
    },
    
    //点击列时触发
    clickKeyword(k){
        this.setData({active:2});
        this.getInfomation({keyword:k.detail});
    },

    //按下回车时
    onSearch(e) {
        this.setData({active:2});
        this.setData({value:e.detail});
        this.getInfomation({keyword:this.value});
    },

    //回车搜索函数
    getInfomation(pamas={}){
        _searchenter({
            data:{
                keyword:pamas.keyword,
                page:pamas.page || 1,
                size:pamas.size || 10,
                order:pamas.order || 'asc',
                categoryId:pamas.categoryId || '0',
                sort:pamas.sort || 'id'
            }
        }).then(res=>{
            // console.log(res.data,'请求成功');
            let{data,filterCategory,goodsList}=res.data;
            this.setData({datas:data,filterCategory,goodsList});
        })
        _realtimesearch()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        _searchbegin().then(res=>{
            let {defaultKeyword,historyKeywordList,hotKeywordList} =res.data
            this.setData({defaultKeyword,historyKeywordList,hotKeywordList})
        }).catch(err=>{
            console.log(err,'请求失败');
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