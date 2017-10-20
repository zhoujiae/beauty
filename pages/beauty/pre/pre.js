var app = getApp();
var con = require("../../../utils/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    getprelist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.getUserInfo();
    //幻灯片
    wx.request({
      url: con.hospital_getslide,
      data: { wxappid: con.wyy_user_wxappid },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        that.setData({
          list: res.data.info
        })
        console.log(res.data.info);
      }
    });
    //预约列表
    wx.request({
      url: con.hospital_getprelist,
      data: { wxappid: con.wyy_user_wxappid },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        that.setData({
          getprelist: res.data.info
        })
        console.log(res.data.info);
      }
    });
  },
  // 跳转预约详情
  go_pre: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'prelistdetail/prelistdetail?id=' + id,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})