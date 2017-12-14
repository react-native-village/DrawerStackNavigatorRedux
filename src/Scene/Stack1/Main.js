import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { 
  Header
} from '../../Common'

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: 
      <Header 
        title='Tesla'
        leftButton
        leftIcon='md-menu'
        colorLeft='black'
        rightButton
        rightIcon='md-add'
        colorRight='gold'
        navigation={navigation} 
        screen='DrawerOpen'
      />
  })

  render() {
    const { container, subContainer, thumbImg, titleContainer, titleContainer2, h1, chevron } = styles

    return (
      <View style={container}>
        <ScrollView>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
            <View style={subContainer}>
              <View style={titleContainer}>
                <Image style={thumbImg} source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
                <View style={titleContainer2}>
                  <Text style={h1} numberOfLines={1} ellipsizeMode='tail'>Model X</Text>
                </View>
              </View>
              <Icon style={chevron} name="chevron-right" size={50} color='black' />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  subContainer: {
    flex: 1,
    backgroundColor: '#92F6FC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    padding: 5
  },
  titleContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  thumbImg: {
    width: 100,
    height: 100
  },
  titleContainer2: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h1: {
    backgroundColor: 'transparent',
    flex: -1,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    fontFamily: 'AppleSDGothicNeo-Light',
    paddingLeft: 10,
    fontWeight: '600',
    color: '#000',
    fontSize: 17
  },
  h2: {
    backgroundColor: 'transparent',
    flex: -1,
    alignSelf: 'flex-start',
    fontFamily: 'AppleSDGothicNeo-Light',
    fontWeight: '300',
    paddingLeft: 10,
    color: '#8C8C8C',
    fontSize: 17
  },
  chevron: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignSelf: 'center'
  }
}

export default Main
