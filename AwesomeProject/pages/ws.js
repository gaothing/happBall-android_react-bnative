import React, { Component } from 'react'
import { AppRegistry, View } from 'react-native'

export default class Example extends Component {
    constructor(props){
        super(props);
        this.state={
            checkedFlag:false,
            widths:"100%",
            heights:"100%",
            regFlag:false,
            lgFlag:false,
            agrFlag:false,
            //是否同意
            okFlag:false
        }
    }
    render () {
        return (
            <View style={{flex: 1}}>
             <Text>nsdoif</Text>
            </View>
        )
    }
}