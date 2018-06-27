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
  View, 
  AsyncStorage
} from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import Login from './Login'
import SignUpLogin from './SignUpLogin'
import Home from './Home'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


const ACCESS_TOKEN = 'access-token'

class AuthLoadingScreen extends Component{

  constructor(){
    super()
    this.checkToken()
  }


  checkToken = async() => {
    try{
      const token = await AsyncStorage.getItem(ACCESS_TOKEN)

      this.props.navigation.navigate(token ? 'AppStack' : 'AuthStack')

    }catch(error){
      console.log(error)
    }
  }

  render() {
    return (
      
        <View>

        </View>
      
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

export const AuthStack = createStackNavigator({ 
  SignUpLogin: SignUpLogin, 
  // Register: Register,
  Login: Login,
},
{
  initialRouteName: 'SignUpLogin'
}
)

export const AppStack = createStackNavigator({
  Home: Home
})



export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  AuthStack: AuthStack,
  AppStack: AppStack,
},
{
  initialRouteName: 'AuthLoading'
}
)