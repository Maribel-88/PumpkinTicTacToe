window.addEventListener("load", function(){
    this.setTimeout(
        function open(event) {
            document.querySelector(".popup2").style.display = "block";
        },
       
    )
  })
  
  document.querySelector("#closePop").addEventListener("click", function() {
    document.querySelector(".popup2").style.display = "none";
  })

 

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Evening Twinkletoes!';
} else if (hourNow > 12) {
    greeting = 'Afternoon Boggins!';
} else if (hourNow > 0) {
    greeting = 'Morning Piggy!';
} else {
    greeting = 'Welcome';
}

document.write('<h3 id="greeting">' + greeting + '</h3>');




