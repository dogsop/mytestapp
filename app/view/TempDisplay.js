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
                    title: 'Smoker'
                },
                {
                	xtype: 'panel',
                	baseCls: 'temperaturedisplay',
                    flex: 1,
                	html: '85'
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
	initialize: function () {
	    console.log('TempDisplay ~ initialize');
	    this.callParent(arguments);
    }

},
function() {
    console.log('TempDisplay Created!');
    //alert('Main Created!');
});
