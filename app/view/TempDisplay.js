Ext.define('MyAppName.view.TempDisplay', {
    extend: 'Ext.Panel',
    xtype: 'tempdisplaypanel',

    config: {

    	temperature: null,
    	
        styleHtmlContent: true,
        layout: 'hbox',
        baseCls: 'temperaturebox',
        
        items: [
                {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Smoker'
                },
                {
                	xtype: 'panel',
                	baseCls: 'temperaturedisplay',
                    flex: 1,
                	html: '85'
                },
                {
                    xtype: 'panel',
                    baseCls: 'temperaturelabeldisplay',
                    docked: 'right',
                    html: '&#176F'
                }
            ]
        
    }
});
