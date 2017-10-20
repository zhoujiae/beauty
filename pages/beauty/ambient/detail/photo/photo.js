// photo.js
var app = getApp();
var con = require("../../../../../utils/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.getUserInfo();
    //图库详情
    wx.request({
      url: con.hospital_getphoto,
      data: { wxappid: con.wyy_user_wxappid, id: options.id },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        that.setData({
          photo: res.data.info
        })
        console.log(res.data.info);
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