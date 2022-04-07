import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Global Styles */
import './assets/styles/index.css'

/* Validate geolocation */
if (!navigator.geolocation) {
  throw new Error("Your browser doesn't support geolocation")
}

import mapboxgl from 'mapbox-gl' // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2Jhc2RldiIsImEiOiJjbDFvYXB3ODMwNTMwM2p1aW40NG1vMTNiIn0._TzVzQqilNsxwKFCkhE_CA'

createApp(App).use(store).use(router).mount('#app')
