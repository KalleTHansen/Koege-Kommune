$( document ).ready(function() {

  $( "#cross" ).hide();//Luk menu knap
  $( ".menu" ).hide();//Menu
  $( ".search" ).hide();//Søgefelt
  $( "#closesearch" ).hide();//Luk søg knap

  $( "#hamburger" ).click(function() {//Klik på menu
    $( "#hamburger" ).hide();//Menuknap
    $( "#cross" ).show();//Kryds til menu knap

    //Søgeikon er usynlig, søgekryds er synlig
    if ( $("#searchicon").css('display') == 'none' ){
      $( ".search" ).slideToggle( "fast", function(){});//Søgefelt
      $( "#searchicon" ).show();//Søgeikon
      $( "#closesearch" ).hide();//Kryds til søgeikon
    }
    $( ".menu" ).slideToggle( "fast", function() {
    });//Udvid menu
  });

  $( "#cross" ).click(function() { //Lukke menu
    $( "#cross" ).hide();
    $( "#hamburger" ).show();
    $( ".menu" ).slideToggle( "fast", function() {
    });
  });

  $( "#searchicon" ).click(function() { //Klikke på søgeicon
    $( "#searchicon" ).hide();
    $( "#closesearch" ).show();

    if ( $("#hamburger").css('display') == 'none' ){// Hamburger er usynlig, menukryds er synlig
      $( ".menu" ).slideToggle( "fast", function() {});
      $( "#hamburger" ).show();
      $( "#cross" ).hide();
    }
    $( ".search" ).slideToggle( "fast", function() {
    });
  });

  $( "#closesearch" ).click(function() { //Klikke på luk søgefunktion
    $( "#closesearch" ).hide();
    $( "#searchicon" ).show();

    $( ".search" ).slideToggle( "fast", function() {
    });
  });


  var $window = $(window);

  function checkWidth() {
    var windowsize = $window.width(); //https://stackoverflow.com/questions/8339377/how-to-get-screen-width-without-minus-scrollbar
    if (windowsize >= 930) {
      //if the window is greater than or equal to 930px wide then show menu.
      $( ".menu" ).show();//Menu;
      $( ".search" ).show();//Search;
    }

    else {
      //if the window is less than 930px wide then hide menu.
      $( ".menu" ).hide();//Menu;
      $( "#cross" ).hide();//Luk menu knap
      $( "#hamburger" ).show();
      $( ".search" ).hide();//Search bar;
      $( "#searchicon" ).show();
      $( "#closesearch" ).hide();
    }
  }
  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);//Tjek bredde hver gang vinduet ændres i størrelse
});
