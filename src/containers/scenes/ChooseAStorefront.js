import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import StorefrontList from '../../components/StorefrontList'
import { fetchStorefronts } from '../../actions/asynchronous'
import { selectStorefront } from '../../actions/synchronous'
import ShowStorefront from './ShowStorefront'

class ChooseAStorefront extends Component {
  constructor(props) {
    super(props)
    this.handlePressStorefront = this.handlePressStorefront.bind(this)
  }

  componentDidMount() {
    this.props.fetchStorefronts()
  }

  handlePressStorefront(storefront) {
    // Update redux app state
    this.props.selectStorefront(storefront)

    // Route to new page
    this.props.navigator.push({
      title: storefront.name, // <head><title></head>
      component: ShowStorefront, // <body></body>
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.storefronts.length > 0 && (
          <StorefrontList
            storefronts={this.props.storefronts}
            onPressStorefront={this.handlePressStorefront}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

function mapStateToProps(state) {
  return {
    storefronts: state.storefronts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchStorefronts: () => dispatch(fetchStorefronts()),
    selectStorefront: (storefront) => dispatch(selectStorefront(storefront))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseAStorefront)
