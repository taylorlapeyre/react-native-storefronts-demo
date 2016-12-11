import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import StorefrontDetail from '../../components/StorefrontDetail'
import { selectStorefront } from '../../actions/synchronous'

function ShowStorefront({ navigator, currentStorefront }) {
  return (
    <StorefrontDetail
      storefront={currentStorefront}
      onPressName={() => navigator.pop() /* essentially window.location.back() */}
    />
  )
}

function mapStateToProps(state) {
  return {
    currentStorefront: state.currentStorefront
  }
}

export default connect(mapStateToProps)(ShowStorefront)
