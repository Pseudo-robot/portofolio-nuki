/* =====================
   INIT MAP
===================== */
const map = L.map('map').setView([-2.5, 118], 5);

/* =====================
   BASEMAP
===================== */
const osm = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; OpenStreetMap'
  }
).addTo(map);

/* =====================
   WMS PELABUHAN
===================== */
const wmsUrl =
  'https://gishub.kemenhub.go.id/geoserver/laut/PELABUHAN_PT_NEW/ows';

const pelabuhanWMS = L.tileLayer.wms(wmsUrl, {
  service: 'WMS',
  layers: 'PELABUHAN_PT_NEW',
  format: 'image/png',
  transparent: true,
  version: '1.3.0'
}).addTo(map);

/* =====================
   LAYER CONTROL
===================== */
L.control.layers(
  { 'OpenStreetMap': osm },
  { 'Pelabuhan Umum': pelabuhanWMS }
).addTo(map);

/* =====================
   SCALE
===================== */
L.control.scale().addTo(map);

/* =====================
   POPUP (GetFeatureInfo)
===================== */
map.on('click', function (e) {
  const point = map.latLngToContainerPoint(e.latlng, map.getZoom());
  const size = map.getSize();

  const params = {
    service: 'WMS',
    request: 'GetFeatureInfo',
    version: '1.3.0',
    layers: 'PELABUHAN_PT_NEW',
    query_layers: 'PELABUHAN_PT_NEW',
    info_format: 'application/json',
    crs: 'EPSG:3857',
    bbox: map.getBounds().toBBoxString(),
    width: size.x,
    height: size.y,
    i: Math.round(point.x),
    j: Math.round(point.y)
  };

  const url =
    wmsUrl +
    '?' +
    Object.keys(params)
      .map(k => k + '=' + encodeURIComponent(params[k]))
      .join('&');

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data.features || data.features.length === 0) return;

      const props = data.features[0].properties;

      let html = '<b>Informasi Pelabuhan</b><br><hr>';
      for (const key in props) {
        if (props[key] !== null && props[key] !== '') {
          html += `<b>${key}</b>: ${props[key]}<br>`;
        }
      }

      L.popup()
        .setLatLng(e.latlng)
        .setContent(html)
        .openOn(map);
    })
    .catch(err => console.error(err));
});

/* =====================
   LEGEND (WMS)
===================== */
const legend = L.control({ position: 'bottomright' });

legend.onAdd = function () {
  const div = L.DomUtil.create('div', 'legend');
  div.innerHTML = `
    <b>Legenda</b><br>
    <img
      src="${wmsUrl}?service=WMS&version=1.3.0&request=GetLegendGraphic&format=image/png&layer=PELABUHAN_PT_NEW"
      style="vertical-align: middle"
    />
    <span> Pelabuhan Umum</span>
  `;
  return div;
};

legend.addTo(map);