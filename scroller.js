var i = 0;
var friends = [];
var re = /https:\/\/www\.facebook\.com\/search\/(\d+)\/students\/present\/me\/friends\/intersect\?kcg=true/;
var match = re.exec(window.location.href);

$(document).ready(function() {
  if (match !== null) {
    scrollDown();
  }
});

function scrollDown() {

  setTimeout(function () {
    window.scrollTo(0,document.body.scrollHeight);
    i++;
    if ($('._4s4i').length == 0 && i < 50 && $('._50f4').length == 0) {
      scrollDown();
    }
    else {
      friends = $.map($('._42ef').find('._32mo'), function(val) {
          return val.innerText;
      });
      chrome.runtime.sendMessage({msg: "found_friends", school: match[1], data: friends});
    }
  }, 1000);
}
