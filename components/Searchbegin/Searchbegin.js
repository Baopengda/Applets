// components/Searchbegin/Searchbegin.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        historyKeywordList:{
            type:Array,
            value:[]
        },
        hotKeywordList:{
            type:Array,
            value:[]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        click(e){
            this.triggerEvent('sendKeyword',e.target.dataset.num);
        },
        clickl(e){
            this.triggerEvent('sendKeyword',e.target.dataset.num.keyword);
        },
    }
})
