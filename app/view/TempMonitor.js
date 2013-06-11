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
                                title: 'Smellydog Smoker Monitor'
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
                                title: 'Smellydog Smoker Monitor'
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
            ]
        
    },
	// Fires when the Panel is initialized
	initialize: function () {
	    console.log('TempMonitor ~ initialize');
	    
        //var smokerDataStore = Ext.getStore('SmokerDataStore');
        var smokerData = smokerDataStore.getAt(0);
	    
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
    	    var vSmokerPanel = vLayoutPanel.getComponent('vSmokerPanel'); 
            if (vSmokerPanel == undefined) {
        	    console.log('vSmokerPanel not found');
            } else {
        	    console.log('vSmokerPanel found');
        	    vSmokerPanel.setTitleLabel('Smoker');
        	    vSmokerPanel.setTemperature(smokerData.get('smokerTemp'));
            }
    	    
    	    var vMeatPanel = vLayoutPanel.getComponent('vMeatPanel'); 
            if (vMeatPanel == undefined) {
        	    console.log('vMeatPanel not found');
            } else {
        	    console.log('vMeatPanel found');
        	    vMeatPanel.setTitleLabel('Meat');
        	    vMeatPanel.setTemperature(smokerData.get('meatTemp'));
            }
        }
    	
	    var hLayoutPanel = this.getComponent('hLayoutPanel'); 
        if (hLayoutPanel == undefined) {
    	    console.log('hLayoutPanel not found');
        } else {
    	    console.log('hLayoutPanel found');
    	    console.log('Looking for temp panels');
    	    var hSmokerPanel = hLayoutPanel.getComponent('hSmokerPanel'); 
            if (hSmokerPanel == undefined) {
        	    console.log('hSmokerPanel not found');
            } else {
        	    console.log('hSmokerPanel found');
        	    hSmokerPanel.setTitleLabel('Smoker');
        	    hSmokerPanel.setTemperature(smokerData.get('smokerTemp'));
            }
    	    
    	    var hMeatPanel = hLayoutPanel.getComponent('hMeatPanel'); 
            if (hMeatPanel == undefined) {
        	    console.log('hMeatPanel not found');
            } else {
        	    console.log('hMeatPanel found');
        	    hMeatPanel.setTitleLabel('Meat');
        	    hMeatPanel.setTemperature(smokerData.get('meatTemp'));
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
