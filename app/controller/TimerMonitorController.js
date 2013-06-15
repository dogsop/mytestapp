//{"timer1Running":true,"timer1Start":"2013\/06\/12 21:09:55","timer2Running":false,"timer2Start":null}
var timerData = { timer1Running: false, timer2Running: false, timer1Start: null, timer2Start: null };

Ext.define('MyAppName.controller.TimerMonitorController', {
    extend: 'Ext.app.Controller',

    config: {
    	control: {
    		'button[action=startstoptimer]': {
    			tap: 'doStartStopTimer'
    		}
    	},
        refs: {
        	timersPanel:		 'timerspanel'
        }
    },

    vTimerLayoutPanel: null,
    hTimerLayoutPanel: null,
    timer1StartDate: null,
    timer2StartDate: null,
    timer1Running: false,
    timer2Running: false,
    timer1String: '00:00:00',
    timer2String: '00:00:00',
    
    launch: function() {
        console.log('TimerMonitorController.launch called');

        var timersPanel = this.getTimersPanel();
        console.log(timersPanel);
        

        this.vTimerLayoutPanel = timersPanel.getComponent('vLayoutPanel');
        console.log(this.vTimerLayoutPanel);
        
        this.hTimerLayoutPanel = timersPanel.getComponent('hLayoutPanel');
        console.log(this.hTimerLayoutPanel);
        
        
        var myVar1=setTimeout(function(){pollCookingTimers()},3000);
        
        var myVar2=setInterval(function(){pollCookingTimers()},30000);
        
        var myVar3=setInterval(function(){updateCookingTimerDisplay()},300);
        
    },
    
    updateDisplay: function() {
        //console.log('TimerMonitorController.updateDisplay called');

        if(this.timer1Running != timerData.timer1Running) {
        	//console.log('this.timer1Running != timerData.timer1Running');
        	//console.log(timerData);
        	this.timer1Running = timerData.timer1Running;
        	if(this.timer1Running) {
        		//console.log('this.timer1Running == true');
        		if(timerData.timer1Start != null) {
        			//console.log('timerData.timer1Start != null');
            		var newTimer1StartDate = new Date(timerData.timer1Start);
            		//console.log(newTimer1StartDate);
        			if(this.timer1StartDate == null
        					|| newTimer1StartDate.getTime() != this.timer1StartDate.getTime()) {
        				//console.log('this.timer1StartDate = newTimer1StartDate');
        				this.timer1StartDate = newTimer1StartDate;
        				console.log(this.timer1StartDate);
        			}
        		}
        	} else {
        		//console.log('this.timer1Running == false');
        	}

        	var timer1Panel = this.vTimerLayoutPanel.getComponent('timer1Panel');
        	timer1Panel.setTimerEnabled(this.timer1Running);

        	timer1Panel = this.hTimerLayoutPanel.getComponent('timer1Panel');
        	timer1Panel.setTimerEnabled(this.timer1Running);
        	
        }
        
        if(this.timer2Running != timerData.timer2Running) {
        	//console.log('this.timer1Running != timerData.timer1Running');
        	this.timer2Running = timerData.timer2Running;
        	if(this.timer2Running) {
        		if(timerData.timer2Start != null) {
            		var newTimer2StartDate = new Date(timerData.timer2Start);
        			if(this.timer2StartDate == null
        					|| newTimer2StartDate.getTime() != this.timer2StartDate.getTime()) {
        				this.timer2StartDate = newTimer2StartDate;
        				console.log(this.timer2StartDate);
        			}
        		}
        	}

        	var timer2Panel = this.vTimerLayoutPanel.getComponent('timer2Panel');
        	timer2Panel.setTimerEnabled(this.timer2Running);

        	timer2Panel = this.hTimerLayoutPanel.getComponent('timer2Panel');
        	timer2Panel.setTimerEnabled(this.timer2Running);
        	
        }
        
    	if(this.timer1Running == true
    			&& this.timer1StartDate != null) {
    		var currentTime = new Date();
    		//var currentUtcTime = convertDateToUTC(currentTime);
    		//console.log(currentUtcTime);
    		
			var timeInterval = currentTime.getTime() - this.timer1StartDate.getTime();
			//console.log(timeInterval);
			
			if(timeInterval < 0) {
				timeInterval = 0;
			}

			timeInterval = timeInterval/1000; 
			var seconds = Math.floor(timeInterval % 60);
			//console.log(seconds);
			timeInterval = timeInterval/60; 
			var minutes = Math.floor(timeInterval % 60);
			//console.log(minutes);
			timeInterval = timeInterval/60; 
			var hours = Math.floor(timeInterval % 24);
			//var timeString = sprintf("%02d:%02d:%02d", hours, minutes, seconds);
			var timeString = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
			//console.log(timeString);

			if(this.timer1String != timeString) {
				this.timer1String = timeString;

				var timer1Panel = this.vTimerLayoutPanel.getComponent('timer1Panel');
	    		timer1Panel.setTimerString(timeString);

		    	timer1Panel = this.hTimerLayoutPanel.getComponent('timer1Panel');
	    		timer1Panel.setTimerString(timeString);
			}
    	} 
    	
    	if(this.timer2Running == true
    			&& this.timer2StartDate != null) {
    		var currentTime = new Date();
    		//var currentUtcTime = convertDateToUTC(currentTime);
    		//console.log(currentUtcTime);
    		
			var timeInterval = currentTime.getTime() - this.timer2StartDate.getTime();
			//console.log(timeInterval);
			
			if(timeInterval < 0) {
				timeInterval = 0;
			}

			timeInterval = timeInterval/1000; 
			var seconds = Math.floor(timeInterval % 60);
			//console.log(seconds);
			timeInterval = timeInterval/60; 
			var minutes = Math.floor(timeInterval % 60);
			//console.log(minutes);
			timeInterval = timeInterval/60; 
			var hours = Math.floor(timeInterval % 24);
			//var timeString = sprintf("%02d:%02d:%02d", hours, minutes, seconds);
			var timeString = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
			//console.log(timeString);

			if(this.timer2String != timeString) {
				this.timer2String = timeString;

				var timer2Panel = this.vTimerLayoutPanel.getComponent('timer2Panel');
	    		timer2Panel.setTimerString(timeString);

		    	timer2Panel = this.hTimerLayoutPanel.getComponent('timer2Panel');
	    		timer2Panel.setTimerString(timeString);
			}
    	} 
    },
    
    doStartStopTimer: function(btn) {
    	console.log('controller: button pressed');
    	console.log(btn);
    	var timerPanel = btn.up();
    	console.log(timerPanel);
    	var timerNumber = timerPanel.getTimerNumber();
    	console.log(timerNumber);
    	var action;
    	if(timerPanel.getTimerEnabled()) {
    		action = 'stop';
    	} else {
    		action = 'start';
    	}
    	updateCookingTimers(timerNumber, action);
    }
});

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
};

function convertDateToUTC(date) { 
	return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
}

function pollCookingTimers()
{
    console.log('pollCookingTimers called');
    Ext.Ajax.request({
        url: '../smoker/readtimers.php',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        timeout: 30000,

        success: function(response, opts) {
            if (response && response.responseText) {
                //console.log('in updateTimers, response returned');
            	//console.log(response);
                for (var key in response) {
                	//console.log(key);
                	}
              //console.log(response.responseText);
                if(response.status == 200) {
                    console.log('in updateTimers, success');
                    timerData = Ext.JSON.decode(response.responseText);
                    console.log(timerData);
                }
                // handle search result
            } else {
                console.log('in updateTimers, error');
                // handle error response
            }
        }, failure: function(response, opts) {
            console.log('in updateTimers, failure');
            if (response && response.responseText) {
                console.log('in updateTimers, response returned');
                console.log(response);
                console.log('response.responseText - ' . response.responseText);
            } else {
                console.log('in updateTimers, error');
                // handle error response
            }
        }
    });
}

function updateCookingTimers(timerNumber, action)
{
    console.log('updateCookingTimers called');
    Ext.Ajax.request({
        url: '../smoker/readtimers.php',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: {
        	id: timerNumber,
        	action: action
        },
        timeout: 30000,

        success: function(response, opts) {
            if (response && response.responseText) {
                //console.log('in updateTimers, response returned');
            	//console.log(response);
                for (var key in response) {
                	//console.log(key);
                	}
              //console.log(response.responseText);
                if(response.status == 200) {
                    console.log('in updateCookingTimers, success');
                    timerData = Ext.JSON.decode(response.responseText);
                    console.log(timerData);
                    updateCookingTimerDisplay();
                }
                // handle search result
            } else {
                console.log('in updateTimers, error');
                // handle error response
            }
        }, failure: function(response, opts) {
            console.log('in updateTimers, failure');
            if (response && response.responseText) {
                console.log('in updateTimers, response returned');
                console.log(response);
                console.log('response.responseText - ' . response.responseText);
            } else {
                console.log('in updateTimers, error');
                // handle error response
            }
        }
    });
}

function updateCookingTimerDisplay() {
    //console.log('in updateCookingTimerDisplay');
	
	//console.log('calling controller');
    MyAppName.app.getController('TimerMonitorController').updateDisplay();
};

