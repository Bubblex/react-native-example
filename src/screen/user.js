import React from 'react'
import { Alert } from 'react-native'
import { Button } from 'antd-mobile'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'dva/mobile'

class UserScreen extends React.Component {
    static navigationOptions = {
        title: 'User'
    }

    _handleButtonPress = () => {
        Alert.alert(
            'Button onClick!',
            'You did it!',
        )

        this.props.dispatch({
            type: 'user/changeUsername',
            username: 'xiaoxiao'
        })
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
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
})

export default connect((state) => {
    return state
})(UserScreen)
