import React, { Component } from 'react'
import { NavigatorIOS } from 'react-native'
import ChooseAStorefront from './scenes/ChooseAStorefront'

function App() {
  return (
    // Set up routing and determine what the "homepage" is
    <NavigatorIOS
      style={{ flex: 1 }}
      initialRoute={{
        title: 'Choose A Storefront',
        component: ChooseAStorefront,
      }}
    />
  )
}

export default App
