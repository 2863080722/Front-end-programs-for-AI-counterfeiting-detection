// pages/pic/pic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  /**
   * 图片上传
   */

  chooseimage:function(){
    var that=this
    wx.chooseMedia({
        count: 1,
        sizeType: ['original','compressed'],
        sourceType: ['album','camera'],
        mediaType: ['image'],
        success: function(res) {
            console.log(res.tempFiles[0].tempFilePath)
            var mypic=res.tempFiles[0].tempFilePath
            wx.uploadFile({
              filePath: mypic,
              name: 'name',
              url: 'url',
              success:function(res){
                  console.log(res)
                  that.setData({imagesrc:mypic})
              },
              fail:function(res){

              },
              complete:function(res){}
            })
        },
        fail: function(res) {
            console.log('失败')
        },
        complete: function(res) {

        },
      })
}
})