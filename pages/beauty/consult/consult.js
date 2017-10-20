// consult.js
var app = getApp();
var con = require("../../../utils/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    gettype: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.getUserInfo();
    // 幻灯片
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
    //商家分类
    wx.request({
      url: con.hospital_gettype,
      data: { wxappid: con.wyy_user_wxappid },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          gettype: res.data.info
        })
        console.log(res.data.info);
      }
    });
  },
  // 跳转文章列表
  goDetial_articallist: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'detail/articallist/articallist?id=' + id,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})