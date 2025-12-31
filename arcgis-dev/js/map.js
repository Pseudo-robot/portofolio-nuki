require([
  "esri/Map",
  "esri/views/MapView"
], function(Map, MapView) {

  window.map = new Map({
    basemap: "streets-navigation-vector"
  });

  window.view = new MapView({
    container: "viewDiv",
    map: map,
    center: [118, -2],
    zoom: 4
  });

});
