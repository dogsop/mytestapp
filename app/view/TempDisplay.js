Ext.define('MyAppName.view.TempDisplay', {
    extend: 'Ext.Panel',
    xtype: 'tempdisplaypanel',

    config: {

    	temperature: null,
    	
        styleHtmlContent: true,
        layout: 'vbox',
        baseCls: 'temperaturebox',
        
    }
});
