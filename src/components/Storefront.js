import React from 'react'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  bigText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

export default function Storefront({ name, onPress }) {
  return (
    <Text onPress={onPress} style={styles.bigText}>
      {name}
    </Text>
  )
}
