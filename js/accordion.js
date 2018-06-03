$( document ).ready(function() {
  $("#accordion").accordion({ header: "h3", collapsible: true, active: false, heightStyle: "content"
  //collapsible: true = Så alle sektioner kan være lukket samtidigt //active: false = Default alle faner lukket.//heightStyle : "content" = tilpasser højden af det enkelte vindue til indholdet
  });
});
