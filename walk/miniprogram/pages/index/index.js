const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {


    },
    login(res) {
        const {
            phoneNumber,
            password
        } = res.detail.value
        db.collection("walk").where({
            phoneNumber: phoneNumber
        }).get({
            success(res) {
                if (res.data.length === 0) {
                    wx.showModal({
                        title: "该手机未注册",
                        content: "请注册页面进行注册"
                    })
                } else {
                    if (password === res.data[0].password) {
                        wx.showToast({
                            title: '登录成功',
                            icon: 'none'
                        }),
                        
                        
                        wx.switchTab({
                          url: '../main/main',
                        }),
                        wx.setStorageSync("username",res.data[0].username),
                        console.log(res.data[0].username)
                    } else {
                        wx.showToast({
                            title: '密码错误！',
                            icon: 'none'
                        })
                    }


                }
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.login({
            timeout: 5000,
        })
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})