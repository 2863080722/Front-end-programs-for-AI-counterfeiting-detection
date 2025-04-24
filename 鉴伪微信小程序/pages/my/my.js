// logs.js
const util = require('../../utils/util.js')

Component({
  data: {
    logs: [],
    //存放三项功能的列表
    gridlist:[]
  },
  lifetimes: {
    attached() {
      this.setData({
        logs: (wx.getStorageSync('logs') || []).map(log => {
          return {
            date: util.formatTime(new Date(log)),
            timeStamp: log
          }
        })
      })
    }
  },

})
