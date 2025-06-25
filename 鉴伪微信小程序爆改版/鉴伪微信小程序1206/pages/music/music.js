// pages/music/music.js
const app=getApp()

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
        var that = this;
        var uploadBtn = this.selectComponent('#upload-btn');
        uploadBtn.onTap = function() {
          that.uploadVideo();
        };
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

    uploadVideo: function() {
        var baseUrl = 'http://matex.asia:34975';
        var that = this;
    
        wx.chooseVideo({
          sourceType: ['album', 'camera'],
          success: function(res) {
            var filePath = res.tempFilePath;
    
            wx.uploadFile({
              url: baseUrl + '/video',
              filePath: filePath,
              name: 'file',
              success: function(res) {
                var data = JSON.parse(res.data);
    
                // 更新进度信息
                function updateProgress() {
                  wx.request({
                    url: baseUrl + '/progress',
                    success: function(res) {
                      var progressData = res.data;
                      var progress = (progressData.n / progressData.total * 100).toFixed(2);
                      var progressBar = document.getElementById('progress-bar');
                      progressBar.style.width = progress + '%';
                      progressBar.textContent = progress + '%';
                    }
                  });
                }
    
                setInterval(updateProgress, 1000); // 每秒更新一次进度信息
    
                var container = that.selectComponent('#response-container');
                container.setData({
                  videoPath: baseUrl + data.vid_to_show_path,
                  audioPath0: baseUrl + data.au_convert_0,
                  audioPath1: baseUrl + data.au_convert_1,
                  mvssPicPath: baseUrl + data.mvss_pic,
                  osnPicPath: baseUrl + data.osn_pic,
                  result_all: data.result_all,
                  mvss_prediction: data.mvss_prediction,
                  osn_prediction: data.osn_prediction,
                  mabc_prediction: data.mabc_prediction,
                  result_txt_afd: data.result_txt_afd,
                  deep_audio_trace: data.deep_audio_trace,
                  scores_all: data.scores_all,
                  scores_all_img: data.scores_all_img,
                  scores_all_audio: data.scores_all_audio
                });
              },
              fail: function(res) {
                wx.showToast({
                  title: '上传失败: ' + res.statusCode,
                  icon: 'none'
                });
              }
            });
          },
          fail: function(res) {
            wx.showToast({
              title: '选择视频失败',
              icon: 'error'
            });
          }
        });
      }
})