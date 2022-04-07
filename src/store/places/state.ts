export interface PlacesState {
  isLoading: boolean
  userLocation?: [number, number] // optional
}

function state(): PlacesState {
  return {
    isLoading: false,
    userLocation: undefined,
  }
}

export default state
