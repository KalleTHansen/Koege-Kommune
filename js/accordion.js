$( document ).ready(function() {
  var $accordions = $( ".accordion" ).accordion({
    header: "h3",//Angiver hvilket element, der skal tildeles styling som fane
    collapsible: true,//Så alle sektioner kan være lukkede samtidigt
    active: false,//Default skal alle faner være lukket.
    heightStyle: "content", //Tilpasser højden af det enkelte vindue til indholdet
    animate: {duration: 200} //Tiden i millisekunder det tager at åbne/lukke sektion
  });



//  $("#accordion1").accordion({
//    beforeActivate: .accordion('activate', false) {
  //    accordions.not(this).accordion('option', 'active', false);
//    });

//  $( ".accordion" ).on( "accordionbeforeactivate", function( 'activate', false ) {} );
});

/*$( "#accordion1" ).click(function() {
        $("#accordion2").accordion('activate', false);
 });*/
