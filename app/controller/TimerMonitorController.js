//{"timer1Running":true,"timer1Start":"2013\/06\/12 21:09:55","timer2Running":false,"timer2Start":null}
var timerData = { timer1Running: false, timer2Running: false, timer1Start: null, timer2Start: null };

Ext.define('MyAppName.controller.TimerMonitorController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	vTimerLayoutPanel:   '#vTimerLayoutPanel',
        	hTimerLayoutPanel:   '#hTimerLayoutPanel'
        }
    },

    vTimerLayoutPanel: null,
    hTimerLayoutPanel: null,
    timer1StartDate: null,
    timer2StartDate: null,
    timer1Running: false,
    timer2Running: false,
    
    launch: function() {
        console.log('TimerMonitorController.launch called');

        this.vTimerLayoutPanel = this.getVTimerLayoutPanel();
        console.log(this.vTimerLayoutPanel);
        
        this.hTimerLayoutPanel = this.getHTimerLayoutPanel();
        console.log(this.hTimerLayoutPanel);
        
        var myVar1=setTimeout(function(){pollCookingTimers()},8000);
        
        var myVar2=setInterval(function(){pollCookingTimers()},20000);
        
        var myVar3=setInterval(function(){updateCookingTimers()},800);
        
    },
    
    updateDisplay: function() {
        //console.log('TimerMonitorController.updateDisplay called');

        if(this.timer1Running != timerData.timer1Running) {
        	this.timer1Running = timerData.timer1Running;
        	if(this.timer1Running) {
        		if(timerData.timer1Start != null) {
            		var newTimer1StartDate = new Date(timerData.timer1Start);
        			if(this.timer1StartDate == null
        					|| newTimer1StartDate.getTime() != this.timer1StartDate.getTime()) {
        				this.timer1StartDate = newTimer1StartDate;
        			}
        		}
        	}

        	var timer1Panel = this.vTimerLayoutPanel.getComponent('timer1Panel');
        	timer1Panel.setTimerEnabled(this.timer1Running);

        	timer1Panel = this.hTimerLayoutPanel.getComponent('timer1Panel');
        	timer1Panel.setTimerEnabled(this.timer1Running);
        	
        }
        
        if(this.timer2Running != timerData.timer2Running) {
        	this.timer2Running = timerData.timer2Running;
        	if(this.timer2Running) {
        		if(timerData.timer2Start != null) {
            		var newTimer2StartDate = new Date(timerData.timer2Start);
        			if(this.timer2StartDate == null
        					|| newTimer2StartDate.getTime() != this.timer2StartDate.getTime()) {
        				this.timer2StartDate = newTimer2StartDate;
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
    		//console.log(currentTime);
    		
			var timeInterval = currentTime.getTime() - this.timer1StartDate.getTime();

			//take out milliseconds
			timeInterval = timeInterval/1000;
			var seconds = Math.floor(timeInterval % 60);
			timeInterval = timeInterval/60; 
			var minutes = Math.floor(timeInterval % 60);
			timeInterval = timeInterval/60; 
			var hours = Math.floor(timeInterval % 24);
			//var timeString = sprintf("%02d:%02d:%02d", hours, minutes, seconds);
			var timeString = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
			//console.log(timeString);

	    	var timer1Panel = this.vTimerLayoutPanel.getComponent('timer1Panel');
    		timer1Panel.setTimerString(timeString);

	    	timer1Panel = this.hTimerLayoutPanel.getComponent('timer1Panel');
    		timer1Panel.setTimerString(timeString);
    	} 
    	
    	if(this.timer2Running == true
    			&& this.timer2StartDate != null) {
    		var currentTime = new Date();
    		//console.log(currentTime);
    		
			var timeInterval = currentTime.getTime() - this.timer2StartDate.getTime();

			//take out milliseconds
			timeInterval = timeInterval/2000;
			var seconds = Math.floor(timeInterval % 60);
			timeInterval = timeInterval/60; 
			var minutes = Math.floor(timeInterval % 60);
			timeInterval = timeInterval/60; 
			var hours = Math.floor(timeInterval % 24);
			var timeString = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
			//console.log(timeString);

	    	var timer2Panel = this.vTimerLayoutPanel.getComponent('timer2Panel');
    		timer2Panel.setTimerString(timeString);

	    	timer2Panel = this.hTimerLayoutPanel.getComponent('timer2Panel');
    		timer2Panel.setTimerString(timeString);
    	} 
    }
});

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
};

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

function updateCookingTimers() {
    //console.log('in updateCookingTimers');
	
	//console.log('calling controller');
    MyAppName.app.getController('TimerMonitorController').updateDisplay();
};

