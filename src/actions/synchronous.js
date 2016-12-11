export function receiveStorefronts(storefronts) {
  return {
    type: 'RECEIVE_STOREFRONTS',
    payload: storefronts,
  }
}

export function selectStorefront(storefront) {
  return {
    type: 'SELECT_STOREFRONT',
    payload: storefront,
  }
}
