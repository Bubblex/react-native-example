import React from 'react'
import { StackNavigator } from 'react-navigation'
import UserScreen from './src/screen/user'
import HomeScreen from './src/screen/main'
import dva, { connect } from 'dva/mobile'
import userModel from './src/models/user'

const app = dva()

const SimpleApp = StackNavigator({
	Home: { screen: HomeScreen },
	User: { screen: UserScreen },
})

class App extends React.Component {
	render() {
		return <SimpleApp />
	}
}

app.model(userModel)

app.router(() => <App />)

export default app.start()
