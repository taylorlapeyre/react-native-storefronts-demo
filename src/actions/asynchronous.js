import { receiveStorefronts } from './synchronous'

export function fetchStorefronts() {
  return (dispatch, getState) => {
    if (getState().storefronts.length === 0) {
      return fetch('https://everlane.com/api/v2/storefronts')
        .then(response => response.json())
        .then(responseJSON => dispatch(receiveStorefronts(responseJSON.storefronts)))
    }
  }
}
