// $('#imgid').hover(function() {
//   $(this).attr('src', 'dog_PNG2422.png');
// }, function() {
//   $(this).attr('src', 'dog_PNG2438.png');
// });

// $(".button").click(function(event) {
// })

$(window).mousemove(function(e) {
    $('.move').offset({
        left: e.pageX - 250,
        top: e.pageY - 20,
    });
});

console.log("hello");
var gamelength=30;
var timerID=null
var playing=false;
var numholes=6*10;
var currentpos=-1;
function clrholes() {
for(var k=0;k<document.dmz.elements.length;k++)
document.dmz.elements[k].checked=false;
}
function stoptimer() {
if(playing)
clearTimeout(timerID);
}
function showtime(remtime) {
document.cpanel.timeleft.value=remtime;
if(playing) {
if(remtime==0) {
stopgame();
return;
}
else {
var temp=remtime-1;
timerID=setTimeout("showtime(temp)",1000);
      }
   }
}
function stopgame() {
stoptimer();
playing=false;
document.cpanel.timeleft.value=0;
clrholes();
display("Game Over");
alert('Game Over.\nYour score is:  '+ totalhits);
}
function play() {
stoptimer();
if(playing) {
stopgame();
return;
}
playing=true;
clrholes();
var totalhits=0;
document.cpanel.score.value=totalhits;
display("Playing");
launch();
showtime(gamelength);
}
function display(msg) {
document.cpanel.state.value=msg;
}
function launch() {
var launched=false;
while(!launched) {
var mynum=random();
if(mynum!=currentpos) {
document.dmz.elements[mynum].checked=true;
currentpos=mynum;
launched=true;
      }
   }
}
 
function hithead(id) {
if(playing==false) {
clrholes();
display("Push Start to Play");
return;
}
if(currentpos!=id) {
totalhits+=-1;
$(document).cpanel.score.value=totalhits;
document.dmz.elements[id].checked=false;
}
else {
var totalhits = 1;
document.cpanel.score.value=totalhits;
launch();
document.dmz.elements[id].checked=false;
   }
}
 
function random() {
return(Math.floor(Math.random()*100%numholes));
}