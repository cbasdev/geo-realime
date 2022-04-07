<template>
  <button
    v-if="isBtnReady"
    class="rounded-lg px-4 py-2 bg-purple-600 hover:bg-purple-700 duration-300 z-50 btn-location text-white"
    @click="onMyLocationClicked"
  >
    Ir a mi ubicación
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useMapStore, usePlacesStore } from '../../hooks'

export default defineComponent({
  setup() {
    const { userLocation, isUserLocationReady } = usePlacesStore()
    const { map, isMapReady } = useMapStore()
    return {
      isBtnReady: computed<boolean>(
        () => isUserLocationReady.value && isMapReady.value
      ),
      onMyLocationClicked: () => {
        map.value?.flyTo({
          center: userLocation.value,
          zoom: 14,
        })
      },
    }
  },
})
</script>

<style scoped>
.btn-location {
  position: fixed;
  bottom: 25px;
  right: 125px;
}
</style>
