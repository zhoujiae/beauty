var app = getApp();
var con = require("../../../../../utils/data.js");
var WxParse = require("../../../../../wxParse/wxParse.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articallist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.getUserInfo();
    //文章列表
    wx.request({

      url: con.gettarticallist,
      data: { wxappid: con.wyy_user_wxappid, typeid: options.id },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        WxParse.wxParse('arta', 'html', res.data.details, that, 0);
        that.setData({
          articallist: res.data.info
        })
        console.log(res.data.info);
        console.log(options.id)
      }
    });
  },

  goDetial_artical: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'artical/artical?id=' + id,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})