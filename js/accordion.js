$("#accordion").accordion({ header: "h3", collapsible: true, active: false });//Default alle faner lukket. Placeres øverst for at undgå animation.
$( "#accordion" ).accordion(); //Initialisering af accordion

$( "#accordion" ).accordion({
  collapsible: true //Så alle sektioner kan være lukket samtidigt
});
