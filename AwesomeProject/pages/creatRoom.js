import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    PixelRatio,
    StatusBar
} from 'react-native';
import OpenBallbank from "./openBallbank";
import CookieManager from 'react-native-cookies';
const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px=>PixelRatio.roundToNearestPixel(px);
//创建房间
export default class CreatRoom extends Component{
    constructor(props){
        super(props);
        this.state={
            host:"http://192.168.0.251:8080/guess/",
            createflag:true,
            //选择人数
            peoNub1:true,
            peoNub2:false,
            peoNub3:false,
            //开启欢乐豆
            beanFlag:false
        }
    }
    closeBox(){
        this.props.transferCloseC(false)
    }
    componentWillMount() {
    
    }
    happyBallHanld(){
        if(this.state.beanFlag){
            this.setState({
                beanFlag:false
            })
        }else{
            this.setState({
                beanFlag:true
            })
        }
    }
    choosepeo(one){
        if(one==1){
            this.setState({
                peoNub1:true,
                peoNub2:false,
                peoNub3:false,
            })
        }else if(one==2){
            this.setState({
                peoNub1:false,
                peoNub2:true,
                peoNub3:false,
            })
        }else if(one==3){
            this.setState({
                peoNub1:false,
                peoNub2:false,
                peoNub3:true,
            })
        }
    }
    //sure进入房间
    sure(){
        const url=this.state.host+"create/a/room"
        fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:"playerid="+this.props.playerid+"&roomid="+this.props.roomid+"&homepeopleNum=10"
        })
            .then((response) =>
                // console.log(response)
                response.json()
            )
            .then((responseData) => {
            console.log(responseData)
                CookieManager.get(url)
                    .then((res) => {
                        console.log(res);
                        this.setState({
                            cookie:res.JSESSIONID
                        })
                        var ws = new WebSocket('ws://192.168.0.251:8080/guess/ws/',{
                            headers:{
                                cookie:res.JSESSIONID
                            }
                        });
                        ws.onopen = () => {
                            //打开一个连接
                            ws.send('something'); // 发送一个消息
                        };
    
                        ws.onmessage = (e) => {
                            // 接收到了一个消息
                            console.log(e.data);
                        };
    
                        ws.onerror = (e) => {
                            // 发生了一个错误
                            console.log(e);
                        };
    
                        ws.onclose = (e) => {
                            // 连接被关闭了
                            console.log(e.code, e.reason);
                        };
                    });
            // console.log(responseData)

                // this.props.navigator.replace({
                //     scene: OpenBallbank,
                //     passProps: {
                //         cookie:this.state.cookie,
                //         roomInfo: responseData
                //     },
                // });
            });
           

    }
    render(){
        // alert(this.state.ok)
        if(this.props.creatroom){
            return(
                <View style={styles.container}>
                <View style={[styles.crroom]}>
                    <Image style={styles.bgcr} source={require('../list/bacggroundImg/8.png')} />
                    <View  style={styles.bgcr_1}>
                        <View style={styles.bgcr_1_1}>
                            <Text style={styles.c_head}>{this.props.playerid}</Text>
                            <Image style={styles.bgcr_1_1_img} source={require('../list/bacggroundImg/prepareWithinBorderCreate.png')} />
                            <View style={styles.choosed_th}>
                                <Image style={styles.choosed_lis_img} source={require('../list/bacggroundImg/45.png')} />
                                <TouchableNativeFeedback onPress={this.choosepeo.bind(this,1)}>
                                    <Image style={[styles.choosed_lis_img,{opacity:this.state.peoNub1?1:0}]} source={require('../list/bacggroundImg/46.png')} />
                                </TouchableNativeFeedback>
                                <Text style={styles.choosed_lis_wd}>10人</Text>
                            </View>
                            <View style={styles.choosed_th}>
                                <Image style={styles.choosed_lis_img} source={require('../list/bacggroundImg/45.png')} />
                                <TouchableNativeFeedback onPress={this.choosepeo.bind(this,2)}>
                                    <Image style={[styles.choosed_lis_img,{opacity:this.state.peoNub2?1:0}]} source={require('../list/bacggroundImg/46.png')} />
                                </TouchableNativeFeedback>
                                <Text style={styles.choosed_lis_wd}>20人</Text>
                            </View>
                            <View style={styles.choosed_th}>
                                <Image style={styles.choosed_lis_img} source={require('../list/bacggroundImg/45.png')} />
                                <TouchableNativeFeedback onPress={this.choosepeo.bind(this,3)}>
                                    <Image style={[styles.choosed_lis_img,{opacity:this.state.peoNub3?1:0}]} source={require('../list/bacggroundImg/46.png')} />
                                </TouchableNativeFeedback>
                                <Text style={styles.choosed_lis_wd}>30人</Text>
                            </View>
                        </View>
                        <View style={styles.bgcr_1_2}>
                            <Text style={styles.c_head}>开启欢乐豆</Text>
                            <Image style={styles.bgcr_1_1_img} source={require('../list/bacggroundImg/prepareWithinBorderCreate.png')} />
                            <View style={styles.choosed_th}>
                                <Image style={styles.choosed_lis_img} source={require('../list/bacggroundImg/45.png')} />
                                <TouchableNativeFeedback onPress={this.happyBallHanld.bind(this)}>
                                <Image style={[styles.choosed_lis_img,{opacity:this.state.beanFlag?1:0}]} source={require('../list/bacggroundImg/46.png')} />
                                </TouchableNativeFeedback>
                                <Text style={styles.choosed_lis_wd}>10人</Text>
                            </View>
                          
                        </View>
                    </View>
                    <Image style={styles.crhead} source={require('../list/bacggroundImg/btn_found.png')} />
                    <TouchableNativeFeedback onPress={this.sure.bind(this)}>
                        <Image style={styles.creat_sure} source={require('../list/main/confirm.png')} />
                    </TouchableNativeFeedback>
                    <TouchableOpacity style={styles.creatclose} onPress={this.closeBox.bind(this)}>
                        <Image  source={require('../list/joinRoom/icon_close.png')} />
                    </TouchableOpacity>
                </View>
                </View>
            )
        }else{
            return null;
        }
    }
}
const styles = StyleSheet.create({
    container:{
        position:"absolute",
        left:0,
        top:0,
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"rgba(0,0,0,0.5)",
    },
    creatclose:{
        position:"absolute",
        right:px2pt(0),
        top:px2pt(14)
    },
    //JoinRoom-----------------------------------------------
    numberbox:{
        position:"absolute",
        left:14,
        bottom:10,
        width:"100%",
        height:136,
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"
    },
    num_bg:{
        position:"absolute",
        left:px2pt(30),
        top:px2pt(80),
        width:px2pt(290),
        height:200,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        flexWrap:"wrap",
        // backgroundColor:"#fffeee"
    },
    num_bg_1:{
        width:"16%",
        height:px2pt(50),
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },
    numeve:{
        marginLeft:6,
        marginTop:4
    },
    textSt:{
        position:"absolute",
        left:0,
        bottom:0,
        width:"100%",
        height:"100%",
        color:"#fff",
        textAlign:"center",
        lineHeight:px2pt(30)
    },
    inhead:{
        position:"absolute",
        left:px2pt(28),
        top:px2pt(30),
        width:"100%",
        height:px2pt(40),
        textAlign:'center',
        lineHeight:px2pt(40),
        color:"#D88628",
        fontSize:14,
    },
    //CreatRoom----------------------------------------------
    crroom:{
        width:px2pt(347),
        height:px2pt(259),
        position:"relative"
    },
    bgcr:{
        position:"absolute",
        left:0,
        top:20
    },
    bgcr_1:{
        position:"absolute",
        left:20,
        top:60,
        width:308,
        height:210
    },
    bgcr_1_:{
        position:"absolute",
        left:0,
        top:0,
        width:308,
        height:210
    },
    btn_sure:{
        position:"absolute",
        left:93,
        top:164,
        width:121,
        height:38,
        zIndex:99
    },
    bgcr_1_1:{
        position:"absolute",
        left:15,
        top:10,
        width:277,
        height:62,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    c_head:{
        position:"absolute",
        left:0,
        bottom:"100%",
        width:"100%",
        height:18,
        fontSize:12,
        textAlign:"center",
        color:"#d88628"
    },
    bgcr_1_2:{
        position:"absolute",
        left:15,
        top:90,
        width:277,
        height:62,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    choosed_lis_img:{
        position:"absolute",
        left:20,
        top:18,
    },
    choosed_lis_img_:{
        width:27,
        height:27
    },
    choosed_lis_wd:{
        height:62,
        width:92,
        lineHeight:42,
        marginLeft:47,
    },
    choosed_th:{
        height:62,
        width:92,
        position:"relative",
        
    },
    bgcr_1_1_img:{
        position:"absolute",
        left:0,
        top:0,
        width:277,
        height:62
    },
    creat_sure:{
        position:"absolute",
        left:108,
        bottom:12,
    },
    crhead:{
        position:"absolute",
        left:108,
        top:15,
        width:131,
        height:34
    },
    //HomeScene-=--------------------------------------------
    roomabout:{
        position:"absolute",
        width:"100%",
        height:200,
        left:0,
        bottom:px2pt(30),
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    creatroom:{
        marginLeft:100,
        marginRight:100
    },
    //top
    infotop:{
        position:"absolute",
        left:0,
        top:0,
        width:"100%",
        height:60,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        backgroundColor:"rgba(0,0,0,0.3)"
    },
    rightset:{
        width:160,
        height:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        position:"absolute",
        right:0,
        top:0,
    },
    setlog:{
        width:35,
        height:60,
        marginRight:20,
        marginTop:10
    },
    logo:{
        height:40,
        width:112,
        marginTop:8
    },
    infoleft:{
        position:"absolute",
        left:5,
        top:4,
        width:200,
        height:60,
        display:"flex",
        flexDirection:"row",
    },
    userhead:{
        width:50,
        height:50,
        backgroundColor:"#ffffff",
        borderRadius:8,
        overflow:"hidden"
    },
    ushdimg:{
        width:50,
        height:50,
        borderRadius:8,
    },
    infoother:{
        height:"100%",
        width:px2pt(70),
        marginLeft:14
    },
    username:{
        height:16,
        width:"100%",
        color:"#D05130",
        fontSize:14,
    },
    monney:{
        height:18,
        width:94,
        marginTop:2,
        position:"relative"
    },
    bgmon:{
        position:"absolute",
        left:0,
        top:0,
    },
    monlogo:{
        position:"absolute",
        left:0,
        top:0,
    },
    monadd:{
        position:"absolute",
        right:0,
        top:0,
    },
    monval:{
        position:"absolute",
        left:20,
        top:0,
        width:70,
        color:"#ffffff",
        lineHeight:18,
        fontSize:14
    }
});