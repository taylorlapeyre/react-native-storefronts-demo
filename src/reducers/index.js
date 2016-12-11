const initialState = {
  storefronts: [],
  currentStorefront: null,
}

export default function reducer(state = initialState, action) {
  if (action.type === 'RECEIVE_STOREFRONTS') {
    return Object.assign({}, state, { storefronts: action.payload })
  }

  if (action.type === 'SELECT_STOREFRONT') {
    return Object.assign({}, state, { currentStorefront: action.payload })
  }

  return state
}
