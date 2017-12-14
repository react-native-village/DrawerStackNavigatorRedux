import React, { Component } from 'react'
import { addNavigationHelpers, StackNavigator, DrawerNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Stack1 from './Scene/Stack1'
import Stack2 from './Scene/Stack2'
import Stack3 from './Scene/Stack3'

const App = DrawerNavigator(
  {
    Screen: {
      screen: Stack1,
      navigationOptions: {
        drawerLabel: 'Tesla',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="grade" size={24} style={{ color: tintColor }} />
        )
      }
    },
    Screen2: {
      screen: Stack2,
      navigationOptions: {
        drawerLabel: 'BMW',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="favorite" size={24} style={{ color: tintColor }} />
        )
      }
    },
    Screen3: {
      screen: Stack3,
      navigationOptions: {
        drawerLabel: 'Mercedes',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="pets" size={24} style={{ color: tintColor }} />
        )
      }
    }
  },
  {
    initialRouteName: 'Screen',
    contentOptions: {
      activeTintColor: '#e91e63'
    }
  }
)

const AppMainNav = StackNavigator({
  Home: {
    screen: App 
  }
}, {
  navigationOptions: () => ({
    headerStyle: {
      backgroundColor: 'gold' 
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: 'gold' 
    }
  }) 
})

class AppNavigation extends Component {
  render() {
    const nav = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav 
    })
    return <AppMainNav navigation={nav} /> 
  }
}

export default connect(state => ({
  nav: state.nav
}))(AppNavigation)

export const router = AppMainNav.router
