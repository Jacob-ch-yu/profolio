var latest1 = document.getElementById("recent1").innerHTML;
var latest2 = document.getElementById("recent2").innerHTML;
var latest3 = document.getElementById("recent3").innerHTML;
var latest4 = document.getElementById("recent4").innerHTML;
var latest5 = document.getElementById("recent5").innerHTML;
var latest6 = document.getElementById("recent6").innerHTML;
// var latest = document.querySelectorAll("#recent1, #recent2, #recent3, #recent4, #recent5, #recent6");
latest = latest1+latest2+latest3+latest4+latest5+latest6;
localStorage.setItem("fromepisodes",latest);
console.log(latest)



