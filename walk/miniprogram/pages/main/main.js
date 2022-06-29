// pages/main/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        latitude: 10.11,
        longitude: 10.11,
        todayRun:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this
        //获取当前的地理位置
        wx.getLocation({
            // 获取成功
            success: function (res) {
                //赋值经纬度
                that.setData({
                    latitude: res.latitude,
                    longitude: res.longitude,
                })
            }
        }),
        this.gettodayRun()
    },
    gettodayRun(){
        wx.getWeRunData({
          success: (res) => {
              wx.cloud.callFunction({
                  name:'deswerundata',
                  data:{
                      weRunData:wx.cloud.CloudID(res.cloudID)
                  }
              }).then((res)=>{
                  this.setData({
                      todayRun:res.result.weRunData.data.stepInfoList[0].step
                  })
                  console.log(res.result.weRunData.data.stepInfoList[0].step)
              })
          },
        })
    },
    getUserRun() {
        wx.getSetting({
            success(res) {
                if (!res.authSetting['scope.werun']) {
                    //申请权限
                    wx.authorize({
                        scope: 'scope.werun',
                        success() {
                            self.getUserRun()
                        },
                        fail() {
                            wx.showModal({
                              content: '请点击设置中开启权限',
                              title: '读取微信运动失败',
                            })
                        }
                    })
                } else {
                    //读取数据
                }
            }
        })
    },
    jump(){
        wx.switchTab({
          url: '../pk/pk',
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.getUserRun()

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

    }
})