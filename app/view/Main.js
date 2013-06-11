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
                xtype: 'tempmonitorpanel',
            	itemId: 'tempMonitorPanel'
            },
            {
                xtype: 'timerspanel'
            }
        ]
    },
	// Fires when the Panel is initialized
	initialize: function () {
	    console.log('Main ~ initialize');
	    this.callParent(arguments);
	}
},
function() {
    console.log('Main Created!');
    //alert('Main Created!');
});
