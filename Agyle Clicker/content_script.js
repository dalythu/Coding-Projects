chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == "complete" && tab.url.includes("https://mailchimp.zendesk.com/agent/dashboard")) {
    chrome.tabs.executeScript(tabId, {file: "background.js"});
  }
});
