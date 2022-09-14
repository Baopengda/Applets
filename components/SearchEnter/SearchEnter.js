// components/SearchEnter/SearchEnter.js
import {_searchenter} from '../../request/api'
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      datas:{
        type:Array,
        value:[],
      },
      filterCategory:{
        type:Array,
        value:[],
      },
      goodsList:{
        type:Array,
        value:[],
      }
    },
    /**
     * 组件的初始数据
     */
    data: {
        option1: [
          { text: '价格由高到低', value: 'a' },
          { text: '价格由低到高', value: 'b' },
        ],
        option2: [],
        value1: '',
        value2: '',
        informations:[],//获取的原有数据
      },
    /**
     * 组件的方法列表
     */
    methods: {
      valueChange(value){
        if(value.detail=='a'||value.detail=='b'){
          if(value.detail=='a'){
            let datas = this.data.datas.sort((a,b)=>{return b.retail_price-a.retail_price});
            this.setData({informations:datas})
          }else if(value.detail=='b'){
            let datas = this.data.datas.sort((a,b)=>{return a.retail_price-b.retail_price});
            this.setData({informations:datas})
          }
        }
      }
    },
    observers:{
      filterCategory(){
        let option2=[];
        if(this.data.filterCategory.length){
          let i=0;
          this.data.filterCategory.forEach(k => {
            option2[i]={text:k.name,value:i};
            if(k.checked){
              this.setData({value2:i});
            }
            i++
          });
          this.setData({option2})
        }
      },
      datas(){
        if(this.data.datas.length){
          this.setData({informations:this.data.datas});
        }
      }
    }
    
})