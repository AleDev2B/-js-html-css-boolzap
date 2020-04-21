
$(document).ready(function(){

function visualizzaOra() {
  var date = new Date();
  var memorizzaOra = date.getHours() + ":" + date.getMinutes();
  return memorizzaOra
}

  document.getElementById("example").innerHTML = visualizzaOra();

var finestraMsg = $('.main-partedx');
var inputMsg = $('.new-message-inputs');
var buttonSend = $('.buttonSend');
var contactSelected = $(".listUser.boxWhiteClass.centraQualcosaClass");

  buttonSend.click(
    function () {
      var msg = inputMsg.val();
      // controllo per evitare di inserire messaggi vuoti
      if (inputMsg.val() !== "") {

          finestraMsg.append('<div class="sent-msg rightAllignClass"><div class="box-msg centraQualcosaClass colorgreenclass">' + msg + '</div></div>');

        //dopo un secondo deve apparire un nuovo msg con un testo sempre uguale (statico)
          setTimeout(
            function(){
              finestraMsg.append('<div class="received-msg leftAllignClass"><div class="box-msg centraQualcosaClass leftAllignClass"><p class="normalText">ok</p></div></div>');
            }
            ,1000);
            inputMsg.val("");

        }
      }

    );



//gestisco evento su bottone di invio



  // filtro contatti
    //gestirte evento su tastiera (oppure su click di bottone di input ricerca)
  $('#contacts-filter').keyup(
    function () {

    // salvarmi input utente in campo del filtro (stringa1)
    var stringaFiltro = $(this).val().toLowerCase();

    // selezionare tutti i blocchi di contatto e ciclare tra di essi (each())
    $('.activeUser').each(
      function () {
      //salvo in una var il valore del testo del nome nel contatto (stringa2)
      var stringaNome = $(this).find('.contact-name').text().toLowerCase();
      // confronto per vedere se la stringa inserita nell'input è inclusa nel nome del contatto

        //stringa2.includes(stringa1)
        if(stringaNome.includes(stringaFiltro)){
        //se l'occorenza è stata trovata lascio il blocco di contatto visibile
          $(this).show();
        } else {
          // altrimenti lo rendo non visibile (this)
          $(this).hide();
        }

    });
  });

  // aggiungere classe active per evidenziare il contatto selezionato al click del mouse
contactSelected.on({
  click:function () {
    $(this).addClass("active");
  }, mouseenter:function () {
    contactSelected.removeClass("active");
    $(this).toggleClass("active");
  }, mouseleave:function () {
    $(this).removeClass("active");
  },

});

});
