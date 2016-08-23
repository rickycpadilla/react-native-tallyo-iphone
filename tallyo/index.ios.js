import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions
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
          style={styles.bigCircle}
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
        <View style={styles.bottom}>
          <Image
            source={require('./images/minus.png')}
            style={styles.minus}
          />
          <Image
            source={require('./images/plus.png')}
            style={styles.plus}
          />

        </View>


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
    opacity: 0.7,
    marginTop: -20
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
  bigCircle: {
    flex:1,
    width: null,
    height: null,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  minus: {
    width: 50,
    height: 50,
    margin: 20,
    opacity: 0.7,
    alignItems: 'flex-start'
  },
  plus: {
    width: 50,
    height: 50,
    margin: 20,
    opacity: 0.7,
    alignItems: 'flex-end'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

AppRegistry.registerComponent('tallyo', () => tallyo);
