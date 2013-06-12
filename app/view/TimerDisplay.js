Ext.define('MyAppName.view.TimerDisplay', {
    extend: 'Ext.Panel',
    xtype: 'timerdisplaypanel',
	timerStartTime: null,

    config: {

    	titleLabel: 'Timer1',

    	timerEnabled: false,
    	timerStartTimeString: '2010-01-01 00:00:00',
    	
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
    },
    
    updateTimer: function(newTimerValue, oldTimerValue) {
    	//console.log('updateTemperature called. New temperature is: ' + newTemperature);
		var timerValue = this.getComponent('timerValue');
		if (timerValue == undefined) {
			console.log('timerValue not found');
		} else {
			//console.log('Setting tempValue');
			timerValue.setHtml(newTimerValue);
		}
    },
    
    updateTimerEnabled: function(newTimerStatus, oldTimerStatus) {
    	//console.log('updateTemperature called. New temperature is: ' + newTemperature);
		var startButton = this.getComponent('startButton');
		if (startButton == undefined) {
			console.log('startButton not found');
		} else {
			if(newTimerStatus != oldTimerStatus) {
				if(newTimerStatus == true) {
					startButton.setText("Stop");
				} else {
					startButton.setText("Start");
				}
			}
		}
    },
    
    updateTimerStartTimeString: function(newStartTimeValue, oldStartTimeValue) {

    	console.log('updateTimerStartTimeString called. newStartTimeValue is: ' + newStartTimeValue);
    	
    	if(newStartTimeValue == null) {
        	console.log('newStartTimeValue == null');
    		timerStartTime = null;
        	setTimerEnabled(false);
    	} else {
    		timerStartTime = new Date(newStartTimeValue);
        	console.log(timerStartTime);
    	}
    }
    
    
    
},
function() {
    console.log('TimerDisplay Created!');
    //alert('Main Created!');
});
