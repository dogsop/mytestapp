Ext.define('MyAppName.controller.TempMonitorController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        	vSmokerPanel: '#vSmokerPanel',
        	hSmokerPanel: '#hSmokerPanel',
        	vMeatPanel:   '#vMeatPanel',
        	hMeatPanel:   '#hMeatPanel'
        }
    },

    launch: function() {
        console.log('TempMonitorController.launch called');

        var myVar1=setTimeout(function(){myTimer()},2000);
        
        var myVar2=setInterval(function(){myTimer()},10000);
    },
    
    updateDisplay: function() {
        console.log('TempMonitorController.updateDisplay called');
    	var vSmokerPanel = this.getVSmokerPanel();
    	var hSmokerPanel = this.getHSmokerPanel();
    	var vMeatPanel = this.getVMeatPanel();
    	var hMeatPanel = this.getHMeatPanel();
        
        vSmokerPanel.setTemperature(smokerData.smokerTemp);
        hSmokerPanel.setTemperature(smokerData.smokerTemp);
        vMeatPanel.setTemperature(smokerData.meatTemp);
        hMeatPanel.setTemperature(smokerData.meatTemp);
    }
});

setInterval("javascript function",milliseconds);

function myTimer()
{
    console.log('myTimer called');
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
                //console.log('in updateTemps, response returned');
            	//console.log(response);
                for (var key in response) {
                	//console.log(key);
                	}
              //console.log(response.responseText);
                if(response.status == 200) {
                    console.log('in updateTemps, success');
                    smokerData = Ext.JSON.decode(response.responseText);
                  //console.log(smokerData);
                    
                  //console.log('calling controller');
                    MyAppName.app.getController('TempMonitorController').updateDisplay();
                }
                // handle search result
            } else {
                console.log('in updateTemps, error');
                // handle error response
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
        }
    });
};

