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
  Image,
  StatusBar
} from 'react-native';

class tallyo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />

        <Image
          resizeMode="contain"
          source={require('./images/Bg.png')}
          style={{ flex:1, width: null, height: null, margin: 20,
            justifyContent: 'center',
          alignItems: 'center',}}
        >
          <View style={styles.backdropView}>
            <Text style={styles.num}>
              0
            </Text>
            <Text style={styles.text}>
              tallyo
            </Text>

          </View>
        </Image>

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
  num: {
    fontSize: 180,
    textAlign: 'center',
    margin: 10,
    position: 'relative',
    color: 'white'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    position: 'relative',
    color: 'white',
    letterSpacing: 3,
    opacity: 0.7
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backdropView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 200,
    backgroundColor: 'rgba(0,0,0,0)',
  },

});

AppRegistry.registerComponent('tallyo', () => tallyo);
