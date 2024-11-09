chrome.runtime.onInstalled.addListener(() => {
    // Check if the user name is already stored
    chrome.storage.local.get(['userName'], (result) => {
      if (!result.userName) {
        // Open the name input popup if the name is not stored
        chrome.windows.create({
          url: chrome.runtime.getURL("namePopup.html"),
          type: "popup",
          width: 400,
          height: 300
        });
      }
    });
  });