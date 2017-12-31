import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ToastAndroid,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    PixelRatio,
    StatusBar
} from 'react-native';
import Video from 'react-native-video'
import Setbox from './set.android';
import CreatRoom from './creatRoom';
import JoinRoom from './joinRoom';
import Orientation from 'react-native-orientation';

const pt2px = pt => PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px => PixelRatio.roundToNearestPixel(px);
export default class HomeScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            host: "http://192.168.0.251:8080/guess/",
            widths: "100%",
            heights: "100%",
            //加入房间的开关
            joinroom: false,
            //创建房间的开关
            creatroom: false,
            //设置弹框的开关
            setFlag: false,
            recordFlag: false,
            helpFlag: false,
            test: "test data",
            //登录信息
            loginInfo: {},
            // 房间号
            roomid: "",
            pause: true,
            pause2: true
        };
    }
    
    componentWillMount(e) {
    
    }
    
    componentDidMount() {
        s
        Orientation.lockToLandscape();
    }
    
    //创建房间
    creactroom() {
        //获取房间号
        const url = this.state.host + "select/a/room";
        fetch(url, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
            .then((response) =>
                // console.log(response)
                response.json()
            )
            .then((responseData) => {
                this.setState((prevState, props) => {
                    return {
                        creatroom: true,
                        roomid: responseData.roomid
                    };
                });
            })
            .done();
    }
    
    joinroom() {
        this.setState((prevState, props) => {
            return {joinroom: true};
        });
    }
    
    setbox() {
        this.setState((prevState, props) => {
            return {setFlag: true};
        });
    }
    
    record() {
        this.setState((prevState, props) => {
            return {recordFlag: true};
        });
    }
    
    help() {
        this.setState((prevState, props) => {
            return {helpFlag: true};
        });
    }
    
    transferCloseC(msg) {
        this.setState({
            creatroom: msg
        })
    }
    
    transferCloseJ(msg) {
        this.setState({
            joinroom: msg
        })
    }
    
    transferSet(msg) {
        this.setState({
            setFlag: msg
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar animated={true} hidden={true} backgroundColor={'blue'} translucent={true}
                           barStyle={'default'} showHideTransition={'fade'} networkActivityIndicatorVisible={true}/>
                {/*//背景音乐*/}
                <Video
                    source={require('../list/video/game.mp3')}
                    paused={this.state.pause}
                />
                {/*音效音乐*/}
                <Video
                    source={require('../list/video/bg.mp3')}
                    paused={this.state.pause2}
                />
                <Image style={[styles.backgroundImg, {width: this.state.widths, height: this.state.heights}]}
                       source={require('../list/main/main_bg.png')}/>
                <View style={styles.roomabout}>
                    <TouchableOpacity onPress={this.creactroom.bind(this)}>
                        <Image style={styles.creatroom} source={require('../list/main/icon_found.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.joinroom.bind(this)}>
                        <Image style={styles.creatroom} source={require('../list/main/icon_join.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.infotop}>
                    <View style={styles.rightset}>
                        <View style={styles.setlog}>
                            <TouchableOpacity onPress={this.record.bind(this)}>
                                <Image source={require("../list/main/icon_record.png")}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.setlog}>
                            <TouchableOpacity onPress={this.help.bind(this)}>
                                <Image source={require("../list/main/icon_help.png")}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.setlog}>
                            <TouchableNativeFeedback
                                onPress={this.setbox.bind(this)}
                                background={TouchableNativeFeedback.SelectableBackground()}>
                                <Image source={require("../list/main/icon_setting.png")}/>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <Image style={styles.logo} source={require('../list/main/logo.png')}/>
                    <View style={styles.infoleft}>
                        <View style={styles.userhead}>
                            <Image style={styles.ushdimg} source={require('../list/bacggroundImg/uh.jpg')}/>
                        </View>
                        <View style={styles.infoother}>
                            <Text style={styles.username}>昵称</Text>
                            <Text style={styles.username}>ID:用户ID</Text>
                            <View style={styles.monney}>
                                <Image style={styles.bgmon} source={require('../list/main/money_bg.png')}/>
                                <Image style={styles.monlogo} source={require('../list/main/icon_money.png')}/>
                                <Image style={styles.monadd} source={require('../list/main/icon_add.png')}/>
                                <Text style={[styles.username, styles.monval]}>232656565</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <CreatRoom navigator={this.props.navigator}
                           creatroom={this.state.creatroom}
                           playerid={this.state.loginInfo.playerid}
                           roomid={this.state.roomid}
                           transferCloseC={msg => this.transferCloseC(msg)}/>
                <JoinRoom navigator={this.props.navigator}
                          joinroom={this.state.joinroom}
                          playerid={this.state.loginInfo.playerid}
                          roomid={this.state.roomid}
                          transferCloseJ={msg => this.transferCloseJ(msg)}/>
                <Setbox setFlag={this.state.setFlag}
                        transferAduio={(msg) => {
                            this.setState({pause: msg})
                        }}
                        transferAduio2={(msg) => {
                            this.setState({pause2: msg})
                        }}
                        transferSet={msg => this.transferSet(msg)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImg: {
        // width:Dimensions.get('window').width,
        // height:Dimensions.get('window').height,
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
        width: 280,
        height: 136,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    num_bg: {
        position: "absolute",
        left: px2pt(38),
        top: px2pt(80),
        width: "100%",
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
        left: px2pt(28),
        top: px2pt(30),
        width: "100%",
        height: px2pt(40),
        textAlign: 'center',
        lineHeight: px2pt(40),
        color: "#D88628",
        fontSize: 14,
    },
    //CreatRoom----------------------------------------------
    crroom: {
        width: 220,
        height: 280,
        position: "absolute",
        left: -170,
        top: px2pt(40),
        marginLeft: "50%",
        // backgroundColor:"#fff"
    },
    bgcr: {
        position: "absolute",
        left: 0,
        top: 20
    },
    bgcr_1: {
        position: "absolute",
        left: 20,
        top: 60,
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        position: "relative"
    },
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

