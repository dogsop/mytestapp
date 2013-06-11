Ext.define('MyAppName.store.SmokerDataStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'MyAppName.model.SmokerData',
        proxy: {
            type: 'ajax',
            url: '../smoker/readtemp.php',
            reader: {
                type: 'json'
            }
        }
     }
});