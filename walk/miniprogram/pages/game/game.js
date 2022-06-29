// pages/game/game.js
const db=wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id:1,
        gameList:[],
        todayRun:0,
        username:''

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

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
        this.setData({username:wx.getStorageSync('username')})
    },
    
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        let that=this
        db.collection('pk').where({
            gameId:options.gameId
        }).get({
            success(res){
                if(res.data.length===1){
                    console.log(res.data)
                    that.setData({
                        gameList:res.data,
                    })
                }else{
                    wx.showToast({
                      title: '没有找到该比赛',
                      icon:'none'
                    })
                    
                }
            }
        })

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