import { computed } from 'vue'
import { useStore } from 'vuex'
import store, { StateInterface } from '../store'

export const useMapStore = () => {
  const { state, commit, getters } = useStore<StateInterface>()

  return {
    map: computed(() => state.map.map),
    distance: computed(() => state.map.distance),
    duration: computed(() => state.map.duration),
    /* Getters */
    isMapReady: computed<boolean>(() => getters['map/isMapReady']),

    /* Mutations */
    setMap: (map: mapboxgl.Map) => commit('map/setMap', map),
  }
}
