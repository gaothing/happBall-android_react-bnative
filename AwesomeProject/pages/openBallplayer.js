import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    PixelRatio
} from 'react-native';
import Orientation from 'react-native-orientation';
import CookieManager from 'react-native-cookies'
import WS from 'react-native-websocket';
import Actone from './actOne';
import Acttwo from './actTwo';
import Actthere from './actThere';
import Actfour from './actFour';
import Actfive from './actFive';
import Actsix from './actSix'

const pt2px = pt => PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px => PixelRatio.roundToNearestPixel(px);
export default class OpenBallplayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            host: "http://192.168.0.251:8080/guess/",
            roomInfo: [],
            widths: "100%",
            heights: '100%',
            actone: false,
            acttwo: false,
            actthere: false,
            actfour: false,
            actfive: false,
            actsix: false,
            act1Flag: false,
            act2Flag: false,
            act3Flag: false,
            act4Flag: false,
            act5Flag: false,
            act6Flag: false,
            cookie: ""
        }
    }
    
    componentWillMount() {
        const initial = Orientation.getInitialOrientation();
        if (initial === 'PORTRAIT') {
            const widths = Dimensions.get('window').width;
            const heights = Dimensions.get('window').height;
            this.setState((prevState, props) => {
                return {widths: heights, heights: widths};
            });
        } else {
            const widths = Dimensions.get('window').width;
            const heights = Dimensions.get('window').height;
            this.setState((prevState, props) => {
                return {widths: widths, heights: heights};
            });
        }
        Orientation.lockToLandscape();
    }
    
    //只允许横屏
    componentDidMount() {
        CookieManager.get(this.state.host + 'join/a/room')
            .then((res) => {
                this.setState({
                    cookie: res.JSESSIONID
                })
            });
        
        
    }
    
    choosedType(para) {
        if (para == 1) {
            this.setState({
                actone: true,
                acttwo: false,
                actthere: false,
                actfour: false,
                actfive: false,
                actsix: false,
                act1Flag: true,
            })
        } else if (para == 2) {
            this.setState({
                actone: false,
                acttwo: true,
                actthere: false,
                actfour: false,
                actfive: false,
                actsix: false,
                act2Flag: true,
            })
        } else if (para == 3) {
            this.setState({
                actone: false,
                acttwo: false,
                actthere: true,
                actfour: false,
                actfive: false,
                actsix: false,
                act3Flag: true,
            })
        } else if (para == 4) {
            this.setState({
                actone: false,
                acttwo: false,
                actthere: false,
                actfour: true,
                actfive: false,
                actsix: false,
                act4Flag: true,
            })
        } else if (para == 5) {
            this.setState({
                actone: false,
                acttwo: false,
                actthere: false,
                actfour: false,
                actfive: true,
                actsix: false,
                act5Flag: true,
            })
        } else if (para == 6) {
            this.setState({
                actone: false,
                acttwo: false,
                actthere: false,
                actfour: false,
                actfive: false,
                actsix: true,
                act6Flag: true,
            })
        }
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
                        <View>
                        
                        </View>
                    </View>
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
                            <Image style={styles.zhuang} source={require('../list/openball/xian_icon.png')}/>
                        </View>
                    </View>
                </View>
                <View style={styles.botBtn}>
                    <Image source={require('../list/openball/joinBettingBase.png')}/>
                    <View style={styles.xiazhu}>
                        <View style={styles.xiazhu_1}>
                            <View style={styles.xia_list}>
                                <TouchableOpacity style={styles.whp} onPress={this.choosedType.bind(this, 1)}>
                                    <Image style={styles.xia_l_nub} source={require('../list/openball/1-2.png')}/>
                                    <Image style={[styles.xia_l_nubc, {opacity: this.state.actone ? 1 : 0}]}
                                           source={require('../list/openball/1-2_selected.png')}/>
                                    <Image source={require('../list/openball/number_Separate.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.xia_list}>
                                <TouchableOpacity style={styles.whp} onPress={this.choosedType.bind(this, 2)}>
                                    <Image style={styles.xia_l_nub} source={require('../list/openball/1-3.png')}/>
                                    <Image style={[styles.xia_l_nubc, {opacity: this.state.acttwo ? 1 : 0}]}
                                           source={require('../list/openball/1-3_selected.png')}/>
                                    <Image source={require('../list/openball/number_Separate.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.xia_list}>
                                <TouchableOpacity style={styles.whp} onPress={this.choosedType.bind(this, 3)}>
                                    <Image style={styles.xia_l_nub} source={require('../list/openball/1-6.png')}/>
                                    <Image style={[styles.xia_l_nubc, {opacity: this.state.actthere ? 1 : 0}]}
                                           source={require('../list/openball/1-6_selected.png')}/>
                                    <Image source={require('../list/openball/number_Separate.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.xia_list}>
                                <TouchableOpacity style={styles.whp} onPress={this.choosedType.bind(this, 4)}>
                                    <Image style={styles.xia_l_nub} source={require('../list/openball/1-8.png')}/>
                                    <Image style={[styles.xia_l_nubc, {opacity: this.state.actfour ? 1 : 0}]}
                                           source={require('../list/openball/1-8_selected.png')}/>
                                    <Image source={require('../list/openball/number_Separate.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.xia_list}>
                                <TouchableOpacity style={styles.whp} onPress={this.choosedType.bind(this, 5)}>
                                    <Image style={styles.xia_l_nub} source={require('../list/openball/1-24.png')}/>
                                    <Image style={[styles.xia_l_nubc, {opacity: this.state.actfive ? 1 : 0}]}
                                           source={require('../list/openball/1-24_selected.png')}/>
                                    <Image source={require('../list/openball/number_Separate.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.xia_list}>
                                <TouchableOpacity style={styles.whp} onPress={this.choosedType.bind(this, 6)}>
                                    <Image style={styles.xia_l_nub} source={require('../list/openball/1-26.png')}/>
                                    <Image style={[styles.xia_l_nubc, {opacity: this.state.actsix ? 1 : 0}]}
                                           source={require('../list/openball/1-26_selected.png')}/>
                                    <Image source={require('../list/openball/number_Separate.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <Image style={styles.set} source={require('../list/openball/setup_icon.png')}/>
                <Image style={styles.voice} source={require('../list/openball/voice_icon.png')}/>
                <Actone act1Flag={this.state.act1Flag} transferSet={(actFlag) => {
                    this.setState({act1Flag: actFlag})
                }}/>
                <Acttwo act2Flag={this.state.act2Flag} transferSet={(actFlag) => {
                    this.setState({act2Flag: actFlag})
                }}/>
                <Actthere act3Flag={this.state.act3Flag} transferSet={(actFlag) => {
                    this.setState({act3Flag: actFlag})
                }}/>
                <Actfour act4Flag={this.state.act4Flag} transferSet={(actFlag) => {
                    this.setState({act4Flag: actFlag})
                }}/>
                <Actfive act5Flag={this.state.act5Flag} transferSet={(actFlag) => {
                    this.setState({act5Flag: actFlag})
                }}/>
                <Actsix act6Flag={this.state.act6Flag} transferSet={(actFlag) => {
                    this.setState({act6Flag: actFlag})
                }}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    whp: {
        width: "100%",
        height: "100%",
        position: "relative"
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
        height: px2pt(40),
        width: "100%",
        position: "absolute",
        left: 0,
        bottom: px2pt(9),
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        // backgroundColor:"#fff"
    },
    xiazhu: {
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        
    },
    xiazhu_1: {
        // backgroundColor:"#fff",
        width: px2pt(450),
        height: px2pt(40),
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    },
    xia_list: {
        width: "16.5%",
        height: "100%",
        display: "flex",
        flexDirection: 'row',
        position: "relative"
        // justifyContent:'center',
    },
    xia_l_nub: {
        marginLeft: px2pt(20),
        marginRight: px2pt(18)
    },
    xia_l_nubc: {
        position: "absolute",
        left: px2pt(20),
        top: 0
    },
    center: {
        width: "100%",
        position: "absolute",
        left: 0,
        top: px2pt(80),
        height: px2pt(300),
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
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
    //
    cen_right: {
        width: px2pt(184),
        height: px2pt(171),
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