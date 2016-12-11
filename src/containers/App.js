import React, { Component } from 'react'
import { NavigatorIOS } from 'react-native'
import ChooseAStorefront from './scenes/ChooseAStorefront'
import ShowStorefront from './scenes/ShowStorefront'

function App() {
  return (
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
