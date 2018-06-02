$( document ).ready(function() {

$( "#cross" ).hide();//Luk menu knap
$( ".menu" ).hide();//Menu
$( ".search" ).hide();//Søgefelt
$( "#closesearch" ).hide();//Luk søg knap

$( "#hamburger" ).click(function() { //Åbne menu
  $( ".search" ).hide();
  $( "#hamburger" ).hide();
  $( "#cross" ).show();

  if ( $("#searchicon").css('display') == 'none' ){//Søgeikon er usynlig, søgekryds er synlig
    $( "#searchicon" ).show();
    $( "#closesearch" ).hide();
  }
$( ".menu" ).slideToggle( "fast", function() {
});
});

$( "#cross" ).click(function() { //Lukke menu
  $( "#cross" ).hide();
  $( "#hamburger" ).show();
$( ".menu" ).slideToggle( "fast", function() {
});
});

$( "#searchicon" ).click(function() { //Klikke på søgeicon
  $( ".menu" ).hide();
  $( "#searchicon" ).hide();
  $( "#closesearch" ).show();

  if ( $("#hamburger").css('display') == 'none' ){// Hamburger er usynlig, menukryds er synlig
    $( "#hamburger" ).show();
    $( "#cross" ).hide();
  }
$( ".search" ).slideToggle( "fast", function() {
});
});

$( "#closesearch" ).click(function() { //Klikke på luk søgefunktion
  $( "#closesearch" ).hide();
  $( "#searchicon" ).show();
  $( "#hamburger" ).show();
  $( ".search" ).slideToggle( "fast", function() {
  });
});



var $window = $(window);

function checkWidth() {
    var windowsize = $window.width();
    if (windowsize >= 950) {
        //if the window is greater than or equal to 950px wide then show menu.
        $( ".menu" ).show();//Menu;
        $( ".search" ).show();//Search;

        $(".linkButton").css("margin", "auto");//Toggle centrering af START knap
    }

    else {
        //if the window is less than 950px wide then hide menu.
        $( ".menu" ).hide();//Menu;
        $( "#cross" ).hide();//Luk menu knap
        $( "#hamburger" ).show();
        $( ".search" ).hide();//Search bar;
        $( "#searchicon" ).show();
        $( "#closesearch" ).hide();

        $(".linkButton").css("margin", "auto 8px");//Toggle centrering af START knap
    }
}
// Execute on load
checkWidth();
// Bind event listener
$(window).resize(checkWidth);//Tjek bredde hver gang vinduet ændres i størrelse
});
