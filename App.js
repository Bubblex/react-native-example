import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Button } from 'antd-mobile'
import UserScreen from './src/user'
import HomeScreen from './src/main'

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  User: { screen: UserScreen },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}
