<template>
  <div>
    <GMapView />
    <GLocationButton />
    <GSearchBar />
  </div>
</template>

<script lang="ts">
import { usePlacesStore } from '../hooks/usePlacesStore'

import GMapView from '../components/GMapView/GMapView.vue'
import GLocationButton from '../components/GLocationButton/GLocationButton.vue'
import GSearchBar from '../components/GSearchBar/GSearchBar.vue'

export default {
  components: {
    GMapView,
    GLocationButton,
    GSearchBar,
  },
  setup() {
    usePlacesStore()
  },
}
</script>
