$(document).ready(function() {

function GetComment(){

  AddText();
  Counter();
  HiddenTopComment();

// Add text of comment 
function AddText(){

  // 1 Get current Date
    var data = new Date();
    var year = data.getFullYear();
    var month = data.getMonth();
    var day = data.getDate();
    var fMonth = "";

  // 2 Converting date
  switch (month)
    {
      case 0: fMonth="января"; break;
      case 1: fMonth="февраля"; break;
      case 2: fMonth="марта"; break;
      case 3: fMonth="апреля"; break;
      case 4: fMonth="мае"; break;
      case 5: fMonth="июня"; break;
      case 6: fMonth="июля"; break;
      case 7: fMonth="августа"; break;
      case 8: fMonth="сентября"; break;
      case 9: fMonth="октября"; break;
      case 10: fMonth="ноября"; break;
      case 11: fMonth="декабря"; break;
    };

  // 3 Output comment
    var comment = $("textarea[name='comment']").val();
    $("<li class='comments-list_item'><div class='info-holder'><div class='name'>Гость</div><time><span class='data-day'>"+day+"</span><span class='data-month'> "+fMonth+" </span><span class='data-year'>"+year+"</span></time></div><div class='comment-box'>" + comment + "</div><div class='triangle'></div></li>")
    .appendTo(".js-comments-list");
    $("textarea[name='comment']").val('');
  };

  // Count all comments
  function Counter(){
      var text = $( ".js-view-counter #js-comment-counter" ).text();
      $( ".js-view-counter #js-comment-counter" ).text(+text + 1);
  }

  // Hidden top comment
  function HiddenTopComment(){
      $( ".js-comments-list" ).find( "li:nth-last-child(4)" ).hide();
  };

};

// Output comment from pressing the button submit
 $(document).on("click","input[name = 'send']",function(){
    GetComment();
 });
 
// Output comment from pressing the buttons Ctrl+Enter
$(document).on("keydown", "textarea", function(e)
    {
        if ((e.keyCode == 10 || e.keyCode == 13) && e.ctrlKey)
        {
          GetComment();
        }
    });

});

