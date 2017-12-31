import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    View,
    Button,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    TextInput,
    PixelRatio
} from 'react-native';
const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px=>PixelRatio.roundToNearestPixel(px);
export default class Agreement extends Component{
    constructor(props){
        super(props)
    }
    close(){
        this.props.transferAg(false)
    }
    render(){
        if(this.props.agrFlag){
            return(
                <View style={styles.container}>
                    <View style={styles.agreeBox}>
                        <Image style={styles.bg} source={require('../list/agreement/choice_bg.png')} />
                        <Image style={styles.bg2} source={require('../list/agreement/choice_bg2.png')} />
                        <TouchableOpacity style={styles.close} onPress={this.close.bind(this)}>
                            <Image source={require('../list/joinRoom/icon_close.png')} />
                        </TouchableOpacity>
                
                        <ScrollView style={styles.conBox}>
                            <Text style={[styles.content,styles.head]}>用户使用协议</Text>
                            <Text style={styles.content}>欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球</Text>
                            <Text style={styles.content}>欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球</Text>
                            <Text style={styles.content}>欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球欢迎使用欢乐球</Text>
                        </ScrollView>
                        <TouchableOpacity style={styles.sure} onPress={this.close.bind(this)}>
                            <Image  source={require('../list/main/confirm.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }else{
            return null;
        }

    }
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position:"absolute",
        width:"100%",
        height:"100%",
        backgroundColor:"rgba(0,0,0,0.5)",
    },
    close:{
        position:"absolute",
        top:px2pt(0),
        right:px2pt(-12)
    },
    agreeBox:{
        width:px2pt(385),
        height:px2pt(265),
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    bg:{
        position:"absolute",
        left:0,
        top:px2pt(12)
    },
    bg2:{
        position:"absolute",
        left:px2pt(11),
        top:px2pt(22)
    },
    conBox:{
        width:px2pt(323),
        height:px2pt(212),
        marginTop:px2pt(26),
        overflow:"hidden"
    },
    content:{
        width:"100%",
        color:"#333"
    },
    head:{
      textAlign:"center",
      color:"#C1332A"
    },
    sure:{
        marginTop:px2pt(4),
        marginBottom:px2pt(-4)
    }
    
});