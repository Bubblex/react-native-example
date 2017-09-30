import React from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'antd-mobile';

export default class App extends React.Component {
  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <Button  
          type='primary'
          onClick={this._handleButtonPress}
        >alert</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
