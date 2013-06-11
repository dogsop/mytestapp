Ext.define('MyAppName.view.TempDisplay', {
    extend: 'Ext.Panel',
    xtype: 'tempdisplaypanel',

    config: {

    	temperature: null,
    	titleLabel: 'Temp1',
    	
        styleHtmlContent: true,
        layout: 'hbox',
        baseCls: 'temperaturebox',
        
        items: [
                {
                    docked: 'top',
                	itemId: 'tempTitle',
                    xtype: 'titlebar',
                    title: 'none'
                },
                {
                	xtype: 'panel',
                	itemId: 'tempValue',
                	baseCls: 'temperaturedisplay',
                    flex: 1,
                	html: '---'
                },
                {
                    xtype: 'panel',
                    baseCls: 'temperaturelabeldisplay',
                    docked: 'right',
                    html: '&#176F'
                }
            ]
    },

    // Fires when the Panel is initialized
	initialize : function() {
		console.log('TempDisplay ~ initialize');
		this.callParent(arguments);
	},

	updateTitleLabel: function(newName, oldName) {
    	console.log('updateTitleLabel called. New name is: ' + newName);
		var title = this.getComponent('tempTitle');
		if (title == undefined) {
			console.log('title not found');
		} else {
			console.log('Setting title');
			title.setTitle(newName);
		}
    },

    updateTemperature: function(newTemperature, oldTemperature) {
    	//console.log('updateTemperature called. New temperature is: ' + newTemperature);
		var tempValue = this.getComponent('tempValue');
		if (tempValue == undefined) {
			console.log('tempValue not found');
		} else {
			//console.log('Setting tempValue');
			tempValue.setHtml(newTemperature);
		}
    }
},
function() {
    console.log('TempDisplay Created!');
    //alert('Main Created!');
});
