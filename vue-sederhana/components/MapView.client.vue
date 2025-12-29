<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import L from 'leaflet'

let map

onMounted(() => {
  map = L.map('map').setView([-2.5, 118], 5)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map)

  L.tileLayer.wms(
    'https://gishub.kemenhub.go.id/geoserver/laut/PELABUHAN_PT_NEW/ows',
    {
      service: 'WMS',
      layers: 'PELABUHAN_PT_NEW',
      format: 'image/png',
      transparent: true,
      version: '1.3.0'
    }
  ).addTo(map)

  L.control.scale().addTo(map)
})

onBeforeUnmount(() => {
  if (map) map.remove()
})
</script>

<style scoped>
#map {
  flex: 1;
  width: 100%;
}
</style>