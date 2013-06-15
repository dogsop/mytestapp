var smokerData = { smokerTemp: '---', meatTemp: '---' };

Ext.define('MyAppName.controller.TempMonitorController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	tempMonitorPanel:		 'tempmonitorpanel'
        }
    },

    vLayoutPanel: null,
    hLayoutPanel: null,
    lastSuccessfulConnection: null,
    
    launch: function() {
        console.log('TempMonitorController.launch called');

        var tempMonitorPanel = this.getTempMonitorPanel();
        console.log(tempMonitorPanel);
        
        this.vLayoutPanel = tempMonitorPanel.getComponent('vLayoutPanel');
        console.log(this.vLayoutPanel);
        
        this.hLayoutPanel = tempMonitorPanel.getComponent('hLayoutPanel');
        console.log(this.hLayoutPanel);
        
        var myVar1=setTimeout(function(){tempMonitorTimer()},2000);
        
        var myVar2=setInterval(function(){tempMonitorTimer()},10000);
    },
    
    updateDisplay: function(success) {
        console.log('TempMonitorController.updateDisplay called');
        
    	var vsmokerPanel = this.vLayoutPanel.getComponent('smokerPanel');
        var hsmokerPanel = this.hLayoutPanel.getComponent('smokerPanel');
    	var vmeatPanel = this.vLayoutPanel.getComponent('meatPanel');
        var hmeatPanel = this.hLayoutPanel.getComponent('meatPanel');
        
        if(success == true) {
            console.log('success == true');
            
            this.lastSuccessfulConnection = Date();
            console.log(this.lastSuccessfulConnection);

            vsmokerPanel.removeStaleFlag();
            hsmokerPanel.removeStaleFlag();
            vmeatPanel.removeStaleFlag();
            hmeatPanel.removeStaleFlag();
            
            vsmokerPanel.setTemperature(smokerData.smokerTemp);
            hsmokerPanel.setTemperature(smokerData.smokerTemp);
            vmeatPanel.setTemperature(smokerData.meatTemp);
            hmeatPanel.setTemperature(smokerData.meatTemp);
            
        } else {
            console.log('success == false');
            
    		var currentTime = new Date();
    		var lastSuccessfulConnection = new Date(this.lastSuccessfulConnection);
            console.log(this.lastSuccessfulConnection);
            console.log(currentTime);
    		
			var timeInterval = currentTime.getTime() - lastSuccessfulConnection.getTime();
            console.log(timeInterval);
			
			if(timeInterval < 0) {
				timeInterval = 0;
			}
			
			if(timeInterval > 30000) {
	            console.log('adding redfont');
	            
	            vsmokerPanel.flagStaleTemp();
	            hsmokerPanel.flagStaleTemp();
	            vmeatPanel.flagStaleTemp();
	            hmeatPanel.flagStaleTemp();
			}

        }
        
    }
});


function tempMonitorTimer()
{
    console.log('tempMonitorTimer called');
    updateTemps();
}

function updateTemps() {

    console.log('in updateTemps');
	
    Ext.Ajax.request({
        url: '../smoker/readtemp.php',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        timeout: 30000,

        success: function(response, opts) {
            if (response && response.responseText) {
                if(response.status == 200) {
                    console.log('in updateTemps, success');
                    smokerData = Ext.JSON.decode(response.responseText);
                    MyAppName.app.getController('TempMonitorController').updateDisplay(true);
                }
            } else {
                console.log('in updateTemps, error');
                // handle error response
                MyAppName.app.getController('TempMonitorController').updateDisplay(false);
            }
        }, failure: function(response, opts) {
            console.log('in updateTemps, failure');
            if (response && response.responseText) {
                console.log('in updateTemps, response returned');
                console.log(response);
                console.log('response.responseText - ' . response.responseText);
            } else {
                console.log('in updateTemps, error');
                // handle error response
            }
            MyAppName.app.getController('TempMonitorController').updateDisplay(false);
        }
    });
};

