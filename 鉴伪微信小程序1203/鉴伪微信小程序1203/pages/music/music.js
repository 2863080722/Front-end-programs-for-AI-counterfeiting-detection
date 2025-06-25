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

    chooseMessageFile() {
        var _this = this
        //选择文件
        wx.chooseMessageFile({
            count: 1,
            type: 'file',
            success: function (res) {
                console.log(res.tempFiles[0].path)
                var mymusic = console.log(res.tempFiles[0].path)

                //上传文件
                wx.uploadFile({
                    filePath: mymusic,
                    name: 'upload',
                    url: 'http://matex.asia:34975',

                    //上传成功
                    success: function (res) {
                        console.log("UploadFile success" + res)
                        //接收网页回传数据
                        wx.request({
                            url: 'url',
                            method: 'GET',
                            success: (res) => {
                                console.log(res)
                                //将网页数据记录在store内
                                
                            }
                        })
                        //跳转至结果页面
                        wx.navigateTo({
                            url: '../result/result',
                            //跳转成功
                            success: function () {
                                console.log('Jump success')
                                wx.showLoading({
                                    title: '加载中...',
                                })
                                setTimeout(function () {
                                    wx.hideLoading()  //关闭提示
                                  }, 2000)
                            
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
            },
            fail: function (res) {
                console.log('chooseFile fail')
            },
            complete: (res) => { },
        })
    }


})