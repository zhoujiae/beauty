//index.js
//获取应用实例
var app = getApp();
var con = require("../../../utils/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    gettype: [],
    photogroup: [],
    videoList: []
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
    //环境图库分组
    wx.request({
      url: con.hospital_getphotogroup,
      data: { wxappid: con.wyy_user_wxappid},
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          photogroup: res.data.info
        })
        console.log(res.data.info);
      }
    });
    that.getVideoHttp();
  },
  // 视频列表页面
  goMoreVideo: function (e) {
    wx.navigateTo({
      url: 'video/video',
    })
  },
  getVideoHttp: function () {
    var that = this;
    wx.request({
      url: con.getvideo,
      data: { wxappid: con.wyy_user_wxappid, count: 4 },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          videoList: res.data
        })
        console.log(111, res.data);
      }
    });
  },
  // 跳转环境页面
  goambient: function (e) {
    var id = e.currentTarget.dataset.id
    wx.switchTab({
      url: '../ambient/ambient?id=' + id,
    })
  },
  // 跳转首页文章列表
  go_articallist: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'detail/articallist/articallist?id=' + id,
    })
  },
  // 跳转图库
  goDetial_photo: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'detail/photo/photo?id=' + id,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
