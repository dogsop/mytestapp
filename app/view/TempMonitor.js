Ext.define('MyAppName.view.TempMonitor', {
    extend: 'Ext.Panel',
    xtype: 'tempmonitorpanel',

    config: {

        scrollable: true,
        styleHtmlContent: true,
        title: 'Temperatures',
        iconCls: 'home',
        layout: 'vbox',
    	
        items: [
                {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Smellydog Smoker Monitor'
                },
                {
                	itemId: 'smokerTemp',
                    xtype: 'tempdisplaypanel',
                    flex: 1
                },
                {
                	itemId: 'meatTemp',
                    xtype: 'tempdisplaypanel',
                    flex: 1
                }
            ],
        
    }
});
