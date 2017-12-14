import { StackNavigator } from 'react-navigation'
import Main from './Main'
import Detail from './Detail'

export default StackNavigator({
  Main: { screen: Main },
  Detail: { screen: Detail }
}, {
  headerMode: 'none'
})
