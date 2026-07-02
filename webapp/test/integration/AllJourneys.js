sap.ui.define([
    "sap/ui/test/Opa5",                                                     // add
    "sap/ui/demo/orderbrowser/test/integration/arrangements/Startup",       // add
    "sap/ui/demo/orderbrowser/test/integration/MasterJourney",
    "sap/ui/demo/orderbrowser/test/integration/NavigationJourney",
    "sap/ui/demo/orderbrowser/test/integration/NavigationJourneyPhone",
    "sap/ui/demo/orderbrowser/test/integration/NotFoundJourney",
    "sap/ui/demo/orderbrowser/test/integration/NotFoundJourneyPhone"
], function(Opa5, Startup) {                                                // add params
    "use strict";
    Opa5.extendConfig({                                                     // add block
        arrangements: new Startup(),
        viewNamespace: "sap.ui.demo.orderbrowser.view.",
        autoWait: true
    });
});