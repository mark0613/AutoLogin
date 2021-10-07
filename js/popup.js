var getSelectedTab = (tab) => {
    var tabId = tab.id;
    var url = tab.url;
    var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
    document.getElementById('login').addEventListener(
        'click', 
        () => sendMessage({ action: 'login', url: url})
    );
}
chrome.tabs.getSelected(null, getSelectedTab);