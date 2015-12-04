console.log("hello world");
console.log("*************");

var symbols = ["*","$","#","@","*","$","#","@","*","$","#","@","*","$","#","@"]

var pattern = "*";

for (var increment = 0; increment < symbols.length; increment++) {
    console.log(pattern);
    pattern = pattern + symbols[increment];
    var ampersand = "&";
    console.log(increment);
    if (increment > 5) {
        for (var another = 0; another < 10; another++) {
            console.log(ampersand);
            ampersand = ampersand + "&";
        }
    }
}

/*var symbols1 = [];
var symbols2 = [];

var pattern1 = "*";
var pattern2= "-";

for (var i = 0; i <= 9; i++) {
        symbols1.push(pattern1);
        pattern1 = pattern1 + "*";
}
for (var i = 0; i <= 9; i++) {
        symbols2.push(pattern2);
        pattern2 = pattern2 + "-";
}
symbols2.reverse();

for (var i=0; i<=9; i++){
    console.log(symbols1[i],symbols2[i],symbols1[i],symbols2[i],symbols1[i],symbols2[i],symbols1[i],symbols2[i]);
}

var runningAmp

var runningAp = function() {
    for (var line = "#"; line.length < 8; line =+ "#") {
        console.log(line)
    }
    
console.log("hell")
    
    
    
    
    
    
    
    
}