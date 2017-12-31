import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    StatusBar,
    ToastAndroid,
    PixelRatio
} from 'react-native';
import Video from 'react-native-video'
import HomeScene from './main.android.js';
import Regidtry from './registry';
import Logins from './logins';
import Agreement from './agreement'

const pt2px = pt => PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px => PixelRatio.roundToNearestPixel(px);
import * as WeChat from 'react-native-wechat';
import Orientation from 'react-native-orientation';
// import Video from 'react-native-video'
export default class LoginScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedFlag: false,
            widths: "100%",
            heights: "100%",
            regFlag: false,
            lgFlag: false,
            agrFlag: false,
            //是否同意
            okFlag: false
        }
    }
    
    //切换注册登录2
    transferWitchL() {
        this.setState({
            regFlag: true,
            lgFlag: false,
        })
    }
    
    transferWitchR() {
        this.setState({
            regFlag: false,
            lgFlag: true
        })
    }
    
    transferCloseR(msg) {
        this.setState({
            regFlag: msg
        })
    }
    
    transferCloseL(msg) {
        this.setState({
            lgFlag: msg
        })
    }
    
    transferAg(msg) {
        this.setState({
            agrFlag: msg
        })
    }
    
    //用户登录
    regist() {
        if (this.state.checkedFlag) {
            this.setState((prevState, props) => {
                return {lgFlag: true};
            });
        } else {
            ToastAndroid.show('请请先选择同意使用协议', ToastAndroid.SHORT);
        }
        
    }
    
    //微信登录
    registwei() {
        if (this.state.checkedFlag) {
            this.props.navigator.replace({
                scene: HomeScene,
            });
        } else {
            ToastAndroid.show('请请先选择同意使用协议', ToastAndroid.SHORT);
        }
    }
    
    agreement() {
        this.setState((prevState, props) => {
            return {agrFlag: true};
        });
    }
    
    //是否同意协议
    witchAg() {
        if (this.state.checkedFlag) {
            this.setState({
                checkedFlag: false
            })
        } else {
            this.setState({
                checkedFlag: true
            })
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
    
    render() {
        
        return (
            <View
                style={styles.container}>
                <StatusBar
                    animated={true}
                    hidden={true}
                    backgroundColor={'blue'}
                    translucent={true}
                    barStyle={'default'}
                    showHideTransition={'fade'}
                    networkActivityIndicatorVisible={true}
                />
                {/*播放器*/}
                {/*<Video*/}
                {/*source={require('../list/video/one.mp3')}*/}
                {/**/}
                {/*/>*/}
                <Image style={[styles.backgroundImg, {width: this.state.widths, height: this.state.heights}]}
                       source={require('../list/login/login_bg.png')}/>
                <View style={styles.btnop}>
                    <TouchableOpacity onPress={this.regist.bind(this, "用户登录")}>
                        <Image style={[styles.btnimg]} source={require('../list/login/user_login.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.registwei.bind(this, "微信登录")}>
                        <Image style={[styles.btnimg, styles.btnimgR]}
                               source={require('../list/login/wechat_login.png')}/>
                    </TouchableOpacity>
                </View>
                <Image style={styles.logoimg} source={require('../list/login/logo.png')}/>
                <Image style={styles.warning} source={require('../list/login/warning.png')}/>
                <View style={styles.agree}>
                    <TouchableNativeFeedback onPress={this.agreement.bind(this)}>
                        <Text style={styles.texts}>同意用户使用协议</Text>
                    </TouchableNativeFeedback>
                    <Image style={styles.ag_img} source={require('../list/login/protcol_normal.png')}/>
                    <TouchableNativeFeedback onPress={this.witchAg.bind(this)}>
                        <Image style={[styles.ag_img, {opacity: this.state.checkedFlag ? 1 : 0}]}
                               source={require('../list/login/protcol_pressed.png')}/>
                    </TouchableNativeFeedback>
                </View>
                <Regidtry navigator={this.props.navigator}
                          regFlag={this.state.regFlag}
                          transferCloseR={msg => this.transferCloseR(msg)}
                          transferWitchR={msg => this.transferWitchR(msg)}/>
                <Logins navigator={this.props.navigator}
                        lgFlag={this.state.lgFlag}
                        checkedFlag={this.state.checkedFlag}
                        transferCloseL={msg => this.transferCloseL(msg)}
                        transferWitchL={msg => this.transferWitchL(msg)}/>
                <Agreement agrFlag={this.state.agrFlag}
                           transferAg={msg => this.transferAg(msg)}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    backgroundImg: {
        // width:Dimensions.get('window').width,
        // height:Dimensions.get('window').height,
    },
    btnop: {
        width: "100%",
        height: 50,
        position: "absolute",
        left: 0,
        bottom: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    warning: {
        position: "absolute",
        left: "50%",
        right: 0,
        bottom: 110,
        marginLeft: px2pt(-210),
    },
    logoimg: {
        position: "absolute",
        left: "50%",
        right: 0,
        top: 40,
        marginLeft: px2pt(-210)
    },
    btnimg: {
        width: 120,
        height: 40,
        marginRight: 100,
        marginLeft: 100,
    },
    logo: {
        backgroundColor: "#2BA6DC",
        position: "relative"
    },
    flex: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    //同意
    agree: {
        position: "absolute",
        left: 0,
        bottom: 12,
        width: "100%",
        height: px2pt(50),
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    ag_img: {
        position: "absolute",
        left: "48%",
        marginLeft: px2pt(-120),
        bottom: 10,
    },
    texts: {
        color: "#ffffff",
        lineHeight: px2pt(40),
        fontSize: 18,
        width: px2pt(200),
        textAlign: 'center',
        textShadowOffset: {width: 1, hegith: 1},
        textShadowRadius: 2,
        textShadowColor: 'grey',
    }
});
