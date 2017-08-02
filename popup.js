function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    if (tabs.length > 0 && tabs[0].url.indexOf('facebook.com') > 0) {
      return callback(tabs[0].url, null);
    }
    return callback(null, 'Facebook not opened');
  });
}

function renderElem(text, elem) {
  document.getElementById(elem).textContent = text;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url, err) {
    if (err) {
      renderElem('The following error occurred: ' + err, 'status');
    }
    else {
      chrome.tabs.update({ url: 'https://www.facebook.com/search/83086245170/students/present/me/friends/intersect' }, function() {
          chrome.tabs.executeScript(null, { file: 'jquery-3.2.1.min.js' }, function() {
            chrome.tabs.executeScript(null, { file: 'scroller.js' }, function() {
              renderElem('Here is an analysis of your friends:', 'status');
            });
          });
      });

      chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
          if (request.msg === "found_friends") {
            console.log(request.data);
          }
        }
      );
    }
  });
});
