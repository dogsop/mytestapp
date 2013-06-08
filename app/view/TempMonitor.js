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
                	itemId: 'smokerPanel',
                    xtype: 'tempdisplaypanel',
                    flex: 1
                },
                {
                	itemId: 'meatPanel',
                    xtype: 'tempdisplaypanel',
                    flex: 1
                }
            ],
        
    },
	// Fires when the Panel is initialized
	initialize: function () {
	    console.log('TempMonitor ~ initialize');
	    // Add a Listener. Listen for [Viewport ~ Orientation] Change.
	    Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
	    this.callParent(arguments);
	},
	handleOrientationChange: function(){
	    console.log('rpc.view.home.indexView ~ handleOrientationChange');
	    // Execute the code that needs to fire on Orientation Change.
	}
},
function() {
    console.log('TempMonitor Created!');
    //alert('TempMonitor Created!');
});
