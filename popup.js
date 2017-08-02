function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    if (tabs.length > 0 && tabs[0].url.indexOf('facebook.com') > 0) {
      return callback(tabs[0], null);
    }
    return callback(null, 'Facebook not opened');
  });
}

function renderElem(text, elem) {
  document.getElementById(elem).textContent = text;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(tab, err) {
    if (err) {
      renderElem('The following error occurred: ' + err, 'status');
    }
    else {
      var cuBoulder = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/83086245170/students/present/me/friends/intersect' }, function() { // CU Boulder
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "83086245170") {
                resolve();
              }
            }
          );
        });
        return promise;
      }

      var cuDenver = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/73610239330/students/present/me/friends/intersect' }, function() { // CU Denver
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "73610239330") {
                resolve();
              }
            }
          );
        });
        return promise;
      }

      var csu = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/136298855614/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "136298855614") {
                resolve();
              }
            }
          );
        });
      }

      cuBoulder()
        .then(cuDenver)
        .then(csu);

      chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
          if (request.msg === "found_friends") {
            console.log(request.data);
          }
        }
      );
    }
  });
});
