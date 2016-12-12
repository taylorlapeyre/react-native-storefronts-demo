import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default function StorefrontDetail({ storefront, onPressName }) {
  return (
    <View style={styles.container}>
      <Text onPress={onPressName}>{storefront.name}</Text>
      <Text>{storefront.street_address}</Text>
      <Text>{storefront.city}</Text>
      <Text>{storefront.postal_code}</Text>
    </View>
  )
}
