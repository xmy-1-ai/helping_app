const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        helpedlist:[
            {
                tip:null,
                details:null,
                loc:null,
                Img:null
            }
        ]
    },
    
    gethelped(){
        let helpedlist
        let that=this
        wx.cloud.database().collection('forhelp_info').where({
            helperid:app.globalData.userInfo.ID,
            helpernickname:app.globalData.userInfo.nickname,
        }).get({
            success(res){
                console.log(res.data)
                helpedlist=res.data
                that.setData({
                    helpedlist
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.gethelped()
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
        this.gethelped()
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