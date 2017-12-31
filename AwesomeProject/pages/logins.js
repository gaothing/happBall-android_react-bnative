import React, {Component} from 'react';
import {
    Text,
    View,
    ToastAndroid,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    TextInput,
    PixelRatio
} from 'react-native';
import HomeScene from './main.android.js';

const pt2px = pt => PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px => PixelRatio.roundToNearestPixel(px);
export default class Logins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            host: "http://192.168.0.251:8080/guess/",
            username: "",
            password: ""
        }
    }
    
    closeBox() {
        this.props.transferCloseL(false)
    }
    
    witch() {
        this.props.transferWitchL()
    }
    
    sureOk() {
        var self = this
        if (this.state.username && this.state.password) {
            
            ToastAndroid.show('登录成功', ToastAndroid.SHORT);
            self.props.navigator.push({
                scene: HomeScene,
                passProps: {
                    loginInfo: ''
                },
            });
            // })
            // .done();
        } else {
            ToastAndroid.show('请输入账户跟密码', ToastAndroid.SHORT);
        }
    }
    
    render() {
        if (this.props.lgFlag) {
            return (
                <View style={styles.container}>
                    <View style={styles.registryBox}>
                        <Image source={require('../list/joinRoom/dialog_login_bg.png')}/>
                        <Image style={styles.bg_in} source={require('../list/joinRoom/dialog_login.png')}/>
                        <View style={styles.in_box}>
                            <View style={styles.in_left}>
                                <Text style={styles.in_left_text}>账号：</Text>
                                
                                <Text style={styles.in_left_text}>密码：</Text>
                            </View>
                            <View style={styles.in_right}>
                                <TextInput style={styles.inputs}
                                           multiline={true}
                                           underlineColorAndroid="transparent"
                                           placeholder="请输入您的账户"
                                           placeholderTextColor="#FEC38C"
                                           onChangeText={(username) => this.setState({username})}
                                           value={this.state.username}/>
                                <TextInput style={styles.inputs}
                                    // multiline = {true}
                                           password={true}
                                           underlineColorAndroid="transparent"
                                           placeholder="请输入您的密码"
                                           placeholderTextColor="#FEC38C"
                                           onChangeText={(password) => this.setState({password})}
                                           value={this.state.password}/>
                            </View>
                        </View>
                        <TouchableOpacity onPress={this.closeBox.bind(this)} style={styles.closes}>
                            <Image source={require('../list/joinRoom/icon_close.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.witch.bind(this)} style={styles.switch_p}>
                            <Text style={styles.switch}>立即注册</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={this.sureOk.bind(this)} style={styles.sure}>
                        <Image source={require('../list/main/confirm.png')}/>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return null;
        }
        
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    sure: {
        position: "relative",
        top: px2pt(-50)
    },
    switch_p: {
        position: "absolute",
        bottom: px2pt(20),
        right: px2pt(20),
    },
    switch: {
        color: "#fff",
        fontSize: 14,
    },
    closes: {
        position: "absolute",
        top: px2pt(-6),
        right: px2pt(-6)
    },
    registryBox: {
        width: px2pt(399),
        height: px2pt(216),
        position: "relative",
    },
    bg_in: {
        position: "relative",
        top: px2pt(-190),
        left: px2pt(18)
    },
    in_box: {
        width: "100%",
        height: px2pt(131),
        position: "absolute",
        left: 0,
        top: px2pt(24),
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    in_left: {
        width: "15%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    in_left_text: {
        height: "30%",
        textAlign: "right",
        color: "#D05130",
        fontSize: 14,
        lineHeight: px2pt(30)
    },
    in_right: {
        width: "54%",
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    inputs: {
        padding: 0,
        backgroundColor: "#fff",
        borderRadius: px2pt(6),
        color: "#FEC38C",
        paddingLeft: px2pt(8),
        height: px2pt(30)
    },
    code_in: {
        width: "60%"
    },
    btn_p: {
        position: "absolute",
        right: px2pt(0),
        top: px2pt(50),
        width: px2pt(80),
        height: px2pt(30),
    },
    btn: {
        position: "absolute",
        right: px2pt(0),
        top: px2pt(50),
        width: px2pt(80),
        height: px2pt(30),
        backgroundColor: "#B96F08",
        color: "#fff",
        fontSize: px2pt(14),
        textAlign: "center",
        borderRadius: px2pt(6),
        lineHeight: px2pt(26)
    }
});