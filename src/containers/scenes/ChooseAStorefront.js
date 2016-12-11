import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import StorefrontList from '../../components/StorefrontList'
import { fetchStorefronts } from '../../actions/asynchronous'
import { selectStorefront } from '../../actions/synchronous'
import ShowStorefront from './ShowStorefront'

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

class ChooseAStorefront extends Component {
  componentDidMount() {
    this.props.fetchStorefronts()
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.storefronts.length > 0 && (
          <StorefrontList
            storefronts={this.props.storefronts}
            onPressStorefront={(storefront) => {
              this.props.selectStorefront(storefront)
              this.props.navigator.push({
                title: storefront.name,
                component: ShowStorefront,
              })
            }}
          />
        )}
      </View>
    )
  }
}

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
