// record.js
var app = getApp()
var con = require('../../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    record: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // app.getUserInfo()
    // var that = this
    // setTimeout(function () {
    //   // console.log(app.globalData.openid)
    //   // 成交记录接口
    //   wx.request({
    //     url: con.record,
    //     data: {
    //       wxappid: con.wyy_user_wxappid,
    //       openid: app.globalData.openid
    //     },
    //     method: 'GET',
    //     header: {
    //       "Content-Type": 'application/json'
    //     },
    //     success: function (res) {
    //       that.setData({
    //         record: res.data.errMsg
    //       })
    //       console.log(res.data.errMsg);
    //     }
    //   });
    // }, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})