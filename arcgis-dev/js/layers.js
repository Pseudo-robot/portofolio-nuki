require(["esri/layers/FeatureLayer"], function (FeatureLayer) {

  window.adminLayer = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/World_Administrative_Divisions/FeatureServer/0",
    outFields: ["*"],
    popupTemplate: {
      title: "{NAME}",
      content: `
        <b>Country:</b> {COUNTRY}<br>
        <b>Continent:</b> {CONTINENT}<br>
        <b>Admin Type:</b> {ADMINTYPE}
      `
    }
  });

  map.add(adminLayer);
});
