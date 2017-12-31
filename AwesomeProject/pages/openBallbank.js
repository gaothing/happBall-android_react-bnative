import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Dimensions,
    Image,
    ScrollView,
    StatusBar,
    TouchableNativeFeedback,
    TouchableOpacity,
    PixelRatio,
    WebView
} from 'react-native';
import Record from './record'
import WS from 'react-native-websocket'
import Orientation from 'react-native-orientation';
import CookieManager from 'react-native-cookies';
import HomeScene from './main.android';

const pt2px = pt => PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px => PixelRatio.roundToNearestPixel(px);
export default class OpenBallbank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            host: "http://192.168.0.251:8080/guess/",
            widths: "100%",
            heights: '100%',
            recordfFlag: false,
            roomInfo: [],
            cookie: ""
        }
    }
    
    componentWillMount() {
        Orientation.lockToLandscape();
    }
    
    //只允许横屏
    componentDidMount() {
        
        // var ws = new WebSocket('ws://192.168.0.251:8080/guess/w/',this.props.cookie);
        
        
        console.log(this.props.roomInfo)
        this.setState({roomInfo: this.props.roomInfo});
    }
    
    //解散房间
    jiesan() {
        
        
        
        //
        // const url=this.state.host+"pull/out/room"
        // fetch(url, {
        //     method: 'post',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     body:"playerid="+this.props.roomInfo
        // })
        //     .then((response) =>
        //         // console.log(response)
        //         response.json()
        //     )
        //     .then((responseData) => {
        //         CookieManager.get(url)
        //             .then((res) => {
        //                 console.log(res);
        //                 this.setState({
        //                     cookie:res.JSESSIONID
        //                 })
        //             });
        //         console.log(responseData)
        //
        //         this.props.navigator.replace({
        //             scene: OpenBallbank,
        //             passProps: {
        //                 cookie:this.state.cookie,
        //                 roomInfo: responseData
        //             },
        //         });
        //     });
        //
        //
        //
        //
        //
        //
        
        
        this.props.navigator.replace({
            scene: HomeScene,
        })
    }
    
    // 邀请好友
    yaoqing() {
    
    }
    
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    hidden={true}
                    backgroundColor={'blue'}
                    translucent={true}
                    barStyle={'default'}
                    showHideTransition={'fade'}
                    networkActivityIndicatorVisible={true}
                />
                <Image style={[styles.backgroundImg, {width: this.state.widths, height: this.state.heights}]}
                       source={require('../list/openball/createBase.png')}
                       resizeMode="contain"/>
                <Image style={styles.head} source={require('../list/openball/createRoomBase.png')}/>
                <View style={styles.roomNumbox}>
                    <Image style={styles.head_t} source={require('../list/openball/prepareRoom.png')}/>
                    <Text style={styles.roomNum}>23113341</Text>
                </View>
                <View style={styles.back}>
                    <Image style={styles.bk_icon} source={require('../list/openball/back_icon.png')}/>
                    <View style={styles.personNum}>
                        <Text style={styles.bk_per}>人数：</Text>
                        <Text style={styles.bk_num}>8/20</Text>
                    </View>
                    <View style={styles.personNum}>
                        <Text style={styles.bk_per}>钱钱：</Text>
                        <Text style={styles.bk_num}>820</Text>
                    </View>
                </View>
                {/*中间*/}
                <View style={styles.center}>
                    <View style={styles.centerThree}>
                        <View style={styles.cen_left}>
                            <Image style={styles.cen_lf_bg} source={require('../list/openball/black_bg.png')}/>
                            <Image style={styles.userhead} source={require('../list/openball/headportrait_bg.png')}/>
                            <Text style={styles.info}>name</Text>
                            <Text style={styles.info}>ID:1255645</Text>
                            <View style={styles.monney}>
                                <Image style={styles.mon_icon} source={require('../list/openball/qian_bg.png')}/>
                                <Text style={styles.mon_text}>1234</Text>
                            </View>
                            <Image style={styles.zhuang} source={require('../list/openball/zhaug_icon.png')}/>
                        </View>
                    </View>
                    <View style={styles.centerThree}>
                        {/*<TextInput style={styles.inputs}*/}
                        {/*multiline = {true}*/}
                        {/*underlineColorAndroid="transparent"*/}
                        {/*placeholder="请输入您的账户"*/}
                        {/*placeholderTextColor="#FEC38C"*/}
                        {/*onChangeText={(sendData)=>this.setState({sendData})}*/}
                        {/*value={this.state.sendData}/>*/}
                        <WS
                            // ref={ref => {this.ws = ref}}
                            url="ws://192.168.0.251:8080/guess/ws"
                            onOpen={() => {
                                console.log('Open!')
                                this.ws.send('Hello')
                            }}
                            onMessage={console.log}
                            onError={console.log}
                            onClose={console.log}
                            reconnect // Will try to reconnect onClose
                        />
                        {/*<WebView*/}
                        {/*bounces={false}*/}
                        {/*url="https://gaothing.github.io/happy-ball"*/}
                        {/*style={{width:"100%",height:"100%"}}>*/}
                        
                        {/*</WebView>*/}
                    </View>
                    <View style={styles.centerThree}>
                        <View style={styles.cen_right}>
                            <Image style={styles.cen_lf_bg} source={require('../list/openball/black_bg2.png')}/>
                            <View style={styles.listhead}>
                                <Image style={styles.list_hd_0} source={require('../list/openball/three.png')}/>
                                <Text style={styles.list_hd_1}>玩家列表</Text>
                                <Text style={styles.list_hd_2}>8/20</Text>
                            </View>
                            <Image style={styles.lineIMg} source={require('../list/openball/line-.png')}/>
                            <View style={styles.listCon}>
                                <View style={styles.fixdTh}>
                                    <Text style={styles.fixdTd}>序号</Text>
                                    <Text style={[styles.fixdTd, styles.fixdTd2]}>昵称</Text>
                                    <Text style={styles.fixdTd}>钱</Text>
                                </View>
                                <ScrollView style={styles.sll}>
                                    
                                    <View style={styles.listBox}>
                                        <Text style={[styles.n, styles.listid]}>1</Text>
                                        <Text style={[styles.n, styles.listname]}>nameefh</Text>
                                        <Text style={[styles.n, styles.listmon]}>+5000</Text>
                                    </View>
                                    <View style={styles.listBox}>
                                        <Text style={[styles.n, styles.listid]}>1</Text>
                                        <Text style={[styles.n, styles.listname]}>nameefh</Text>
                                        <Text style={[styles.n, styles.listmon]}>+5000</Text>
                                    </View>
                                    <View style={styles.listBox}>
                                        <Text style={[styles.n, styles.listid]}>1</Text>
                                        <Text style={[styles.n, styles.listname]}>nameefh</Text>
                                        <Text style={[styles.n, styles.listmon]}>+5000</Text>
                                    </View>
                                    <View style={styles.listBox}>
                                        <Text style={[styles.n, styles.listid]}>1</Text>
                                        <Text style={[styles.n, styles.listname]}>nameefh</Text>
                                        <Text style={[styles.n, styles.listmon]}>+5000</Text>
                                    </View>
                                    <View style={styles.listBox}>
                                        <Text style={[styles.n, styles.listid]}>1</Text>
                                        <Text style={[styles.n, styles.listname]}>nameefh</Text>
                                        <Text style={[styles.n, styles.listmon]}>+5000</Text>
                                    </View>
                                    <View style={styles.listBox}>
                                        <Text style={[styles.n, styles.listid]}>1</Text>
                                        <Text style={[styles.n, styles.listname]}>nameefh</Text>
                                        <Text style={[styles.n, styles.listmon]}>+5000</Text>
                                    </View>
                                    <View style={styles.listBox}>
                                        <Text style={[styles.n, styles.listid]}>1</Text>
                                        <Text style={[styles.n, styles.listname]}>nameefh</Text>
                                        <Text style={[styles.n, styles.listmon]}>+5000</Text>
                                    </View>
                                
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.botBtn}>
                    <TouchableNativeFeedback onPress={this.jiesan.bind(this)}>
                        <Image style={styles.dissolve} source={require('../list/openball/jiesan.png')}/>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.yaoqing.bind(this)}>
                        <Image style={styles.dissolve} source={require('../list/openball/yaoqing.png')}/>
                    </TouchableNativeFeedback>
                </View>
                <Image style={styles.set} source={require('../list/openball/setup_icon.png')}/>
                <Image style={styles.voice} source={require('../list/openball/voice_icon.png')}/>
                <Record recordfFlag={this.state.recordFlag} transferSet={(msg) => {
                    this.setState({recordFlag: msg})
                }}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputs: {
        padding: 0,
        backgroundColor: "#fff",
        borderRadius: px2pt(6),
        color: "#FEC38C",
        paddingLeft: px2pt(8),
        height: px2pt(30)
    },
    container: {
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    backgroundImg: {
        position: "absolute",
        left: 0,
        top: 0,
        // width:Dimensions.get('window').width,
        // height:Dimensions.get('window').height,
    },
    roomNumbox: {
        position: "absolute",
        left: "50%",
        top: 0,
        marginLeft: px2pt(-70),
        width: px2pt(140),
        height: px2pt(33),
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    head_t: {
        marginLeft: px2pt(5)
    },
    roomNum: {
        height: "100%",
        lineHeight: px2pt(25),
        marginLeft: px2pt(6),
        color: "#fff"
    },
    botBtn: {
        height: px2pt(110),
        width: "100%",
        position: "absolute",
        left: 0,
        bottom: 0,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        
    },
    dissolve: {
        marginLeft: px2pt(40),
        marginRight: px2pt(40)
    },
    //中间
    center: {
        width: "100%",
        position: "absolute",
        left: 0,
        top: px2pt(120),
        height: px2pt(300),
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor:"#23edea"
    }
    , centerThree: {
        width: "33.3%",
        height: px2pt(300),
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        // backgroundColor:"#333"
    },
    cen_lf_bg: {
        position: "absolute",
        left: 0,
        top: 0
    },
    zhuang: {
        position: "absolute",
        right: px2pt(0),
        top: "50%"
    },
    cen_left: {
        width: px2pt(110),
        height: px2pt(171),
        // backgroundColor:"#23eaea"
    },
    userhead: {
        marginLeft: px2pt(4),
        marginTop: px2pt(4)
    },
    info: {
        height: px2pt(20),
        paddingLeft: px2pt(8),
        color: "#fff",
        fontSize: 12
    },
    monney: {
        position: "relative",
        
    },
    mon_icon: {
        position: "absolute",
        left: px2pt(8),
        top: 0
    },
    mon_text: {
        color: "#FFF",
        fontSize: 12,
        paddingLeft: px2pt(28)
    },
    cen_right: {
        width: px2pt(184),
        height: px2pt(171),
    },
    listhead: {
        width: "100%",
        height: px2pt(30),
        display: "flex",
        flexDirection: "row",
        // display:"flex"
        // backgroundColor:"#434341"
    },
    lineIMg: {
        marginLeft: px2pt(30),
        marginBottom: px2pt(2)
    },
    list_hd_0: {
        marginLeft: px2pt(12),
        marginTop: px2pt(15)
    },
    list_hd_1: {
        width: "60%",
        height: "100%",
        color: "#fff",
        lineHeight: px2pt(25),
        paddingLeft: px2pt(6)
    },
    list_hd_2: {
        width: "30%",
        height: "100%",
        color: "#D05130",
        lineHeight: px2pt(25)
    },
    listCon: {
        height: px2pt(130),
        width: px2pt(160),
        marginLeft: px2pt(12),
        marginTop: px2pt(-0),
        position: "relative",
        // backgroundColor:"#323232"
        
    },
    fixdTh: {
        position: "absolute",
        left: px2pt(12),
        top: px2pt(-4),
        width: "100%",
        height: px2pt(30),
        display: "flex",
        flexDirection: "row",
    },
    fixdTd: {
        color: "#fff",
        width: "25%",
        height: "100%"
    },
    fixdTd2: {
        width: "50%"
    },
    sll: {
        width: "100%",
        marginTop: px2pt(14),
        height: px2pt(100),
        // backgroundColor:"#344e44",
        
    },
    listBox: {
        display: "flex",
        flexDirection: "row",
        height: px2pt(20),
    },
    n: {
        height: "100%",
        
        lineHeight: px2pt(16)
    },
    listid: {
        width: "12%",
        color: "#FFD800",
        textAlign: "center",
    },
    listname: {
        width: "58%",
        color: "#FFF"
    },
    listmon: {
        width: "30%",
        color: "#E59203"
    },
    back: {
        position: "absolute",
        left: px2pt(60),
        top: px2pt(30),
        width: px2pt(120),
        height: px2pt(50),
    },
    personNum: {
        width: "100%",
        height: px2pt(20),
        display: "flex",
        flexDirection: "row",
        
    },
    bk_per: {
        color: "#fff"
    },
    bk_num: {
        paddingLeft: px2pt(3),
        color: "#D7B734"
    },
    bk_icon: {
        position: "absolute",
        right: "104%",
        top: 0
    },
    set: {
        position: "absolute",
        right: px2pt(30),
        top: px2pt(30)
    },
    voice: {
        position: "absolute",
        right: px2pt(30),
        bottom: px2pt(30)
    }
    
});