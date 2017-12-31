import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    AsyncStorage,
    TouchableNativeFeedback,
    PixelRatio,
    StatusBar
} from 'react-native';
import Setbox from "./set.android";
import Registry from "./registry";
import OpenBallplayer from "./openBallplayer"
// import Orientation from 'react-native-orientation'
import CookieManager from 'react-native-cookies'

const pt2px = pt => PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px => PixelRatio.roundToNearestPixel(px);
//加入房间
export default class JoinRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            host: "http://192.168.0.251:8080/guess/",
            joninFlag: true,
            nub1: "",
            nub2: "",
            nub3: "",
            nub4: "",
            nub5: "",
            nub6: ""
        }
    }
    
    componentWillMount() {
    
    }
    
    closeBox() {
        this.props.transferCloseJ(false)
    }
    
    numHanld(one) {
        if ((typeof this.state.nub1) == "string") {
            this.setState({
                nub1: one
            })
        } else if ((typeof this.state.nub2) == "string") {
            this.setState({
                nub2: one
            })
        } else if ((typeof this.state.nub3) == "string") {
            this.setState({
                nub3: one
            })
        } else if ((typeof this.state.nub4) == "string") {
            this.setState({
                nub4: one
            })
        } else if (((typeof this.state.nub5) == "string")) {
            this.setState({
                nub5: one
            })
        } else if ((typeof this.state.nub6) == "string") {
            this.setState({
                nub6: one
            })
        } else {
            return;
        }
    }
    
    //重输
    enterAgain() {
        this.setState({
            nub1: "",
            nub2: "",
            nub3: "",
            nub4: "",
            nub5: "",
            nub6: ""
        })
    }
    
    //删除
    deletenub() {
        if (this.state.nub6) {
            this.setState({
                nub6: ""
            })
        } else if (this.state.nub5) {
            this.setState({
                nub5: ""
            })
        } else if (this.state.nub4) {
            this.setState({
                nub4: ""
            })
        } else if (this.state.nub3) {
            this.setState({
                nub3: ""
            })
        } else if (this.state.nub2) {
            this.setState({
                nub2: ""
            })
        } else if (this.state.nub1) {
            this.setState({
                nub1: ""
            })
        } else {
            return;
        }
    }
    
    joinRoom() {
        const roomid = String(this.state.nub1) + String(this.state.nub2) + String(this.state.nub3) + String(this.state.nub4) + String(this.state.nub5) + String(this.state.nub6);
        console.log(roomid);
        console.log(this)
        const url = this.state.host + "join/a/room";
        console.log(url);
        // console.log('playerid='+this.props.playerid+'&homepeopleNum='+roomid)
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     body:'playerid='+this.props.playerid+'&roomid='+roomid
        // })
        //     .then((response) =>
        //         // console.log(response)
        //         response.json())
        //     .then((responseData) => {
        //        console.log(responseData)
        //         // self.props.navigator.push({
        //         //     scene: HomeScene,
        //         //     passProps: {
        //         //         loginInfo: responseData
        //         //     },
        //         // });
        //     })
        //     .done();
        this.props.navigator.push({
            scene: OpenBallplayer,
            passProps: {
                loginInfo: ""
            },
        });
        
    }
    
    render() {
        if (this.props.joinroom && this.state.joninFlag) {
            return (
                <View style={styles.container}>
                    <View style={[styles.crroom]}>
                        <Image style={styles.bgcr} source={require('../list/bacggroundImg/8.png')}/>
                        <Text style={styles.inhead}>请输入房间号</Text>
                        <View style={styles.num_bg}>
                            <View style={styles.num_bg_1}>
                                <Image source={require('../list/joinRoom/num_bg.png')}/>
                                <Text style={[styles.num_bg_1_, styles.textSt]}>{this.state.nub1}</Text>
                            </View>
                            <View style={styles.num_bg_1}>
                                <Image source={require('../list/joinRoom/num_bg.png')}/>
                                <Text style={[styles.num_bg_1_, styles.textSt]}>{this.state.nub2}</Text>
                            </View>
                            <View style={styles.num_bg_1}>
                                <Image source={require('../list/joinRoom/num_bg.png')}/>
                                <Text style={[styles.num_bg_1_, styles.textSt]}>{this.state.nub3}</Text>
                            </View>
                            <View style={styles.num_bg_1}>
                                <Image source={require('../list/joinRoom/num_bg.png')}/>
                                <Text style={[styles.num_bg_1_, styles.textSt]}>{this.state.nub4}</Text>
                            </View>
                            <View style={styles.num_bg_1}>
                                <Image source={require('../list/joinRoom/num_bg.png')}/>
                                <Text style={[styles.num_bg_1_, styles.textSt]}>{this.state.nub5}</Text>
                            </View>
                            <View style={styles.num_bg_1}>
                                <Image source={require('../list/joinRoom/num_bg.png')}/>
                                <Text style={[styles.num_bg_1_, styles.textSt]}>{this.state.nub6}</Text>
                            </View>
                        </View>
                        <View style={styles.bgcr_1}>
                            <TouchableOpacity style={styles.joinclose} onPress={this.closeBox.bind(this)}>
                                <Image source={require('../list/joinRoom/icon_close.png')}/>
                            </TouchableOpacity>
                            <View style={styles.numberbox}>
                                <TouchableOpacity style={styles.numeve} onPress={this.numHanld.bind(this, 1)}>
                                    <Image source={require('../list/joinRoom/num_one.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.numeve} onPress={this.numHanld.bind(this, 2)}>
                                    <Image source={require('../list/joinRoom/num_two.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.numeve} onPress={this.numHanld.bind(this, 3)}>
                                    <Image source={require('../list/joinRoom/num_three.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.numeve} onPress={this.numHanld.bind(this, 4)}>
                                    <Image source={require('../list/joinRoom/num_four.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.numeve} onPress={this.numHanld.bind(this, 5)}>
                                    <Image source={require('../list/joinRoom/num_five.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.numeve} onPress={this.numHanld.bind(this, 6)}>
                                    <Image source={require('../list/joinRoom/num_six.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.numeve} onPress={this.numHanld.bind(this, 7)}>
                                    <Image source={require('../list/joinRoom/num_seven.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.numeve} onPress={this.numHanld.bind(this, 8)}>
                                    <Image source={require('../list/joinRoom/num_eight.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.numeve} onPress={this.numHanld.bind(this, 9)}>
                                    <Image source={require('../list/joinRoom/num_nine.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.numeve} onPress={this.enterAgain.bind(this)}>
                                    <Image source={require('../list/joinRoom/num_again.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.numeve} onPress={this.numHanld.bind(this, 0)}>
                                    <Image source={require('../list/joinRoom/num_zero.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.numeve} onPress={this.deletenub.bind(this)}>
                                    <Image source={require('../list/joinRoom/num_delete.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Image style={styles.crhead} source={require('../list/joinRoom/dialog_join.png')}/>
                        <TouchableOpacity style={styles.sure} onPress={this.joinRoom.bind(this)}>
                            <Image source={require('../list/main/confirm.png')}/>
                        </TouchableOpacity>
                    
                    </View>
                </View>
            )
        } else {
            return null;
        }
        
    }
}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    sure: {
        position: "absolute",
        left: "50%",
        marginLeft: px2pt(-60),
        bottom: px2pt(-4),
        // backgroundColor:"#000"
    },
    joinclose: {
        position: "absolute",
        right: px2pt(-20),
        top: px2pt(-46)
    },
    creatclose: {
        position: "absolute",
        right: px2pt(-50),
        top: px2pt(12)
    },
    //JoinRoom-----------------------------------------------
    numberbox: {
        position: "absolute",
        left: 14,
        bottom: 10,
        width: "100%",
        height: 136,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    num_bg: {
        position: "absolute",
        left: px2pt(30),
        top: px2pt(60),
        width: px2pt(290),
        height: 200,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        // backgroundColor:"#fffeee"
    },
    num_bg_1: {
        width: "16%",
        height: px2pt(50),
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    numeve: {
        marginLeft: 6,
        marginTop: 4
    },
    textSt: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        color: "#fff",
        textAlign: "center",
        lineHeight: px2pt(30)
    },
    inhead: {
        position: "absolute",
        left: px2pt(20),
        top: px2pt(20),
        width: "100%",
        height: px2pt(40),
        textAlign: 'center',
        lineHeight: px2pt(40),
        color: "#D88628",
        fontSize: 14,
    },
    //CreatRoom----------------------------------------------
    crroom: {
        width: px2pt(347),
        height: px2pt(259),
    },
    bgcr: {
        position: "absolute",
        left: 0,
        top: 20
    },
    bgcr_1: {
        position: "absolute",
        left: 20,
        top: 35,
        width: 308,
        height: 210
    },
    bgcr_1_: {
        position: "absolute",
        left: 0,
        top: 0,
        width: 308,
        height: 210
    },
    btn_sure: {
        position: "absolute",
        left: 93,
        top: 164,
        width: 121,
        height: 38,
        zIndex: 99
    },
    bgcr_1_1: {
        position: "absolute",
        left: 15,
        top: 10,
        width: 277,
        height: 62,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    c_head: {
        position: "absolute",
        left: 0,
        bottom: "100%",
        width: "100%",
        height: 18,
        // backgroundColor:"#fff",
        fontSize: 12,
        textAlign: "center",
        color: "#d88628"
    },
    bgcr_1_2: {
        position: "absolute",
        left: 15,
        top: 90,
        width: 277,
        height: 62,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    choosed_lis_img: {
        position: "absolute",
        left: 20,
        top: 18,
        width: 23,
        height: 25,
    },
    choosed_lis_img_: {
        width: 27,
        height: 27
    },
    choosed_lis_wd: {
        height: 62,
        width: 92,
        lineHeight: 42,
        marginLeft: 47,
        // backgroundColor:"#bbb0ef",
    },
    choosed_th: {
        height: 62,
        width: 92,
        position: "relative",
        
    },
    bgcr_1_1_img: {
        position: "absolute",
        left: 0,
        top: 0,
        width: 277,
        height: 62
    },
    creat_sure: {
        position: "absolute",
        left: 108,
        bottom: 24,
    },
    crhead: {
        position: "absolute",
        left: 108,
        top: 15,
        width: 131,
        height: 34
    },
    //HomeScene-=--------------------------------------------
    
    roomabout: {
        position: "absolute",
        width: "100%",
        height: 200,
        left: 0,
        bottom: px2pt(30),
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    creatroom: {
        marginLeft: 100,
        marginRight: 100
    },
    //top
    infotop: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.3)"
    },
    rightset: {
        width: 160,
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        right: 0,
        top: 0,
    },
    setlog: {
        width: 35,
        height: 60,
        marginRight: 20,
        marginTop: 10
    },
    logo: {
        height: 40,
        width: 112,
        marginTop: 8
    },
    infoleft: {
        position: "absolute",
        left: 5,
        top: 4,
        width: 200,
        height: 60,
        display: "flex",
        flexDirection: "row",
    },
    userhead: {
        width: 50,
        height: 50,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        overflow: "hidden"
    },
    ushdimg: {
        width: 50,
        height: 50,
        borderRadius: 8,
    },
    infoother: {
        height: "100%",
        width: px2pt(70),
        marginLeft: 14
    },
    username: {
        height: 16,
        width: "100%",
        color: "#D05130",
        fontSize: 14,
    },
    monney: {
        height: 18,
        width: 94,
        marginTop: 2,
        position: "relative"
    },
    bgmon: {
        position: "absolute",
        left: 0,
        top: 0,
    },
    monlogo: {
        position: "absolute",
        left: 0,
        top: 0,
    },
    monadd: {
        position: "absolute",
        right: 0,
        top: 0,
    },
    monval: {
        position: "absolute",
        left: 20,
        top: 0,
        width: 70,
        color: "#ffffff",
        lineHeight: 18,
        fontSize: 14
    }
});