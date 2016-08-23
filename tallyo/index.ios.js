/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class tallyo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={require('./images/Bg.png')}
          style={{ flex:1, width: null, height: null, margin: 20}}
        />
        <Text style={styles.welcome}>
          tallyo
        </Text>
        {/*<Text style={styles.instructions}>
          To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    position: 'relative',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#032529',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    position: 'relative',
    color: 'white'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});

AppRegistry.registerComponent('tallyo', () => tallyo);
