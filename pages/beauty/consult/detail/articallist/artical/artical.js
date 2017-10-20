var app = getApp();
var con = require("../../../../../../utils/data.js");
var WxParse = require("../../../../../../wxParse/wxParse.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articaldetail: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.getUserInfo();
    //文章
    wx.request({

      url: con.getartical,
      data: { wxappid: con.wyy_user_wxappid, id: options.id },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        WxParse.wxParse('arta', 'html', res.data.details, that, 0);
        that.setData({
          articaldetail: res.data
        })
        console.log(res.data);
        console.log(options.id)
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})