// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    uploadResult:'1',
    Result_all:'2',
    mvss_prediction:'3',
    osn_prediction:'4',
    mabc_prediction:'5',
    result_txt_afd:'6',
    deep_audio_trace:'7',
    scores_all:'8',
    scores_all_img:'9',
    scores_all_audio:'10'
  }
})
