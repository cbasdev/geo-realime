<template>
  <div>
    <div class="max-h-50 p-20" v-if="!isUserLocationReady">
      <span
        class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-purple-400 opacity-100 ring-inset ring-8"
        viewBox="0 0 24"
      >
      </span>
    </div>
    <div
      v-show="isUserLocationReady"
      class="bg-purple-400 w-screen h-screen"
      ref="mapElement"
    ></div>
  </div>
</template>

<script lang="ts" src="./GMapView.ts"></script>

<style scoped></style>
