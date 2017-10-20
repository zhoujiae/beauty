// customerdetail.js
var app = getApp()
var con = require('../../../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    customerdetail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.getUserInfo()
    var that = this
    wx.request({
      url: con.ty_tuoke_c_by_id,
      data: {
        wxappid: con.wyy_user_wxappid,
        id: options.id
      },
      method: 'post',
      header: {
        "Content-Type": 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData({
          customerdetail: res.data.info
        })
        console.log(res.data);
      }
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})