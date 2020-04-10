
$(document).ready(function(){


var chatWin = $('.main-partedx');
var inputMsg = $('.new-message-inputs');
var buttonSend = $('.buttonSend');

//gestisco evento su bottone di invio
buttonSend.click(
  function () {
    var msg = inputMsg.val();
    // console.log(msg);
    chatWin.append('<div class="sent-msg rightAllignClass"><div class="box-msg centraQualcosaClass colorgreenclass"><p class="normalText">' + msg + '</p></div></div>');

    inputMsg.val('');
  }
);


});
