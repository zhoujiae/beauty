// pages/tuoke/customer/customer.js
var app = getApp()
var con = require('../../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    customer: [],
    navbar: ['提交客户', '扫码客户'],
    currentTab: 0,
  },
  // 菜单切换
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.getUserInfo()
    var that = this
    setTimeout(function () {
      console.log(app.globalData.userInfo)
      that.setData({
        userInfo: app.globalData.userInfo
      })
    }, 1000)
    // 请求我的客户接口
    console.log(con.wyy_user_wxappid)
    wx.request({
      url: con.ty_tuoke_c_list,
      data: { 
        wxappid: con.wyy_user_wxappid,
        openid: app.globalData.openid,
        fansid: app.globalData.fansid,
      },
      method: 'post',
      header: {
        "Content-Type": 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData({
          customer: res.data.info
        })
        console.log(res.data);
      }
    });
  },
  // 跳转客户详情
  go_detail: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'customerdetail/customerdetail?id=' + id,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})