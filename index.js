import React from 'react'
import {
  AppRegistry
} from 'react-native'
import { Provider } from 'react-redux'
import {
  createStore,
  applyMiddleware
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import AppNavigation from './src/navigations'
import AppReducer from './src/reducers'

const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('DrawerStackNavigatorRedux', () => App)
