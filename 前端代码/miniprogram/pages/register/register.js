// pages/login/login.js
const app=getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        Img:"/image/me.png",
        nickname:"昵称",
        defaultText:'用户ID'
    },
    getUserProfile(){
        var that=this
        wx.cloud.callFunction({
            name: 'cloudbase_auth',
            success: res => {
              const openid = res.result.openid;
              console.log('openid',openid)
              that.setData({
                openid: openid
              })
              console.log('openid',that.data.openid)  
              wx.cloud.database().collection('user_info').where({
                _openid:that.data.openid
            }).get({
                success(res){
                  wx.showToast({
                    title: '您已注册，请直接登录！',
                    icon:'none'
                  })
                  console.log('已注册')
                  setTimeout(()=>{
                  wx.reLaunch({
                    url: '../login/login',
                  })
                },2000)
                },
                fail:err=>{
                    wx.cloud.callFunction({
                        name: 'cloudbase_auth',
                        success: res => {
                           that.setData({
                               userId:res.result.userID,
                               defaultText:'用户'+res.result.userID
                           })
                          console.log('id:',that.data.userId)
                        },
                        fail: err => {
                          console.error(err)
                        }
                      });
                      wx.getUserProfile({
                        desc: '展示用户信息',
                        success:(res =>{
                            console.log(res)
                            that.setData({
                                Img:res.userInfo.avatarUrl,
                                nickname:res.userInfo.nickName
                            })
                        })
                      })
                }
            })
            },
          });
        },
        //获取用户微信的头像
    formSubmit(e){
        let info
        let that=this
        info=e.detail.value
        if(info.password==''||info.confirmpassword==''){
            wx.showToast({
              title: '请输入密码!',
              icon:'none'
            })
        }
        else if(info.password!=''&&info.confirmpassword!=''&&info.password==info.confirmpassword){
            wx.cloud.database().collection('user_info').add(
                {
                    data:{
                        time:Date.now(),
                        ...info,
                        Img:that.data.Img,
                        nickname:that.data.nickname,
                        userId:that.data.userId
                    },success(res){
                        wx.cloud.database().collection('user_info').doc(res._id).get({
                            success(res){
                                console.log(res)
                                app.globalData.userInfo=res.data
                            }
                        })
                    }
                }
            )
            
            wx.showToast({
                title: '注册成功！',
                icon: 'none'
              })

              setTimeout(()=>{
                wx.reLaunch({
                  url: '../map/map',
                })
              },500)
              

        }
        else{
            wx.showToast({
              title: '密码不匹配，请重新输入',
              icon: "none"
            })
        }
      //console.log(e.detail.value)
      

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