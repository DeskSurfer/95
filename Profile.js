import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Text
        style = {{
          fontSize: 30
        }}
        >Profile</Text>
      </View>
    )
  }
}