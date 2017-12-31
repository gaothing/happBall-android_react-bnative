import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    PixelRatio
} from 'react-native';
const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px=>PixelRatio.roundToNearestPixel(px);
export default class Actfive extends Component{
    constructor(props){
        super(props);
        this.state={
            setClose:true
        }
    }
    closebox(){
        this.props.transferSet(false)
    }
    render(){
        if(this.props.act5Flag){
            return(
                <View style={styles.container}>
                    <View style={styles.setBox}>
                        <Image style={styles.bg_1} source={require('../list/openball/choice_bg.png')} />
                        <Image style={styles.bg_1_1} source={require('../list/openball/choice_bg2.png')} />
                        <TouchableOpacity style={styles.close} onPress={this.closebox.bind(this)}>
                            <Image  source={require('../list/joinRoom/icon_close.png')} />
                        </TouchableOpacity>
                        <Text style={styles.head}>选择投注</Text>
                        <View style={styles.intoBox}>
                            <View style={styles.list}>
                                <Text style={styles.list_nub}>1--8</Text>
                                <Image style={styles.list_line} source={require('../list/openball/number_Separate.png')} />
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.list_nub}>9--16</Text>
                                <Image style={styles.list_line} source={require('../list/openball/number_Separate.png')} />
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.list_nub}>17--24</Text>
                                <Image style={styles.list_line} source={require('../list/openball/number_Separate.png')} />
                            </View>
                
                
                        </View>
                        <View style={styles.lay}>
                            <View style={styles.lay_1}>
                                <Image style={styles.lay_bg} source={require('../list/openball/choicebetting_bg.png')} />
                                <Image style={styles.lay_bg_2} source={require('../list/openball/choicebetting_line.png')} />
                                <Image style={styles.lay_left} source={require('../list/openball/reduce_icon.png')} />
                                <Image style={styles.lay_right} source={require('../list/openball/increase_icon.png')} />
                                <Image style={styles.lay_slide} source={require('../list/openball/display_icon.png')} />
                                {/*-----------*/}
                                {/*<Image style={styles.ya} source={require("../list/openball/redbluechoice_picture.png")} />*/}
                                {/*<Image style={styles.ya_2} source={require("../list/openball/redbluechoice_picture.png")} />*/}
                            </View>
                        </View>
                        <View style={styles.sureBox}>
                            <Image style={styles.sure} source={require('../list/main/confirm.png')} />
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
    close:{
        position:"absolute",
        top:px2pt(-12),
        right:px2pt(-12)
    },
    setBox:{
        width:px2pt(385),
        height:px2pt(265),
    },
    bg_1:{
        position:"absolute",
        left:0,
        top:0
    },
    bg_1_1:{
        position:"absolute",
        left:px2pt(11),
        top:px2pt(11)
    }
    ,head:{
        paddingTop:px2pt(14),
        width:"100%",
        color:"#BE831E",
        fontSize:24,
        textAlign:"center",
    },
    intoBox:{
        width:px2pt(363),
        marginLeft:px2pt(10),
        height:px2pt(170),
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        flexWrap:"wrap"
        // backgroundColor:"#fff"
    },
    big:{
        marginTop:px2pt(30),
        marginLeft:px2pt(20),
        marginRight:px2pt(20)
    },
    small:{
        marginTop:px2pt(40),
        marginLeft:px2pt(20),
        marginRight:px2pt(20)
    },
    lay:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        
    },
    lay_1:{
        width:px2pt(112),
        height:px2pt(16),
        position:"relative",
        // backgroundColor:"#000"
    },
    lay_bg:{
        position:"absolute",
        left:0,
        top:0,
    },
    lay_bg_2:{
        position:"absolute",
        left:px2pt(20),
        top:px2pt(7),
    },
    lay_left:{
        position:"absolute",
        left:0,
        top:px2pt(1),
    },
    lay_right:{
        position:"absolute",
        right:0,
        top:px2pt(1),
    },
    lay_slide:{
        position:"absolute",
        left:px2pt(18),
        top:px2pt(1),
    },
    sureBox:{
        marginTop:px2pt(8),
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        flexWrap:"wrap"
    },
    list:{
        width:"33%",
        height:"30%",
        position:"relative",
    },
    list_nub:{
        width:"100%",
        height:"100%",
        textAlign:"center",
        color:"#BE831E",
        fontSize:18,
        lineHeight:px2pt(36)
    },
    list_line:{
        position:"absolute",
        right:0,
        top:px2pt(6)
        
    }
});
