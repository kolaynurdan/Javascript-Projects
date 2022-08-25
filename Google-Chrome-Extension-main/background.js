chrome.tabs.onActivated.addListener(tab =>{
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(/^https:\/\/www\.instagram/.test(current_tab_info_url)){
            chrome.tabs.executeScript(null, {file:'./foreground.js'});
            chrome.tabs.insertCSS(null, {file:'./mystyles.css'});
            chrome.tabs.insertCSS(null, {file: './skeleton.css'});
        }
    })
})