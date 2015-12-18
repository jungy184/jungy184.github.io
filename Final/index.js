function doMove(cab) {
cab.style.left = (cab.style.left+10)+'px'; // pseudo-property code: Move right by 10px
setTimeout(doMove,20); // call doMove() in 20 msec
}