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
      chrome.tabs.update({ url: 'https://www.facebook.com/search/people/?q=my%20friends%20who%20go%20to%20university%20of%20colorado%20boulder' }, function() {
          // chrome.tabs.executeScript(null, { file: 'jquery-3.2.1.min.js' }, function() {
          //   chrome.tabs.executeScript(null, { file: 'scroller.js' }, function() {
          //     renderElem('Here is an analysis of your friends:', 'status');
          //   });
          // });
      });
    }
  });
});
