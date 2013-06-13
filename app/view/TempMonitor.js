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
                                title: 'Smoker Monitor'
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
            	        ]
                }
            ]
        
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

	    var vLayoutPanel = this.getComponent('vLayoutPanel'); 
        if (vLayoutPanel == undefined) {
    	    console.log('vLayoutPanel not found');
        } else {
    	    console.log('vLayoutPanel found');
    	    console.log('Looking for temp panels');
    	    var smokerPanel = vLayoutPanel.getComponent('smokerPanel'); 
            if (smokerPanel == undefined) {
        	    console.log('smokerPanel not found');
            } else {
        	    console.log('smokerPanel found');
        	    smokerPanel.setTitleLabel('Smoker');
        	    //vSmokerPanel.setTemperature(smokerData.smokerTemp);
            }
    	    
    	    var meatPanel = vLayoutPanel.getComponent('meatPanel'); 
            if (meatPanel == undefined) {
        	    console.log('meatPanel not found');
            } else {
        	    console.log('meatPanel found');
        	    meatPanel.setTitleLabel('Meat');
        	    //vMeatPanel.setTemperature(smokerData.meatTemp);
            }
        }
    	
	    var hLayoutPanel = this.getComponent('hLayoutPanel'); 
        if (hLayoutPanel == undefined) {
    	    console.log('hLayoutPanel not found');
        } else {
    	    console.log('hLayoutPanel found');
    	    console.log('Looking for temp panels');
    	    var smokerPanel = hLayoutPanel.getComponent('smokerPanel'); 
            if (smokerPanel == undefined) {
        	    console.log('smokerPanel not found');
            } else {
        	    console.log('smokerPanel found');
        	    smokerPanel.setTitleLabel('Smoker');
        	    //hSmokerPanel.setTemperature(smokerData.smokerTemp);
            }
    	    
    	    var meatPanel = hLayoutPanel.getComponent('meatPanel'); 
            if (meatPanel == undefined) {
        	    console.log('meatPanel not found');
            } else {
        	    console.log('meatPanel found');
        	    meatPanel.setTitleLabel('Meat');
        	    //hMeatPanel.setTemperature(smokerData.meatTemp);
            }
        }

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
