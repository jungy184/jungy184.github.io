console.log("Hello world");

var singleWords = ["hello", "world", "this", "is", "javascript"];

var cats = ["img/cat1.jpg","img/cat2.jpg","img/cat3.jpg","img/cat4.png"];

$("body").append("<img src='" + cats[Math.floor(Math.random()*cats.length)] + "'>")

$("body").css("background-color","red");

var ballTop = Math.floor(Math.random() * ($(window).height() - 100)) + "px";
var ballLeft = Math.floor(Math.random() * ($(window).width() - 100)) + "px";




for (var increment = 0; increment < 100; increment++){
     $("body").append("<div class='ball'></div>");
}
$(window).resize(function() {
    $(".ball").each(function() {
    var ballTop = Math.floor(Math.random() * ($(window).height() - 100)) + "px";
    var ballLeft = Math.floor(Math.random() * ($(window).width() - 100)) + "px";
    $(this).css("top",ballTop).css("left",ballLeft);
    var newSize = Math.floor(Math.random()*100);
    var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    $(this).css("width",newSize).css("height",newSize);
    $(this).css("background-color",newColor);
    });
});

for (var words = 0; words < 5; words++) {
    $(".poem").append(singleWords[Math.floor(Math.random()*singleWords.length)] + " ");
}