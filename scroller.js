var i = 0;
var friends = [];
var re = /https:\/\/www\.facebook\.com\/search\/(\d+)\//;
var match = re.exec(window.location.href);

$(document).ready(function() {
  if ($('._50f4').length) {
    console.log("There is nothing!!!");
    chrome.runtime.sendMessage({msg: "found_friends", school: match[1], data: friends});
  }
  else {
    scrollDown();
  }
});

function scrollDown() {
  console.log("Scrolling");
  setTimeout(function () {
    window.scrollTo(0,document.body.scrollHeight);
    i++;
    if ($('._4s4i').length == 0 && i < 50) {
      scrollDown();
    }
    else {
      friends = $.map($('._4e2r').find('._32mo'), function(val) {
          return val.innerText;
      });
      chrome.runtime.sendMessage({msg: "found_friends", school: match[1], data: friends});
    }
  }, 1000);
}
