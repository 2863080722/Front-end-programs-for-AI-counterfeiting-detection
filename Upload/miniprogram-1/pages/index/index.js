Page({
  data: {
    videoPath: '',
    uploadResult: '',
    progress: '0%'
  },
  intervalId: null,

  chooseVideo: function () {
    var that = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        console.log(res.tempFilePath),
        that.setData({
          videoPath: res.tempFilePath
        });
      }
    });
  },

  uploadVideo: function () {
    var that = this;
    wx.uploadFile({
      url: 'http://81.70.98.128:1024/video',
      filePath: that.data.videoPath,
      name: 'file',
      success(res) {
        var data = JSON.parse(res.data);
        that.setData({
          uploadResult: JSON.stringify(data, null, 2)
        });
        clearInterval(that.intervalId);
      },
      fail() {
        console.log('上传失败');
      }
    });
    that.getProgress();
  },

  getProgress: function () {
    var that = this;
    that.intervalId = setInterval(function () { // 每秒请求一次进度条
      wx.request({
        url: 'http://81.70.98.128:1024/progress',
        method: 'GET',
        success: function (res) {
          var progressValue = (res.data.n / res.data.total * 100).toFixed(2) + '%';
          that.setData({
            progress: progressValue
          });
        },
        fail: function () {
          console.log('请求失败');
          clearInterval(that.intervalId);
        }
      });
    }, 1000);
  }
});