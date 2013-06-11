Ext.define('MyAppName.model.SmokerData', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'smokerTemp', type: 'string' },
            { name: 'meatTemp', type: 'string' }
        ]
    }
});