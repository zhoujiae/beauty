// map.js
var app = getApp();
var con = require("../../../utils/data.js");
var WxParse = require("../../../wxParse/wxParse.js");
var QQMapWX = require('../../../utils/qqmap-wx-jssdk.min.js');
var lng, lat, name, address;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    map: [],
    markers: [],
    address: [],
    // name: [],
    tel: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var demo = new QQMapWX({
      key: 'QCDBZ-GZ3WI-BQDG7-5H24V-Y2HSO-I7BSG'
    });
    app.getUserInfo();
    // 地图
    wx.request({
      url: con.getmap,
      data: { wxappid: con.wyy_user_wxappid },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        lng = res.data.lng,
        lat = res.data.lat,
        that.setData({
          map: res.data,
          lng: res.data.lng,
          lat: res.data.lat,
          markers: [{
            iconPath: "../../../images/map1.png",
            id: 0,
            latitude: res.data.lat,
            longitude: res.data.lng,
            title: name,
            width: 30,
            height: 30
          }]
        })
        console.log(res.data);
      }
    });
    // 商家信息
    wx.request({
      url: con.hospital_getinfo,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        name = res.data.info.name 
        address = res.data.info.address,
        console.log(res.data.info);
        WxParse.wxParse('shoperIn', 'html', res.data.info.intro, that, 0)
        that.setData({
          address: res.data.info.address,
          name: res.data.info.name,
          tel: res.data.info.tel
        })
      }

    })
    // 获取域名接口
    wx.request({
      url: con.get_copyright,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        that.setData({
          yname: res.data
        })
        console.log(res.data)
      }

    })
  },
  bindgothere: function (e) {
    console.log(lat)
    wx.openLocation({
      latitude: lat,
      longitude: lng,
      name: name,
      address: address
    })
  },
  // 跳转拓客
  go_tuoke: function () {
    wx.navigateTo({
      url: 'tuoke/tuoke',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})