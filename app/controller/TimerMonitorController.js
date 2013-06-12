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
    
    launch: function() {
        console.log('TimerMonitorController.launch called');

        this.vTimerLayoutPanel = this.getVTimerLayoutPanel();
        console.log(this.vTimerLayoutPanel);
        
        this.hTimerLayoutPanel = this.getHTimerLayoutPanel();
        console.log(this.hTimerLayoutPanel);
        
        var myVar1=setTimeout(function(){pollCookingTimers()},8000);
        
        //var myVar2=setInterval(function(){myTimer()},10000);
    },
    
    updateDisplay: function() {
        console.log('TimerMonitorController.updateDisplay called');
        
    	var timer1Panel = this.vTimerLayoutPanel.getComponent('timer1Panel');
    	if(timerData.timer1Running) {
    		timer1Panel.setTimerStartTimeString(timerData.timer1Start);
    	}
    	timer1Panel.setTimerEnabled(timerData.timer1Running);

    	timer1Panel = this.hTimerLayoutPanel.getComponent('timer1Panel');
    	if(timerData.timer1Running) {
    		timer1Panel.setTimerStartTimeString(timerData.timer1Start);
    	}
    	timer1Panel.setTimerEnabled(timerData.timer1Running);

    	var timer2Panel = this.vTimerLayoutPanel.getComponent('timer2Panel');
    	if(timerData.timer2Running) {
    		timer2Panel.setTimerStartTimeString(timerData.timer2Start);
    	}
    	timer2Panel.setTimerEnabled(timerData.timer2Running);

    	timer2Panel = this.hTimerLayoutPanel.getComponent('timer2Panel');
    	if(timerData.timer2Running) {
    		timer2Panel.setTimerStartTimeString(timerData.timer2Start);
    	}
    	timer2Panel.setTimerEnabled(timerData.timer2Running);

    }
});


function pollCookingTimers()
{
    console.log('myTimer called');
    updateCookingTimers();
}

function updateCookingTimers() {

    console.log('in updateTimers');
	
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
                    
                  //console.log('calling controller');
                    MyAppName.app.getController('TimerMonitorController').updateDisplay();
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
};

