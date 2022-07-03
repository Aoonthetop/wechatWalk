// pages/game/game.js
const db = wx.cloud.database()
const _=db.command
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userres1:[],
        playList:[],
        testList:[]
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            userres1:wx.getStorageSync('userres')
        })
        let that=this
        console.log(wx.getStorageSync('userres')._id)
        db.collection('pk').where({
            gameId:this.options.gameId0
        }).get({
            success(res){
                that.setData({
                    playList:res.data[0].player
                })
            }
        })
    },
        

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        var userres0=wx.getStorageSync('userres')
        var username=userres0.username
        var step=userres0.todayStep
        var _id=userres0._id
        db.collection('pk').where({
            gameId: this.options.gameId0
        }).get({
            success(res) {
                if (res.data.length === 1) {
                    db.collection('pk').doc(res.data[0]._id).update({
                        data:{
                            player:_.push({username,step,_id})
                        }
                    }),this.onLoad()
                } else {
                    wx.showModal({
                      title:"找不到比赛",
                      showCancel:false,
                    })
                    wx.navigateTo({
                      url: '../pking/pking',
                    })

                }
            }
        })
        db.collection('pk').orderBy('step','desc').get().then(res=>{
            console.log(res.data)
            this.setData({
                testList:res.data
            })
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