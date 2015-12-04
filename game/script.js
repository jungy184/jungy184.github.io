$("body").css("background-color", "red")

$(".button").click(function(event){
   console.log(event);
   $("body").append("hello");
});

$(window).keypress(function(event) {
    console.log(event);
    if(event.keyCode == 114) {
        //user pressed "r"
        $("body").css("background-color", "red");
    }
    if(event.keyCode == 103) {
        $("body").css("background-color", "lime");
    }
    if(event.keyCode == 98) {
        $("body").css("background-color", "blue");
    }
})

$(window).resize(function(event){
    console.log-event
    if ($(window))
}
