// pages/music/music.js
const app = getApp()

Page({
    data: {
        videoPath: '',
        uploadResult: '',
        progress: '0%'
    },
    intervalId: null,


    chooseMessageFile() {

        var _this = this
        var that = this;
        //选择文件
       /*  wx.chooseMedia()({
            count: 1,
            type: 'file', */
            wx.chooseVideo({
                sourceType: ['album', 'camera'],
                maxDuration: 60,
                camera: 'back',

            //选择文件成功
            success: function (res) {
                /* console.log(res.tempFiles[0].path),
                that.setData({
                    videoPath: res.tempFiles[0].path
                }); */
                console.log(res.tempFilePath),
                that.setData({
                  videoPath: res.tempFilePath
                })
                //上传文件
                wx.uploadFile({
                    url: 'https://cnvpcuc.com:34430/video',
                    filePath: that.data.videoPath,
                    name: 'file',

                    //上传成功
                    success: function (res) {
                        var data = JSON.parse(res.data);
                        console.log(res)

                        //修改全局变量
                        app.globalData.Result_all=JSON.stringify(data.result_all, null, 2)
                        app.globalData.mvss_prediction=JSON.stringify(data.mvss_prediction, null, 2)
                        app.globalData.osn_prediction=JSON.stringify(data.osn_prediction, null, 2)
                        app.globalData.mabc_prediction=JSON.stringify(data.mabc_prediction, null, 2)
                        app.globalData.result_txt_afd=JSON.stringify(data.result_txt_afd, null, 2)
                        app.globalData.deep_audio_trace=JSON.stringify(data.deep_audio_trace, null, 2)
                        app.globalData.scores_all=JSON.stringify(data.scores_all, null, 2)
                        app.globalData.scores_all_img=JSON.stringify(data.scores_all_img, null, 2)
                        app.globalData.scores_all_audio=JSON.stringify(data.scores_all_audio, null, 2)
                        app.globalData.MVSS_pic=JSON.stringify(data.MVSS_pic, null, 2)
                        
                        app.globalData.uploadResult=JSON.stringify(data, null, 2)

                        that.setData({
                            uploadResult: JSON.stringify(data, null, 2)
                          });
                          clearInterval(that.intervalId);

                        //跳转至结果页面
                        wx.navigateTo({
                            url: '../result/result',

                            //跳转成功
                            success: function () {
                                console.log('Jump success')
                            },

                            //跳转失败
                            fail: function () {
                                console.log('Jump fail')
                                wx.showToast({
                                    title: '跳转失败',    //显示的标题
                                    icon: 'error',  //显示的图标
                                    duration: 3000    //显示的时间2s
                                })
                            }
                        })
                    },

                    //上传失败
                    fail: function (res) {
                        console.log("UploadFile fail")
                        wx.showToast({
                            title: '上传失败',    //显示的标题
                            icon: 'error',  //显示的图标
                            duration: 2500    //显示的时间2.5s
                        })
                    },
                    complete: function (res) { }
                })
                that.getProgress();
            },

            //选择文件失败
            fail: function (res) {
                console.log('chooseFile fail')
            },
            complete: (res) => { },
        })
    },

    getProgress: function () {
        var that = this;
        that.intervalId = setInterval(function () { // 每秒请求一次进度条
          wx.request({
            url: 'https://cnvpcuc.com:34430/progress',
            method: 'GET',
            success: function (res) {
              //var progressValue = (res.data.n / res.data.total * 100).toFixed(2) + '%';
              var progressValue = 'loading...';
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
})