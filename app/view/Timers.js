Ext.define('MyAppName.view.Timers', {
	extend : 'Ext.Panel',
	xtype : 'timerspanel',

	config : {

		scrollable : true,
		styleHtmlContent : true,
		title : 'Timers',
		iconCls : 'star',
        layout: {    
            type: 'card'
        },    	


		items : [ {
			itemId : 'vLayoutPanel',
			xtype : 'panel',
			layout : {
				type : 'vbox'
			},
			items : [ {
				docked : 'top',
				xtype : 'titlebar',
				title : 'Cooking Timers'
			}, {
				itemId : 'timer1Panel',
				xtype : 'timerdisplaypanel',
				flex : 1
			}, {
				itemId : 'timer2Panel',
				xtype : 'timerdisplaypanel',
				flex : 1
			} ]
		}, {
			itemId : 'hLayoutPanel',
			xtype : 'panel',
			layout : {
				type : 'hbox'
			},
			items : [ {
				docked : 'top',
				xtype : 'titlebar',
				title : 'Cooking Timers'
			}, {
				itemId : 'timer1Panel',
				xtype : 'timerdisplaypanel',
				flex : 1
			}, {
				itemId : 'timer2Panel',
				xtype : 'timerdisplaypanel',
				flex : 1
			} ]
		} ]

	},
	// Fires when the Panel is initialized
	initialize: function () {
	    console.log('Timers ~ initialize');
	    
	    
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
    	    console.log('Looking for timer panels');
    	    var timer1Panel = vLayoutPanel.getComponent('timer1Panel'); 
            if (timer1Panel == undefined) {
        	    console.log('timer1Panel not found');
            } else {
        	    console.log('timer1Panel found');
        	    timer1Panel.updateTitleLabel('Timer 1');
        	    //vSmokerPanel.setTemperature(smokerData.smokerTemp);
            }
    	    
    	    var timer2Panel = vLayoutPanel.getComponent('timer2Panel'); 
            if (timer2Panel == undefined) {
        	    console.log('timer2Panel not found');
            } else {
        	    console.log('timer2Panel found');
        	    timer2Panel.updateTitleLabel('Timer 2');
        	    //vMeatPanel.setTemperature(smokerData.meatTemp);
            }
        }
    	
	    var hLayoutPanel = this.getComponent('hLayoutPanel'); 
        if (hLayoutPanel == undefined) {
    	    console.log('hLayoutPanel not found');
        } else {
    	    console.log('hLayoutPanel found');
    	    console.log('Looking for temp panels');
    	    var timer1Panel = hLayoutPanel.getComponent('timer1Panel'); 
            if (timer1Panel == undefined) {
        	    console.log('timer1Panel not found');
            } else {
        	    console.log('timer1Panel found');
        	    timer1Panel.updateTitleLabel('Timer 1');
        	    //hSmokerPanel.setTemperature(smokerData.smokerTemp);
            }
    	    
    	    var timer2Panel = hLayoutPanel.getComponent('timer2Panel'); 
            if (timer2Panel == undefined) {
        	    console.log('timer2Panel not found');
            } else {
        	    console.log('timer2Panel found');
        	    timer2Panel.updateTitleLabel('Timer 2');
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
    console.log('Timers Created!');
    //alert('TempMonitor Created!');
});
