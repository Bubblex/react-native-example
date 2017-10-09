import React from 'react'
import { Button } from 'antd-mobile'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    const { navigate } = this.props.navigation
    return (
      <Button
        onClick={() => navigate('User')}
      >团队</Button>
    )
  }
}

export default HomeScreen
