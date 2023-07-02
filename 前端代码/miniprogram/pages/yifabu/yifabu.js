// pages/yifabu/yifabu.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        helpinglist:[
            {
                tip:null,
                details:null,
                loc:null,
                Img:null
            }
        ]
    },
    
    getyifabu(){
        let helpinglist
        let that=this
        wx.cloud.database().collection('forhelp_info').where({
            ID:app.globalData.userInfo.ID,
            nickname:app.globalData.userInfo.nickname,
        }).get({
            success(res){
                console.log(res.data)
                helpinglist=res.data
                that.setData({
                    helpinglist
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getyifabu()
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
        this.setData({
            userInfo:app.globalData.userInfo
            
        }),
        this.getyifabu()
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