document
  .getElementById("countrySelect")
  .addEventListener("change", function () {

    if (!window.adminLayer || !window.view) return;

    const val = this.value;

    // reset
    if (!val) {
      adminLayer.definitionExpression = "1=1";
      return;
    }

    // FILTER POLYGON NEGARA
    adminLayer.definitionExpression =
      `UPPER(COUNTRY) = '${val.toUpperCase()}'`;

    // ZOOM KE HASIL FILTER
    adminLayer.queryExtent().then((res) => {
      if (res.extent) {
        view.goTo(res.extent.expand(1.2));
      }
    });
});
