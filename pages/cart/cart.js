// pages/cart/cart.js
import {_getcarts,_checkcars,_sweepnum,_deleteing} from '../../request/api'
Page({
    /**
     * 页面的初始数据
     */
    data: {
        //获取购物车数据
        cartList:'',cartTotal:'',

        //小选项框
        //多项框
        checks:true,
    },

    onChange(e){
        let {goods_id,id,productid}=e.target.dataset;
        let number=e.detail;
        _sweepnum({
            method:"POST",
            data:{
                goodsId:goods_id,
                id,
                number,
                productId:productid,
            }
        }).then(res=>{
            console.log(res.data,'请求成功');
            let {cartTotal} =res.data;
            this.setData(cartTotal);
        })
    },
    
    //删除接口
    delete(e){
        let product_id = String(e.target.dataset.productids);
        _deleteing({
            method:"POST",  
            data:{
                productIds:product_id,
            }
        }).then(res=>{
            console.log(res.data,'删除成功');
        })
    },

    //选项
    click(e){
        let token = wx.getStorageSync('token');
        let {che,ids} = e.target.dataset;
        let chee=!che? 1 : 0;
        _checkcars({
            method:"POST",
            header:{
                'X-Nideshop-Token':token
            },
            data:{
                isChecked:chee,
                productIds:ids
            }
        }).then(res=>{
            console.log(res.data);
            let {cartList,cartTotal}=res.data;
            this.setData({cartList,cartTotal});
            this.panduan();
        })
    },
    //判断全选按钮
    panduan(){
        this.setData({checks:true});
        let cartList=this.data.cartList;
        cartList.forEach(k => {
            if(!k.checked){
                this.setData({checks:false});
            }
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let token = wx.getStorageSync('token');
        if(token){
            _getcarts({
                header:{
                    'X-Nideshop-Token':token
                }
            }).then(res=>{
                let{cartList,cartTotal}=res.data;
                this.setData({cartList,cartTotal})
                this.panduan();
            })
        }else{
            console.log('没有token');
        }

        
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getTabBar().setData({
            active:3
        })
    },
})