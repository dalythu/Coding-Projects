chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.includes("mailchimp.zendesk.com/agent/dashboard")) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content_script.js"]
    });
  }
});