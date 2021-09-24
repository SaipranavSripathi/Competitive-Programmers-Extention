console.log("From background")
chrome.tabs.onActivated.addListener(tab=>{
    chrome.tabs.get(tab.tabId,current_tab_info=>{
        //console.log(current_tab_info.url);
        if(/^https:\/\/www\.google/.test(current_tab_info.url)){
            chrome.tabs.insertCSS(null,{file : './styles.css'},()=>console.log("styles added"));
            chrome.tabs.executeScript(null,{file : './foreground.js'},()=>{
                console.log("Injected foreground from background");
            })
        }
    })
    //console.log(tab);
})
