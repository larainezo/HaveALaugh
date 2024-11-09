document.getElementById("saveButton").addEventListener("click", () => {
    const userName = document.getElementById("userName").value.trim();
  
    if (userName) {
      // Save the user's name to chrome.storage
      chrome.storage.local.set({ userName: userName }, () => {
        // Close this popup after saving the name
        window.close();
      });
    } else {
      alert("Please enter your name.");
    }
  });