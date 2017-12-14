import React from 'react'
import { View, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  main: {
    height: 1,
    width: '95%',
    backgroundColor: '#CCC',
    marginLeft: 5 
  }
})

const Separator = () => {
  return <View style={style.main} />
}

export { Separator }
