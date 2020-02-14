sap.ui.define( [    "sap/ui/core/UIComponent",
                    "sap/ui/model/json/JSONModel" ],
    function (UIComponent, JSONModel) {
        "use strict";

        return UIComponent.extend("Example2.app.Component", {
            metadata: {
                rootView: "Example2.app.view.App",
                routing: {
                    config: {
                        routerClass:        "sap.m.routing.Router",
                        viewPath:           "Example2.app.view",
                        controlId:          "rootControl",
                        controlAggregation: "pages",
                        viewType:           "XML"
                    },

                    routes: [ 
                        {   name    : "main",
                            pattern : "",
                            target  : "main" },
                        {   name    : "detail",
                            pattern : "detail",
                            target  : "detail" }
                    ],

                    targets: {
                        main:   { viewName: "main" },
                        detail: { viewName: "detail" }                        
                    }

                }

            },

            init : function() {
                // Initialize Router
                UIComponent.prototype.init.apply(this, arguments);
                this.getRouter().initialize();

                // Create UI Model accessible across the entire app
                let oData = {};
                let oModel = new JSONModel(oData);
                this.setModel(oModel);
            }
        })

}, true);