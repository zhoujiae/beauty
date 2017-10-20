var WYY_HOST_URL = "https://wxapi.weiyunyi.com";
var type = "Beauty";
module.exports = {
  wyy_host_api_url:WYY_HOST_URL,
  wyy_user_wxappid: "13",
  wyy_share_info:'',
  wyy_config_version:'v',
  //命名规范 模块名_方法名
  //以下通用方法
	//用户登录slogin
	index_slogin:WYY_HOST_URL + "/Wap.php/Index/slogin",
	//错误日志errorLog 
	index_errorLog :WYY_HOST_URL + "/Wap.php/Index/errorLog",
	//获取分享信息 getShareInfo
	index_getShareInfo:WYY_HOST_URL + "/Wap.php/Index/getShareInfo",
	//获取用户菜单列表 getUserMenuList
	Index_getUserMenuList:WYY_HOST_URL + "/Wap.php/Index/getUserMenuList",
	//获取用户信息 getUserInfo
	Index_getUserInfo:WYY_HOST_URL + "/Wap.php/Index/getUserInfo",
	//编辑用户信息 editUserInfo
	Index_editUserInfo:WYY_HOST_URL + "/Wap.php/Index/editUserInfo",
	//获取用户支付日志 getUserPaylog
	Index_getUserPaylog:WYY_HOST_URL + "/Wap.php/Index/getUserPaylog",
	//创建支付数据 makePayData
	Index_makePayData:WYY_HOST_URL + "/Wap.php/Index/makePayData",
	////以下医疗行业方法
	//获取商家基本信息 getinfo
	hospital_getinfo:WYY_HOST_URL + "/Wap.php/"+type+"/getinfo",
	//获取商家首页幻灯片 getslide
	hospital_getslide:WYY_HOST_URL + "/Wap.php/"+type+"/getslide",
	//获取商家分类 gettype
  hospital_gettype: WYY_HOST_URL + "/Wap.php/" + type +"/gettype",
	//获取图库分组 getphotogroup
  hospital_getphotogroup: WYY_HOST_URL + "/Wap.php/" + type +"/getphotogroup",
	//获取图库图片 getphoto
  hospital_getphoto: WYY_HOST_URL + "/Wap.php/" + type +"/getphoto",
	//获取文章 getartical
  hospital_getartical: WYY_HOST_URL + "/Wap.php/" + type +"/getartical",
	//获取预约列表 getprelist
  hospital_getprelist: WYY_HOST_URL + "/Wap.php/" + type +"/getprelist",
	//获取预约详情 getpre
  hospital_getpre: WYY_HOST_URL + "/Wap.php/" + type +"/getpre",
	//提交预约信息 prerecord
  hospital_postprerecord: WYY_HOST_URL + "/Wap.php/" + type +"/postprerecord",
	//获取评价信息 getevaluation
  hospital_getevaluation: WYY_HOST_URL + "/Wap.php/" + type +"/getevaluation",
  homegetartical: WYY_HOST_URL + "/Wap.php/" + type +"/homegetartical",
  homegetphotogroup: WYY_HOST_URL + "/Wap.php/" + type + "/homegetphotogroup",
  homegetprelist: WYY_HOST_URL + "/Wap.php/" + type + "/homegetprelist",
  gettarticallist: WYY_HOST_URL + "/Wap.php/" + type + "/gettarticallist",
  getartical: WYY_HOST_URL + "/Wap.php/" + type + "/getartical",
  getphotodetail: WYY_HOST_URL + "/Wap.php/" + type + "/getphotodetail",
  getmap: WYY_HOST_URL + "/Wap.php/" + type + "/getmap",
  // 获取视频
  // http://wxapi.weiyunyi.com/Wap.php?c=Weeding&a=getvideo&wxappid=14
  getvideo: WYY_HOST_URL + "/Wap.php/" + type + "/getvideo",
  // 获取域名
  get_copyright: WYY_HOST_URL + "/Wap.php/" + type + "/get_copyright",

  // 拓客我的客户
  customer_index: WYY_HOST_URL + "/Wap.php/" + type + "/customer_index",
  // 成交记录
  record: WYY_HOST_URL + "/Wap.php/" + type + "/record",
  // 提交客户
  customer_add: WYY_HOST_URL + "/Wap.php/" + type + "/customer_add",
  // 二维码
  get_ercode: WYY_HOST_URL + "/Wap.php/" + type + "/get_ercode",

  // 新拓客提交
  ty_tuoke_post: WYY_HOST_URL + "/Wap.php/" + type + "/ty_tuoke_post",
  // 客户列表
  ty_tuoke_c_list: WYY_HOST_URL + "/Wap.php/" + type + "/ty_tuoke_c_list",
  // 客户详情
  ty_tuoke_c_by_id: WYY_HOST_URL + "/Wap.php/" + type + "/ty_tuoke_c_by_id"
}