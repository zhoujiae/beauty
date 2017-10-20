var app = getApp();
var con = require("../../../../utils/data.js");
var id, openid, stat, kArr, vArr, aArr, b, mArr, wArr, dArr, sArr, tArr;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getpre: [],
    select: [],
    openid: "",
    date: '2017-06-10',
    index: '0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    id = options.id;
    console.log(id);
    app.getUserInfo();
    // 预约详情
    wx.request({
      url: con.hospital_getpre,
      data: { wxappid: con.wyy_user_wxappid, preid: id },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        // 获取正则表达式
        aArr = res.data.info.forms.text;
        mArr = res.data.info.forms.checkbox;
        kArr = [];
        // 获取输入框内容
        vArr = [];
        wArr = [];
        dArr = [];
        sArr = [];
        tArr = [];
        for (var i in aArr) {
          var zb = aArr[i].field_match;
          kArr.push(zb);
          var v = aArr[i].fieldname;
          vArr.push(v);
        }
        // console.log(kArr);
        // console.log(vArr);
        // 获取多选框内容
        for (var i in mArr) {
          dArr = mArr[i].fieldname;
          sArr.push(dArr)
          console.log(sArr);
        }
        wx.getStorage({
          key: 'openid',
          success: function (res) {
            // console.log(res.data);
            openid = res.data;
            that.setData({
              openid: res.data
            })
          },
        })
        that.setData({
          getpre: res.data.info,
          select: res.data.info.forms.date
        })
        console.log(res.data.info);
      }
    });
  },
  formSubmit: function (e) {
    // 判断单行文本框
    for (var i in aArr) {
      b = aArr[i].is_empty;
      var cao = new RegExp(kArr[i]);
      if (b == 1) {
        if (!cao.test(e.detail.value[vArr[i]])) {
          console.log(11111);
          wx.showToast({
            title: '您的输入格式有误，请重新输入！',
            mask: false,
            success: function (res) { },
          })
          return false;
        }
      }
    }
    // 判断多选框
    console.log(tArr)
    var string = e.detail.value;
    for (var i in mArr) {
      b = mArr[i].is_empty;
      console.log(sArr);
      if (b == 1) {
        if (string[sArr[i]].length < 1) {
          console.log(22222);
          wx.showToast({
            title: '请至少选择一个选项！',
            mask: false,
            success: function (res) { },
          })
          return false;
        }
      }
    }
    wx.request({
      url: con.hospital_postprerecord,
      data: {
        wxappid: con.wyy_user_wxappid,
        preid: id,
        record: JSON.stringify(e.detail.value),
        openid: openid
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success(res) {
        console.log(res.data);
        stat = res.data.status;
        wx.showToast({
          title: '预约成功',
          icon: 'succes',
          duration: 2000,
          mask: true
        })
      }
    })
    console.log(string);
  },
  radioChange: function (e) {

  },
  bindDateChange: function (e) {
    // console.log(e.detail.value);
    this.setData({
      date: e.detail.value
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})