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
export default class Record extends Component{
    constructor(props){
        super(props);
        this.state={
            setClose:true,
            
        }
    }
    closebox(){
        this.props.transferSet(false)
    }
   
    render(){
     
            return(
                <View style={styles.container}>
                    <View style={styles.setBox}>
                        <Image style={styles.main_bg} source={require('../list/openball/bg-zhanji.png')} />
                        <Image style={styles.main}
                               resizeMode="stretch"
                               source={require('../list/setbox/dialog_main.png')} />
                        <TouchableOpacity  style={styles.closeBox} onPress={this.closebox.bind(this)}>
                            <Image  source={require('../list/setbox/icon_close.png')} />
                        </TouchableOpacity>
                        <View style={styles.header}>
                            <Text style={[styles.hd_list]}>房间号：123546</Text>
                            <Text style={[styles.hd_list,styles.hd_date]}>开局时间：2017-11-10 10:25</Text>
                        </View>
                        <View style={styles.data_box}>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name,styles.name_h]}>youName</Text>
                                <Text style={[styles.gard,styles.gard_h]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name,styles.name_h]}>youName</Text>
                                <Text style={[styles.gard,styles.gard_h]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name,styles.name_h]}>youName</Text>
                                <Text style={[styles.gard,styles.gard_h]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                            <View style={styles.data_eve}>
                                <Text style={[styles.name]}>youName</Text>
                                <Text style={[styles.gard]}>5000</Text>
                            </View>
                        </View>
                        
                    </View>
                </View>
            )
       
        
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
        width:px2pt(496),
        height:px2pt(265),
        flexDirection:"row",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        // alignItems:"center"
    },
    closeBox:{
        position:"absolute",
        right:px2pt(-10),
        top:px2pt(-10)
    },
    main_bg:{
        position:"absolute",
        left:0,
        top:0
    }
    ,main:{
        position:"absolute",
        left:px2pt(10),
        top:px2pt(38),
        width:px2pt(476),
        height:px2pt(200),
        marginTop:px2pt(10),
        borderRadius:px2pt(4)
    },
    // ---------------------
    header:{
        width:px2pt(476),
        height:px2pt(20),
        display:"flex",
        flexDirection:"row",
        // backgroundColor:"#fff",
        marginTop:px2pt(10),
        lineHeight:px2pt(16)
    },
    hd_list:{
        width:"50%",
        height:"100%",
        color:"#BE831E",
    },
    hd_date:{
        textAlign:"right"
    },
    data_box:{
        width:px2pt(476),
        height:px2pt(240),
        // backgroundColor:"#34d",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"
       
        
    },
    data_eve:{
        width:px2pt(157),
        height:px2pt(20),
        display:"flex",
        flexDirection:"row",
    },
    name:{
        // marginTop:px2pt(8),
        width:px2pt(100),
        height:"100%",
        borderRightWidth:px2pt(1),
        borderBottomWidth:px2pt(1),
        borderColor:"#F2CEA5",
        color:"#BE831E",
        fontSize:12,
        textAlign:"center",
        lineHeight:px2pt(16)
    },
    name_h:{
        backgroundColor:"#E6C49E",
        fontSize:14,
      // marginTop:px2pt(8)
    },
    gard_h:{
        backgroundColor:"#E6C49E",
        fontSize:14,
        // marginTop:px2pt(8)
    },
    gard:{
        // marginTop:px2pt(8),
        width:px2pt(57),
        height:"100%",
        borderRightWidth:px2pt(1),
        borderBottomWidth:px2pt(1),
        borderColor:"#F2CEA5",
        color:"#BE831E",
        fontSize:12,
        textAlign:"center",
        lineHeight:px2pt(16)
    }
    
});
