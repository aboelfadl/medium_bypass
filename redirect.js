chrome.webNavigation.onErrorOccurred.addListener(function(details) {
	if(details.error === "net::ERR_CONNECTION_RESET")
        chrome.tabs.update(details.tabId, {url: details.url.replace(".com",".com.")}, function(){
        	if (chrome.runtime.lastError)
        		console.log(chrome.runtime.lastError.message);
        });
    }, {url: [{hostContains: 'medium.com'}]});