import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { StateInterface } from '../store/index'

export const usePlacesStore = () => {
  const { dispatch, getters, state } = useStore<StateInterface>()

  onMounted(() => {
    if (!getters['places/isUserLocationReady']) {
      dispatch('places/getInitialLocation')
    }
  })

  return {
    /* State */
    isLoading: computed(() => state.places.isLoading),
    userLocation: computed(() => state.places.userLocation),

    /* Getters */
    isUserLocationReady: computed<boolean>(
      () => getters['places/isUserLocationReady']
    ),
  }
}
