import React from 'react'
import { ListView } from 'react-native'
import Storefront from './Storefront'

export default function StorefrontList({ storefronts, onPressStorefront }) {
  const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  })

  return (
    <ListView
      dataSource={dataSource.cloneWithRows(storefronts)}
      renderRow={storefront =>
        <Storefront
          {...storefront}
          onPress={() => onPressStorefront(storefront)}
        />}
    />
  )
}
