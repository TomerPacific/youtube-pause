var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?youtube\.com/;

function addVideoPausedListener(domContent) {

}


chrome.runtime.onInstalled.addListener((tab) => {
    if (urlRegex.test(tab.url)) {
      chrome.tabs.sendMessage(tab.id, {text: 'inner_message'}, addVideoPausedListener);
    }
});