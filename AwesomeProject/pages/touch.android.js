/**
 * Created by shaotingzhou on 2017/4/13.
 */

import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    Image,
    View,
    Slider,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Animated,
    Easing
} from 'react-native'
var {width,height} = Dimensions.get('window');
import Video from 'react-native-video'
var lyrObj = []   // 存放歌词
var myAnimate;
//  http://rapapi.org/mockjsdata/16978/rn_songList
//  http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.lry&songid=213508


export default class Main extends Component {
    
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0)
        this.state = {
        
            pause:true,       //歌曲播放/暂停
         
        }
    }
    in(){
        this.setState({
            pause:false
        })
    }
    
    render() {

            
            
            //数据加载出来
            return (
                <View style={styles.container}>
                
                        <Video
                            source={require('../list/video/one.mp3')}
                            // ref='video'
                            // volume={1.0}
                            paused={this.state.pause}
                            // onProgress{(e) => this.onProgress(e)}
                            // onLoad={(e) => this.onLoad(e)}
                        />
    
                    <TouchableOpacity onPress={this.in.bind(this)}>
                        <Text>点击</Text>
                    </TouchableOpacity>
                </View>
            )
        
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1
    },
    playingControl: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    playingInfo: {
        flexDirection: 'row',
        alignItems:'stretch',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor:'rgba(255,255,255,0.0)'
    },
    text: {
        color: "black",
        fontSize: 22
    },
    modal: {
        height: 300,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        paddingTop: 5,
        paddingBottom: 50
    },
    itemStyle: {
        paddingTop: 20,
        height:25,
        backgroundColor:'rgba(255,255,255,0.0)'
    }
})