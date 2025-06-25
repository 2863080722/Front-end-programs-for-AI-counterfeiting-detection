// pages/music/music.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      showModal: false
    },

    methods:{
      showModal() {
        this.setData({
          showModal: true
        });
    },

    handleButton1() {
      console.log('MVSS 被点击');
      this.setData({
        showModal: false
      });
    },
    handleButton2() {
      console.log('按钮 2 被点击');
      this.setData({
        showModal: false
      });
    },
    handleButton3() {
      console.log('按钮 3 被点击');
      this.setData({
        showModal: false
      });
    },
    handleButton4() {
      console.log('按钮 4 被点击');
      this.setData({
        showModal: false
      });
    },
    handleButton5() {
      console.log('按钮 5 被点击');
      this.setData({
        showModal: false
      });
    },
    handleCancel(){
      this.setData({
        showModal: false
      });
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

    chooseMessageFile(){
        var _this=this
        wx.chooseMessageFile({
            count: 1,
            type:'file',
            success: function(res) {
                console.log(res.tempFiles[0].path)
                var mymusic=console.log(res.tempFiles[0].path)
                wx.uploadFile({
                    filePath: mymusic,
                    name: 'name',
                    url: 'url',
                    success:function(res){
                        console.log(res)
                        that.setData({musicsrc:mymusic})
                    },
                    fail:function(res){
      
                    },
                    complete:function(res){}
                  })
            },
            fail:function(res) {
                console.log('失败')
            },
            complete: (res) => {},
          })
    }
  }
})