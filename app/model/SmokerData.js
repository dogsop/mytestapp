Ext.define('MyAppName.model.SmokerData', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'smokerTemp', type: 'string' },
            { name: 'meatTemp', type: 'string' }
        ]
    }
});