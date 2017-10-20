var app = getApp()
var con = require('../../../../utils/data.js')
var userInfo
Page({
  data: {
    userInfo: {},
    filterbol: true,
    customerSubmit: true,
    date: '2017-8-30',
    ifaward: [
      { value: 0, name: '否' },
      { value: 1, name: '是', checked: true }
    ],
    animationData: {},
    customer_add: [],
    erweima: []
  },
  onLoad: function (options) {
    app.getUserInfo()
    var that = this
    
      console.log(app.globalData.userInfo)
      that.setData({
        userInfo: app.globalData.userInfo
      })
    
    filterbol: (options.filterbol == "true" ? true : false)
    customerSubmit: (options.customerSubmit == "true" ? true : false)
  },
  // 提交客户表单信息
  send_customer: function (e) {
    // console.log(e.detail.value)
    var a = e.detail.value
    app.getUserInfo()
    var that = this
    // 提交信息不能为空
    if (a.name != "" && a.phone != "" && a.introduce != "") {
      console.log(11111)
      var re = /^[0-9]+.?[0-9]*$/;
      console.log(re.test(a.phone))
      // 判断联系方式是否为数字
      if (re.test(a.phone) == true) {
        console.log(222222)
        // 说明不得多于50字
        if (a.introduce.length <= 50) {
          setTimeout(function () {
            console.log(app.globalData.openid)
            // 提交客户信息到接口
            wx.request({
              url: con.ty_tuoke_post,
              data: {
                wxappid: con.wyy_user_wxappid,
                openid: app.globalData.openid,
                fansid: app.globalData.fansid,
                name: a.name,
                tel: a.phone,
                introduce: a.introduce
              },
              method: 'post',
              header: {
                "Content-Type": 'application/x-www-form-urlencoded'
              },
              success: function (res) {
                that.setData({
                  customer_add: res.data
                })
                console.log(res.data);
                if (res.data.status == 1) {
                  wx.showToast({
                    title: res.data.info,
                    icon: 'success',
                    duration: 1000
                  })
                  // 延迟跳转我的客户页面
                  setTimeout(function () {
                    wx.navigateTo({
                      url: 'customer/customer'
                    })
                  }, 1500)
                } else {
                  wx.showToast({
                    title: res.data.info,
                    icon: 'loading',
                    duration: 1000
                  })
                }
              }
            });
          }, 1000)
        } else {
          wx.showToast({
            title: '您输入说明内容超出限制!',
            icon: 'loading',
            duration: 1000
          })
        }
      } else {
        wx.showToast({
          title: '您输入的手机号格式不正确!',
          icon: 'loading',
          duration: 1000
        })
      }
    } else {
      wx.showToast({
        title: '您输入的信息不完整!',
        icon: 'loading',
        duration: 1000
      })
    }
    
  },
  // picker日期改变
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 页面展示缩放radio
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animation = animation

    animation.scale(.7, .7).rotate(45).step()

    this.setData({
      animationData: animation.export()
    })
  },
  // 跳转二维码
  // go_ewm: function () {
  //   // console.log(app.globalData.openid)
  //   // console.log(con.wyy_user_wxappid)
  //   var that = this
  //   // 请求二维码接口
  //   wx.request({
  //     url: con.customer_add,
  //     data: {
  //       wxappid: con.wyy_user_wxappid,
  //       openid: app.globalData.openid,
  //     },
  //     method: 'GET',
  //     header: {
  //       "Content-Type": 'application/json'
  //     },
  //     success: function (res) {
  //       that.setData({
  //         erweima: res.data
  //       })
  //       console.log(res.data);
  //     }
  //   });

  // },
  // 跳转客户页面
  go_customer: function () {
    wx.navigateTo({
      url: 'customer/customer'
    })
  },
  // 跳转拓客说明页面
  go_tuokeintro: function () {
    wx.navigateTo({
      url: 'tuokeintro/tuokeintro'
    })
  },
  // 跳转我的奖励页面
  go_award: function () {
    wx.navigateTo({
      url: 'award/award'
    })
  },
  // 跳转成交记录页面
  go_record: function () {
    wx.navigateTo({
      url: 'record/record'
    })
  },
  // 客户提交点击事件
  customer_submit: function () {
    var that = this;
    that.setData({
      filterbol: false,
      customerSubmit: false
    })
  },
  // 遮罩层点击隐藏窗口事件
  filter_click: function () {
    var that = this;
    that.setData({
      filterbol: (!that.data.filterbol),
      customerSubmit: (!that.data.customerSubmit)
    })
  }
})
