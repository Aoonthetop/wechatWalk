const db = wx.cloud.database()
// pages/register/register.js
Page({

    /**
     * 页面的初始数据
     */

    data: {

    },
    btnSub(res) {
        const {
            comanyName,
            department,
            username,
            jobId,
            password,
            phoneNumber
        } = res.detail.value
        db.collection("walk").add({
            data: {
                comanyName: comanyName,
                department: department,
                username: username,
                jobId: jobId,
                password: password,
                phoneNumber: phoneNumber
            },

        }).then(
            wx.showToast({
              title: '注册成功',
              success: function () {
                wx.navigateTo({
                  url: '../index/index',
                });
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