import React from 'react'
import { Button } from 'antd-mobile'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { connect } from 'dva/mobile'

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View>
                <Text>{this.props.user.username}</Text>
                <Button
                    onClick={() => navigate('User')}
                >团队</Button>
            </View>
        )
    }
}

export default connect((state) => {
    return state
})(HomeScreen)
