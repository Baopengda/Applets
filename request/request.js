const baseUrl = "http://kumanxuan1.f3322.net:8001";

export default function request(url, params = {}) {
  // 封装网络请求的代码
  return new Promise(function (resolve, reject) {
    wx.showLoading({//展示加载动画
      title: '加载中...',
    })
    //发起请求
    wx.request({
      url: baseUrl + url,//开发者服务器接口地址
      data: params.data || {},//请求的参数
      header: params.header || {},//设置请求的header
      dataType: 'json',//返回的数据格式
      method:params.method|| "GET",//HTTP 请求方法
      success: function (res) {//接口调用成功的回调函数
        wx.hideLoading();
        if (res.data.errno == 0) {
          resolve(res.data)
        } else {
          wx.showToast({
            title: res.data.errmsg,
            icon: "error",
            duration: 2000
          })
        }

      },
      fail: function (err) {//接口调用失败的回调函数
        wx.hideLoading();
        wx.showToast({
          title: err || '请求错误！',
        })
        reject(err)
      }
    })
  })
}
