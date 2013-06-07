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
                  	margin: '0 00 10 0',
                	html: '85'
                },
                {
                    xtype: 'panel',
                    baseCls: 'temperaturelabeldisplay',
                    docked: 'right',
                  	margin: '25 20 10 5',
                    html: '&#176F'
                }
            ]
        
    }
});
