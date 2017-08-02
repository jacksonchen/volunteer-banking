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
      var adamsState = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/33810812947/students/present/me/friends/intersect' }, function() { // CU Boulder
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "33810812947") {
                resolve();
              }
            }
          );
        });
        return promise;
      }

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

      var schoolMines = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/59645937006/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "59645937006") {
                resolve();
              }
            }
          );
        });
      }

      var pueblo = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/96329633808/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "96329633808") {
                resolve();
              }
            }
          );
        });
      }

      var fortlewis = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/35870280687/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "35870280687") {
                resolve();
              }
            }
          );
        });
      }

      var uccs = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/243117181362/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "243117181362") {
                resolve();
              }
            }
          );
        });
      }

      var pikespeak = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/50227242991/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "50227242991") {
                resolve();
              }
            }
          );
        });
      }

      var mesa = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/165068093548114/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "165068093548114") {
                resolve();
              }
            }
          );
        });
      }

      var southdenver = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/138023979555164/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "138023979555164") {
                resolve();
              }
            }
          );
        });
      }

      var unc = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/116847458387226/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "116847458387226") {
                resolve();
              }
            }
          );
        });
      }

      var western = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/121880351276656/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "121880351276656") {
                resolve();
              }
            }
          );
        });
      }

      var aims = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/49496176115/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "49496176115") {
                resolve();
              }
            }
          );
        });
      }

      var mountain = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/7538289310/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "7538289310") {
                resolve();
              }
            }
          );
        });
      }

      var arapahoe = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/126101925960/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "126101925960") {
                resolve();
              }
            }
          );
        });
      }

      var northwestern = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/286058458075796/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "286058458075796") {
                resolve();
              }
            }
          );
        });
      }

      var aurora = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/464548740124/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "464548740124") {
                resolve();
              }
            }
          );
        });
      }

      var ccDenver = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/109440426760/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "109440426760") {
                resolve();
              }
            }
          );
        });
      }

      var frontrange = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/242358403703/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "242358403703") {
                resolve();
              }
            }
          );
        });
      }

      var lamar = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/197149150316268/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "197149150316268") {
                resolve();
              }
            }
          );
        });
      }

      var morgan = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/71264169052/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "71264169052") {
                resolve();
              }
            }
          );
        });
      }

      var otero = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/208872800359/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "208872800359") {
                resolve();
              }
            }
          );
        });
      }

      var redrocks = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/266227128186/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "266227128186") {
                resolve();
              }
            }
          );
        });
      }

      var trinidad = function() {
        let promise = new Promise((resolve, reject) => {
          chrome.tabs.update({ url: 'https://www.facebook.com/search/204290419427/students/present/me/friends/intersect' }, function() { // CSU
            chrome.tabs.executeScript(tab.id, { file: 'jquery-3.2.1.min.js' }, function() {
              chrome.tabs.executeScript(tab.id, { file: 'scroller.js' }, function() {
              });
            });
          });

          chrome.runtime.onMessage.addListener(
            function (request, sender, sendResponse) {
              if (request.school === "204290419427") {
                resolve();
              }
            }
          );
        });
      }


      adamsState()
        .then(cuBoulder)
        .then(cuDenver)
        .then(csu)
        .then(schoolMines)
        .then(pueblo)
        .then(fortlewis)
        .then(uccs)
        .then(pikespeak)
        .then(mesa)
        .then(southdenver)
        .then(unc)
        .then(western)
        .then(aims)
        .then(mountain)
        .then(arapahoe)
        .then(northwestern)
        .then(aurora)
        .then(ccDenver)
        .then(frontrange)
        .then(lamar)
        .then(morgan)
        .then(otero)
        .then(redrocks)
        .then(trinidad)

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
