import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    Dimensions,
    ToastAndroid,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    TextInput,
    PixelRatio
} from 'react-native';
import HomeScene from './main.android.js';
const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px=>PixelRatio.roundToNearestPixel(px);
export default class Registry extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            code:'',
            theCode:'',
            password:'',
            host:"http://192.168.0.251:8080/guess/"
        }
    }
    closeBox(){
        this.props.transferCloseR(false)
    }
    witch(){
        this.props.transferWitchR()
    }
    sureOk(){
        const url = this.state.host+"register";
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:'username='+this.state.username+"&password="+this.state.password+"&wxname=125454443&nickname=未命名&playerhead="
        })
            .then((response) => response.json())
            .then((responseData) => {
                ToastAndroid.show(responseData.message,ToastAndroid.SHORT);
            })
            .done();
    }
    getCode(){
        // const self=this;
        // if(this.state.username){
        //     const url = this.state.host+"safeCode";
        //     fetch(url, {
        //         method: 'POST',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         },
        //         body:'phoneNumber='+this.state.username
        //     })
        //         .then((response) => response.json())
        //         .then((responseData) => {
        //             self.setState({
        //                 theCode:responseData.SAFECODE
        //             });
        //         })
        //         .done();
        // }else{
        //     alert("请输入手机号码")
        // }
    }
    render(){
        if(this.props.regFlag){
            return(
                <View style={styles.container}>
                    <View style={styles.registryBox}>
                        <Image source={require('../list/joinRoom/dialog_login_bg.png')}/>
                        <Image style={styles.bg_in} source={require('../list/joinRoom/dialog_login.png')} />
                        <View style={styles.in_box}>
                            <View style={styles.in_left}>
                                <Text style={styles.in_left_text}>账号：</Text>
                                <Text style={styles.in_left_text}>验证码：</Text>
                                <Text style={styles.in_left_text}>密码：</Text>
                            </View>
                            <View style={styles.in_right}>
                                <TouchableNativeFeedback onPress={this.getCode.bind(this)} style={styles.btn_p}>
                                    <Text style={styles.btn} >发送验证码</Text>
                                </TouchableNativeFeedback>
                               
                                <TextInput style={styles.inputs}
                                           multiline = {true}
                                           underlineColorAndroid="transparent"
                                           placeholder="请输入手机号码"
                                           placeholderTextColor="#FEC38C"
                                           onChangeText={(username)=>this.setState({username})}
                                           value={this.state.username}/>
                                <TextInput style={[styles.inputs,styles.code_in]}
                                           multiline = {true}
                                           underlineColorAndroid="transparent"
                                           placeholderTextColor="#FEC38C"
                                           onChangeText={(code)=>this.setState({code})}
                                           placeholder="请输入验证码"/>
                                <TextInput style={styles.inputs}
                                           multiline = {true}
                                           placeholderTextColor="#FEC38C"
                                           onChangeText={(password)=>this.setState({password})}
                                           underlineColorAndroid="transparent"
                                           placeholder="请输入密码"/>
                            </View>
                        </View>
                        <TouchableOpacity onPress={this.closeBox.bind(this)} style={styles.closes}>
                            <Image  source={require('../list/joinRoom/icon_close.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.witch.bind(this)} style={styles.switch_p}>
                            <Text style={styles.switch}>立即登录</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <TouchableOpacity onPress={this.sureOk.bind(this)} style={styles.sure}>
                        <Image  source={require('../list/main/confirm.png')}/>
                    </TouchableOpacity>
                </View>
            )
        }else{
            return null;
        }
  
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position:"absolute",
        width:"100%",
        height:"100%",
        backgroundColor:"rgba(0,0,0,0.5)",
    },
    sure:{
        position:"relative",
        top:px2pt(-50)
    },
    switch_p:{
        position:"absolute",
        bottom:px2pt(20),
        right:px2pt(20),
    },
    switch:{
        color:"#fff",
        fontSize:14,
    },
    closes:{
        position:"absolute",
        top:px2pt(-6),
        right:px2pt(-6)
    },
    registryBox:{
        width:px2pt(399),
        height:px2pt(216),
        position:"relative",
    },
    bg_in:{
        position:"relative",
        top:px2pt(-190),
        left:px2pt(18)
    },
    in_box:{
        width:"100%",
        height:px2pt(131),
        position:"absolute",
        left:0,
        top:px2pt(24),
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
    },
    in_left:{
        width:"15%",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around"
    },
    in_left_text:{
        height:"30%",
        textAlign:"right",
        color:"#D05130",
        fontSize:14,
        lineHeight:px2pt(30)
    },
    in_right:{
        width:"54%",
        height:"100%",
        position:"relative",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around"
    },
    inputs:{
        padding:0,
        backgroundColor:"#fff",
        borderRadius:px2pt(6),
        color:"#FEC38C",
        paddingLeft:px2pt(8),
        height:px2pt(30)
    },
    code_in:{
        width:"60%"
    },
    btn_p:{
        position:"absolute",
        right:px2pt(0),
        top:px2pt(50),
        width:px2pt(80),
        height:px2pt(30),
    },
    btn:{
        position:"absolute",
        right:px2pt(0),
        top:px2pt(50),
        width:px2pt(80),
        height:px2pt(30),
        backgroundColor:"#B96F08",
        color:"#fff",
        fontSize:px2pt(14),
        textAlign:"center",
        borderRadius:px2pt(6),
        lineHeight:px2pt(26)
    }
});