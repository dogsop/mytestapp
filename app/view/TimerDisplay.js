Ext.define('MyAppName.view.TimerDisplay', {
    extend: 'Ext.Panel',
    xtype: 'timerdisplaypanel',

    config: {

    	titleLabel: 'Timer1',
    	
        styleHtmlContent: true,
        layout: 'vbox',
        baseCls: 'timerbox',
        
        items: [
                {
                    docked: 'top',
                	itemId: 'timerTitle',
                    xtype: 'titlebar',
                    title: 'none'
                },
                {
                	xtype: 'panel',
                	itemId: 'timerValue',
                	baseCls: 'timerdisplay',
                	html: '00:00:00'
                },
                {
                	itemId: 'startButton',
                    xtype: 'button',
                    cls: 'modus-button primary',
                    text: 'Start',
                    height: '30%',
                    ui: 'action-round'
                },
            ]
    },

    // Fires when the Panel is initialized
	initialize : function() {
		console.log('TimerDisplay ~ initialize');
		this.callParent(arguments);
	},

	updateTitleLabel: function(newName, oldName) {
    	console.log('updateTitleLabel called. New name is: ' + newName);
		var title = this.getComponent('timerTitle');
		if (title == undefined) {
			console.log('title not found');
		} else {
			console.log('Setting timer title');
			title.setTitle(newName);
		}
    }
},
function() {
    console.log('TimerDisplay Created!');
    //alert('Main Created!');
});
