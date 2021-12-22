
function x () {document.getElementById("number").innerHTML = getRandom()};
 
function getRandom () {
    return Math.floor(Math.random()*(5-1)+1)}
   
document.getElementById("click").onclick = function(){x()}
 