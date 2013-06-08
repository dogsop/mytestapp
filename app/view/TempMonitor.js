Ext.define('MyAppName.view.TempMonitor', {
    extend: 'Ext.Panel',
    xtype: 'tempmonitorpanel',

    config: {

        scrollable: true,
        styleHtmlContent: true,
        title: 'Temperatures',
        iconCls: 'home',
        layout: {    
            type: 'card'
        },    	

        items: [
                {
                	itemId: 'vLayoutPanel',
                	xtype: 'panel',
                	layout: {
                		type: 'vbox'
                	},
                	items: [
                            {
                                docked: 'top',
                                xtype: 'titlebar',
                                title: 'vSmellydog Smoker Monitor'
                            },
                            {
                            	itemId: 'vSmokerPanel',
                                xtype: 'tempdisplaypanel',
                                flex: 1
                            },
                            {
                            	itemId: 'vMeatPanel',
                                xtype: 'tempdisplaypanel',
                                flex: 1
                            }
            	        ]
                },
                {
                	itemId: 'hLayoutPanel',
                	xtype: 'panel',
                	layout: {
                		type: 'hbox'
                	},
                	items: [
                            {
                                docked: 'top',
                                xtype: 'titlebar',
                                title: 'hSmellydog Smoker Monitor'
                            },
                            {
                            	itemId: 'hSmokerPanel',
                                xtype: 'tempdisplaypanel',
                                flex: 1
                            },
                            {
                            	itemId: 'hMeatPanel',
                                xtype: 'tempdisplaypanel',
                                flex: 1
                            }
            	        ]
                }
            ],
        
    },
	// Fires when the Panel is initialized
	initialize: function () {
	    console.log('TempMonitor ~ initialize');
	    
	    if(Ext.Viewport.getOrientation()=='portrait') {
		    console.log('orientation is portrait');
		    this.setActiveItem(0);
	    } else {
		    console.log('orientation is landscape');
		    this.setActiveItem(1);
	    }
	    
	    console.log('setting orientation change handler');

	    // Add a Listener. Listen for [Viewport ~ Orientation] Change.
	    Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
	    
	    this.callParent(arguments);
	},
	handleOrientationChange: function(){
	    console.log('rpc.view.home.indexView ~ handleOrientationChange');
	    // Execute the code that needs to fire on Orientation Change.
	    if(Ext.Viewport.getOrientation()=='portrait') {
		    console.log('new orientation is portrait');
		    this.setActiveItem(0);
	    } else {
		    console.log('new orientation is landscape');
		    this.setActiveItem(1);
	    }
	}
},
function() {
    console.log('TempMonitor Created!');
    //alert('TempMonitor Created!');
});
