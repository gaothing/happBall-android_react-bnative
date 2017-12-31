import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    PixelRatio
} from 'react-native';
const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px=>PixelRatio.roundToNearestPixel(px);
export default class Setbox extends Component{
    constructor(props){
        super(props);
        this.state={
            setClose:true,
            //游戏音效
            gameAduio:false,
            //背景音效
            bgAduio:true
        }
    }
    closebox(){
        this.props.transferSet(false)
    }
    gameAduio(){
        if(this.state.gameAduio){
            this.props.transferAduio(true)
        }else{
            this.props.transferAduio(false)
        }
        this.setState((prevState, props) => {
            return {
                gameAduio:!this.state.gameAduio,
            };
        });
    }
    bgAduio(){
        if(this.state.bgAduio){
            this.props.transferAduio2(true)
        }else{
            this.props.transferAduio2(false)
        }
        this.setState((prevState, props) => {
            return {bgAduio:!this.state.bgAduio};
        });
    }
    render(){
        if(this.props.setFlag && this.state.setClose){
            return(
                <View style={styles.container}>
                <View style={styles.setBox}>
                    <Image style={styles.main_bg} source={require('../list/setbox/dialog_main_bg.png')} />
                    <Image style={styles.main} source={require('../list/setbox/dialog_main.png')} />
                    <Image style={styles.head} source={require('../list/setbox/btn_setting.png')} />
                    <TouchableOpacity  style={styles.closeBox} onPress={this.closebox.bind(this)}>
                        <Image  source={require('../list/setbox/icon_close.png')} />
                    </TouchableOpacity>
                    <View style={styles.music}>
                        <View style={styles.mu_lis}>
                            <Text style={styles.mu_text}>游戏音效</Text>
                            <Image style={[styles.mu_flag,styles.close,{opacity:this.state.gameAduio?0:1}]} source={require('../list/setbox/sound_close.png')} />
                            <TouchableNativeFeedback style={[styles.mu_flag]} onPress={this.gameAduio.bind(this)}>
                                <Image style={[{marginLeft:px2pt(40),opacity:this.state.gameAduio?1:0}]} source={require('../list/setbox/sound_open.png')} />
                            </TouchableNativeFeedback>
                            
                        </View>
                        <View style={styles.mu_lis}>
                            <Text style={[styles.mu_text,styles.mu_text_c]}>背景音效</Text>
                            <Image style={[styles.mu_flag,styles.mu_flag_c,styles.close_c,{opacity:this.state.bgAduio?0:1}]} source={require('../list/setbox/effect_close.png')} />
                            <TouchableNativeFeedback style={[styles.mu_flag,styles.mu_flag_c]} onPress={this.bgAduio.bind(this)}>
                                <Image style={[{marginLeft:px2pt(20),opacity:this.state.bgAduio?1:0}]} source={require('../list/setbox/effect_open.png')} />
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <Image style={styles.line} source={require('../list/setbox/setting_dot.png')} />
                    <View style={styles.wei}>
                        <Image style={styles.wei_bg} source={require('../list/setbox/dialog_found_bg.png')} />
                        <View style={styles.wei_con}>
                            <View style={styles.con_list}>
                                <Image  style={styles.userhead} source={require('../list/bacggroundImg/uh.jpg')} />
                                <View style={styles.userinfo}>
                                    <Text  style={styles.infos}>name</Text>
                                    <Text style={styles.infos}>ID:5655456</Text>
                                </View>
                            </View>
                            <View style={[styles.con_list,styles.center]}>
                                <Image  source={require('../list/setbox/wechat_bind.png')} />
                                <Image  source={require('../list/setbox/sign_out.png')} />
                            </View>
                        </View>
                    </View>
                </View>
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
    setBox:{
       width:px2pt(347),
       height:px2pt(259),
      
       display:"flex",
       justifyContent:"center",
       alignItems:"center"
   },
    closeBox:{
      position:"absolute",
      right:0,
      top:0
    },
    line:{
        position:"absolute",
        left:"50%",
        top:px2pt(50),
        marginLeft:px2pt(2)
    },
    
    main_bg:{
        position:"absolute",
        left:0,
        top:0
    }
    ,main:{
        width:px2pt(300),
        height:px2pt(200),
        marginTop:px2pt(10),
        borderRadius:px2pt(4)
    },
    head:{
        position:"absolute",
        left:"50%",
        top:px2pt(-5),
        marginLeft:px2pt(-65)
    },
    music:{
       position:"absolute",
        left:0,
        top:px2pt(50),
        width:"100%",
        height:px2pt(100),
        display:"flex",
        justifyContent:"center",
        flexDirection:"row"
    },
    mu_lis:{
       width:"50%",
    },
    mu_text:{
        color:"#D05130",
        textAlign:"center",
        paddingLeft:px2pt(20)
    },
    mu_text_c:{
        marginLeft:px2pt(-20)
    },
    mu_flag:{
       position:"absolute",
        left:px2pt(50),
        top:px2pt(20)
    },
    mu_flag_c:{
      left:px2pt(30)
    },
    close:{
       left:px2pt(55)
    },
    close_c:{
       left:px2pt(35)
    }
    ///////////////////////////////
    ,wei:{
       position:"absolute",
        left:px2pt(10),
        bottom:px2pt(10),
        height:px2pt(120),
        width:"100%",
    },
    wei_bg:{
        marginLeft:px2pt(23),
        marginTop:px2pt(-10),
        borderRadius:px2pt(8)
    },
    wei_con:{
       position:"absolute",
        left:0,
        bottom:px2pt(20),
       width:"100%",
        height:px2pt(100),
        display:"flex",
        flexDirection:'row',
        justifyContent:'center',
    },
    con_list:{
        width:"50%",
        height:"100%",
    },
    userhead:{
        width:px2pt(50),
        height:px2pt(50),
        borderRadius:px2pt(6),
        marginLeft:px2pt(20)
    },
    userinfo:{
       position:"absolute",
        left:"46%",
        top:0,
        width:"60%",
        height:"100%"
    },
    center:{
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        marginTop:px2pt(-8),
        marginLeft:px2pt(-40)
    },
    infos:{
       color:"#D05130"
    }
});
