var i = 0;
var friends = [];

$(document).ready(function() {
  console.log(school);
  scrollDown();
});

function scrollDown() {
  setTimeout(function () {
    window.scrollTo(0,document.body.scrollHeight);
    i++;
    if ($('#browse_end_of_results_footer').length == 0 && i < 100) {
      scrollDown();
    }
    else {
      friends = $.map($('._4e2r').find('._32mo'), function(val) {
          return val.innerText;
      });
      chrome.runtime.sendMessage({msg: "found_friends", school: "CU Boulder", data: friends});
    }
  }, 1000);
}
