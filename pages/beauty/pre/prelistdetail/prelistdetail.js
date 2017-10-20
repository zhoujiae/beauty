// prelistdetail.js
var WxParse = require("../../../../wxParse/wxParse.js");
var app = getApp();
var con = require("../../../../utils/data.js");
var id;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getprelistdetail: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    id = options.id;
    var that = this;
    app.getUserInfo();
    //预约列表详情
    wx.request({
      url: con.hospital_getpre,
      data: { wxappid: con.wyy_user_wxappid, preid: id },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        WxParse.wxParse('arta', 'html', res.data.info.pre.details, that, 0);
        that.setData({
          getprelistdetail: res.data.info.pre
        })
        console.log(res.data.info.pre);
      }
    });
  },
  // 跳转预约详情
  go_pre: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../predetail/predetail?id=' + id,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})