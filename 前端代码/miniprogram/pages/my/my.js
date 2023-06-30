// pages/my/my.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        xinxi:[
            {
              icon: "../../image/class.png",
              title: "反馈",
              /*littleTitle: "访客班级",*/
              click: "class"
            },{
              icon: "../../image/academy.png",
              title: "退出",
              /*littleTitle: "访客专业",*/
              click: "academy"
            }
        ],
        list:[
            {
              icon: "../../image/aboutUs.png",
              title: "已发布求助",
              click: "go_yifabu",
              littleTitle: "0"
            }, {
              icon: "../../image/update.png",
              title: "已帮助求助",
              click: "journal",
              littleTitle: "0"
            }, {
              icon: "../../image/login.png",
              title: "勋章",
              click: "login",
              littleTitle: "0"
            }
        ]
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
        this.setData({
            userInfo:app.globalData.userInfo
            
        })
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {

            this.getTabBar().setData({

                selected: 4

            })

        }

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

    },
    go_yifabu(){
        wx.navigateTo({
          url: '../yifabu/yifabu',
        })
    }
})