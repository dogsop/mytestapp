Ext.define('MyAppName.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',

    requires: [
        'Ext.TitleBar'
    ],

    config: {

        tabBarPosition: 'bottom',

        defaults: {
            styleHtmlContent: true
        },
     
        items: [
            {
                xtype: 'tempmonitorpanel'
            },
            {
                xtype: 'timerspanel'
            }
        ]
    }
});
