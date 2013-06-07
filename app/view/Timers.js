Ext.define('MyAppName.view.Timers', {
    extend: 'Ext.Panel',
    xtype: 'timerspanel',

    config: {

        scrollable: true,
        styleHtmlContent: true,
        title: 'Timers',
        iconCls: 'action',
    	
        items: {
            docked: 'top',
            xtype: 'titlebar',
            title: 'Cooking Timers'
        },

        html: [
               "This is where the timers will go."
           ].join("")
        
    }
});
