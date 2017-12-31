/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './pages/touch.android'
import LoginScene from './pages/login.android';
import Actone from './pages/actOne';
import Acttwo from './pages/actTwo';
import Actthere from './pages/actThere';
import Actfour from './pages/actFour';
import Actfive from './pages/actFive';
import Actsix from './pages/actSix'
import OpenBallplayer from './pages/openBallplayer';
import Record from './pages/record'
import {Navigator} from 'react-native-deprecated-custom-components'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
    renderScene = (route, navigator) => {
        return(
            <route.scene
                navigator={navigator}
                {...route.passProps}
            />
        );
    };
    initialRoute = {
        scene: LoginScene,
       
    };
    render() {
        return (
            <Navigator
                initialRoute={this.initialRoute}
                renderScene={this.renderScene}/>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
