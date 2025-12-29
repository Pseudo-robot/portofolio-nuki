<template>
  <div class="app">
    <header class="header">
      <h1>WebGIS Pelabuhan Umum Indonesia</h1>
      <span>Data: Kementerian Perhubungan (WMS)</span>
    </header>
    <div style="flex:1; background:red">
      TEST MAP AREA
    </div>
    <!-- <MapView /> -->
  </div>
</template>

<script setup>
import MapView from '../components/MapView.client.vue'
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
}

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
               Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial;
}

.header {
  height: 56px;
  background: #0f172a;
  color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.header h1 {
  font-size: 16px;
  margin: 0;
}

.header span {
  font-size: 12px;
  color: #94a3b8;
}
</style>
