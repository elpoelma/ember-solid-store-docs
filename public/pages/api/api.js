YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "Ember.AuthService",
        "Ember.DataAdapter",
        "Ember.ForkingStore",
        "Ember.SemanticModel",
        "Ember.StoreService"
    ],
    "modules": [
        "ember",
        "ember-extension-support"
    ],
    "allModules": [
        {
            "displayName": "ember",
            "name": "ember"
        },
        {
            "displayName": "ember-extension-support",
            "name": "ember-extension-support",
            "description": "The `DataAdapter` helps a data persistence library\ninterface with tools that debug Ember such\nas the [Ember Extension](https://github.com/tildeio/ember-extension)\nfor Chrome and Firefox.\nThis class will be extended by a persistence library\nwhich will override some of the methods with\nlibrary-specific code.\nThe methods likely to be overridden are:\n* X `getFilters`\n* V `detect`\n* V `columnsForType`\n* V `getModelTypes`\n* V `getRecords`\n* V `getRecordColumnValues`\n* X `getRecordKeywords`\n* X `getRecordFilterValues`\n* X `getRecordColor`\n* X `observeRecord`\nThe adapter will need to be registered\nin the application's container as `dataAdapter:main`\nExample:\n```javascript\nApplication.initializer({\n  name: \"data-adapter\",\n  initialize: function(container, application) {\n    application.register('data-adapter:main', DS.DataAdapter);\n  }\n});\n```"
        }
    ],
    "elements": []
} };
});