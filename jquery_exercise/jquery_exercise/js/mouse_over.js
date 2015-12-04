console.log("hello");
var i = 0;
$(".in").mouseover(function() {
    i += 1;
    console.log("entered");
    $(this).find("span").text( "mouse over x " + i );
  }).mouseout(function() {
    $( this ).find( "span" ).text( "mouse out " );
  });
 
var n = 0;
$( "div.enterleave" ).mouseenter(function() {
    n += 1;
    $( this ).find( "span" ).text( "mouse enter x " + n );
  }).mouseleave(function() {
    $( this ).find("span").text("mouse leave");
  });
