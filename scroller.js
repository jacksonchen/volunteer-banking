var i = 0;
var friends = [];

$(document).ready(function() {
  scrollDown();
});

function scrollDown() {
  console.log("Scrolling");
  setTimeout(function () {
    window.scrollTo(0,document.body.scrollHeight);
    i++;
    if ($('._4s4i').length == 0 && i < 100) {
      scrollDown();
    }
    else {
      friends = $.map($('._4e2r').find('._32mo'), function(val) {
          return val.innerText;
      });
      var re = /https:\/\/www\.facebook\.com\/search\/(\d+)\//;
      var match = re.exec(window.location.href);
      console.log(match[1]);
      chrome.runtime.sendMessage({msg: "found_friends", school: match[1], data: friends});
    }
  }, 1000);
}
