import request from "./request" 
//获取首页信息
export const _getData = (parmas={}) => request('/index/index',parmas);

//搜索窗口的数据
export const _searchbegin = (parmas={})=>request('/search/index',parmas);

//实时搜索
export const _realtimesearch = (parmas={})=>request('/search/helper',parmas);

//按下回车请求数据
export const _searchenter = (parmas={}) =>request('/goods/list',parmas);

//页面请求
export const _pagerequest = (parmas={}) =>request('/topic/list',parmas);

//获取所有分类信息
export const _classfi = (parmas={}) =>request('/catalog/index',parmas);

//点击选商品
export const _checkgoods = (parmas={}) => request('/catalog/current',parmas);


//分类数据获取(做点击分类模块的)
export const _getgoods = (parmas={}) => request('/goods/category',parmas);
export const _getgoodslist = (parmas={}) => request('/goods/list',parmas);
//分类数据获取(做点击分类模块的)


//获取购物车数据
export const _getcarts = (parmas={})=>request('/cart/index',parmas);
// 用戶登錄
export const LoginApi = params => request("/auth/loginByWeb", params);
//购物车选项
export const _checkcars = (parmas)=>request('/cart/checked',parmas);

//步进器
export const _sweepnum = (parmas)=>request('/cart/update',parmas);


//删除按钮
export const _deleteing =(parmas)=>request('/cart/delete',parmas);

//商品详情
export const _goodDetail =(parmas={})=>request('/goods/detail',parmas);
//其他详情
export const _goodsrRelated = (parmas={})=>request('/goods/related',parmas);
