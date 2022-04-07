import { MutationTree } from 'vuex'
import { PlacesState } from './state'

const mutation: MutationTree<PlacesState> = {
  setLngLat(state: PlacesState, { lng, lat }: { lng: number; lat: number }) {
    state.userLocation = [lng, lat]
  },
}

export default mutation
