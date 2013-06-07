Ext.define('MyAppName.view.Temperatures', {
    extend: 'Ext.Panel',
    xtype: 'temperaturespanel',

    config: {

        scrollable: true,
        styleHtmlContent: true,
        title: 'Temperatures',
        iconCls: 'home',
    	
        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Smellydog Smoker Monitor'
        },

        html: [
               "This is where the temperatures will go when I finish."
           ].join("")
        
    }
});
