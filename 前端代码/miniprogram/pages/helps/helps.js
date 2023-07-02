// pages/helps/helps.js
const app=getApp()
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        help:[{
            _id:null,
            tip:null,
            details:null,
            loc:null,
            Img:null,
            ID:null
        }]
    },

    gethelp(){
        let help
        let that=this
        wx.cloud.database().collection('forhelp_info').where({
            _id:this.data.help._id,
        }).get({
            success(res){
                //console.log(res.data)
                help=res.data
                that.setData({
                    help:res.data
                })
            }
        })
        console.log(this.data.help)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.data.help._id=options._id
        this.gethelp()
        console.log(this.data.help._id)
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
        this.gethelp()
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