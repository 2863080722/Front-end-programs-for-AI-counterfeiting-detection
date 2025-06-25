// pages/result/result.js
const app = getApp()

Page({


    data: {
        Result_all:" ",
        mvss_prediction: " ",
        osn_prediction: " ",
        mabc_prediction: " ",
        result_txt_afd: " ",
        deep_audio_trace:" ",
        scores_all: " ",
        scores_all_img:" ",
        scores_all_audio:" ",

        uploadResult: " "
    },

    onLoad(options) {
        this.setData({ 
            uploadResult: app.globalData.uploadResult ,

            Result_all: app.globalData.Result_all,
            mvss_prediction: app.globalData.mvss_prediction,
            osn_prediction: app.globalData.osn_prediction,
            mabc_prediction: app.globalData.mabc_prediction,
            result_txt_afd: app.globalData.result_txt_afd,
            deep_audio_trace: app.globalData.deep_audio_trace,
            scores_all: app.globalData.scores_all,
            scores_all_img: app.globalData. scores_all_img,
            scores_all_audio: app.globalData.scores_all_audio

        })
    },

})