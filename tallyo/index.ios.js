import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput
} from 'react-native';

var tallyo = React.createClass( {
  getInitialState() {
    return ({
      counter: 0
    });
  },
  plusClicked: function(){
    this.setState({
      counter: this.state.counter + 1
    });
  },
  minusClicked: function(){
    this.setState({
      counter: this.state.counter - 1
    });
  },
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
              {this.state.counter}
            </Text>
            <TextInput style={styles.text} placeholder='name your tallyo'/>


          </View>
        </Image>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={this.minusClicked}>

            <Image
              source={require('./images/minus.png')}
              style={styles.minus}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.plusClicked}>
              <Image
                source={require('./images/plus.png')}
                style={styles.plus}
              />
            </TouchableOpacity>

        </View>


      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 3,
    position: 'relative',
    backgroundColor: '#032529',
  },
  num: {
    fontSize: 140,
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
    marginTop: -20,
    height: 40
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
    width: 300,
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
