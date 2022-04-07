import { defineComponent, ref, onMounted, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
import { usePlacesStore, useMapStore } from '../../hooks'

export default defineComponent({
  name: 'GMapView',
  setup() {
    const mapElement = ref<HTMLDivElement>()

    const { userLocation, isUserLocationReady } = usePlacesStore()
    const { setMap } = useMapStore()

    const initMap = async () => {
      if (!mapElement.value) return
      if (!userLocation.value) return

      await Promise.resolve()

      const map = new mapboxgl.Map({
        container: mapElement.value, // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom
      })

      const myLocationMarker = new mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .addTo(map)

      const myLocationPopop = new mapboxgl.Popup({ offset: 25 })
        .setLngLat(userLocation.value)
        .setHTML(
          `
        <h4>Tu ubicación</h4>
        <p>${userLocation.value}</p>
        `
        )
        .addTo(map)

      /* map in vuex */
      setMap(map)
    }
    onMounted(() => {
      if (isUserLocationReady.value) return initMap()

      console.log('no tengo localización @')
    })

    watch(isUserLocationReady, () => {
      if (isUserLocationReady) initMap()
    })

    return {
      isUserLocationReady,
      mapElement,
    }
  },
})
