// Open side panel when the extension icon is clicked
chrome.action.onClicked.addListener(async (tab) => {
    // Check if side panel is available
    if (chrome.sidePanel) {
        await chrome.sidePanel.open({ tabId: tab.id });
    } else {
        console.error('Side Panel API is not available.');
    }
});
