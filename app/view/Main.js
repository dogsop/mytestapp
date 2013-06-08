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
            	itemId: 'tempMonitorPanel',
            },
            {
                xtype: 'timerspanel'
            }
        ]
    },
	// Fires when the Panel is initialized
	initialize: function () {
	    console.log('Main ~ initialize');
	    
	    console.log('Looking for temp panels');
	    
	    var tempMonitorPanel = this.getComponent('tempMonitorPanel'); 
        if (tempMonitorPanel == undefined) {
    	    console.log('tempMonitorPanel not found');
        } else {
    	    console.log('tempMonitorPanel found');
        	
    	    var vLayoutPanel = tempMonitorPanel.getComponent('vLayoutPanel'); 
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
            	    var title = vSmokerPanel.getComponent('tempTitle'); 
                    if (title == undefined) {
                	    console.log('title not found');
                    } else {
                	    console.log('Setting title');
                    	title.setTitle('Smoker');
                    }
                }
        	    
        	    var vMeatPanel = vLayoutPanel.getComponent('vMeatPanel'); 
                if (vMeatPanel == undefined) {
            	    console.log('vMeatPanel not found');
                } else {
            	    console.log('vMeatPanel found');
            	    var title = vMeatPanel.getComponent('tempTitle'); 
                    if (title == undefined) {
                	    console.log('title not found');
                    } else {
                	    console.log('Setting title');
                    	title.setTitle('Meat');
                    }
                }
            }
        	
    	    var hLayoutPanel = tempMonitorPanel.getComponent('hLayoutPanel'); 
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
            	    var title = hSmokerPanel.getComponent('tempTitle'); 
                    if (title == undefined) {
                	    console.log('title not found');
                    } else {
                	    console.log('Setting title');
                    	title.setTitle('Smoker');
                    }
                }
        	    
        	    var hMeatPanel = hLayoutPanel.getComponent('hMeatPanel'); 
                if (hMeatPanel == undefined) {
            	    console.log('hMeatPanel not found');
                } else {
            	    console.log('hMeatPanel found');
            	    var title = hMeatPanel.getComponent('tempTitle'); 
                    if (title == undefined) {
                	    console.log('title not found');
                    } else {
                	    console.log('Setting title');
                    	title.setTitle('Meat');
                    }
                }
            }
        	
        }

	    this.callParent(arguments);
	}
},
function() {
    console.log('Main Created!');
    //alert('Main Created!');
});
