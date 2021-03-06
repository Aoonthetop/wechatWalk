// pages/pkcreate/pkcreate.js
const db=wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    btnSub(res) {
        const {
            gameId,
            gameName,
            gameRule,
            beginTime,
            overTime,
            player
        } = res.detail.value
        db.collection("pk").add({
            data: {
                gameId:gameId,
                gameName:gameName,
                gameRule:gameRule,
                beginTime:beginTime,
                overTime:overTime,
                player:[{player,gameId}]
            },

        }).then(
            wx.showToast({
              title: '创建成功',
              success: function () {
                wx.switchTab({
                  url: '../pk/pk',
                })
            },
            })
        )
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

    }
})