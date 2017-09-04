Qordoba.init({
  siteKey: "5151.0ec53c34ceb021b4c7907d31db2ff752",
  translateOverride: true,
  selectLastLanguage: false,
  pathMap: [
    {
      path: "mongodb.com/.*[&?]language=<lang>",
      source: "com",
      targets: [
        {
          code: "de-de",
          val: "de"
        },
        {
          code: "fr-fr",
          val: "fr"
        },
        {
          code: "it-it",
          val: "it"
        },
        {
          code: "es-es",
          val: "es"
        }]
    }
  ]
});