
var startOfTimer = new Date().getTime();
var timer = 300000;
var endOfTimer = startOfTimer + timer;

var x = setInterval(function() {
  
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = endOfTimer - now;
  
    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
