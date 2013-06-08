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
    	    console.log('Looking for temp panels');
    	    var smokerPanel = tempMonitorPanel.getComponent('smokerPanel'); 
            if (smokerPanel == undefined) {
        	    console.log('smokerPanel not found');
            } else {
        	    console.log('smokerPanel found');
        	    var title = smokerPanel.getComponent('tempTitle'); 
                if (title == undefined) {
            	    console.log('title not found');
                } else {
            	    console.log('Setting title');
                	title.setTitle('Smoker');
                }
            }
    	    
    	    var meatPanel = tempMonitorPanel.getComponent('meatPanel'); 
            if (meatPanel == undefined) {
        	    console.log('meatPanel not found');
            } else {
        	    console.log('meatPanel found');
        	    var title = meatPanel.getComponent('tempTitle'); 
                if (title == undefined) {
            	    console.log('title not found');
                } else {
            	    console.log('Setting title');
                	title.setTitle('Meat');
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
