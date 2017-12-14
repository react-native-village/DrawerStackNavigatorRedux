import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions
} from 'react-native'
import { 
  Header 
} from '../../Common'

const win = Dimensions.get('window')

class Detail extends Component {
  static navigationOptions = ({ navigation }) => ({
    header:  
      <Header 
        title='Mercedes' 
        backButton
        leftIcon='ios-arrow-back'
        colorLeft='black'
        navigation={navigation} 
        screen='goBack'
      />
  })

  render() {
    const { container, imageStyle } = styles

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={container}>
          <Image style={imageStyle} source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 40 }}>Mercedes-AMG</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative'
  },
  imageStyle: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    width: win.width,
    height: win.width
  }
}

export default Detail
