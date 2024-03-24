window.addEventListener("load", function(){
    this.setTimeout(
        function open(event) {
            document.querySelector(".popup2").style.display = "block";
        },
        1000
    )
  })
  
  document.querySelector("#closePop").addEventListener("click", function() {
    document.querySelector(".popup2").style.display = "none";
  })
  
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome';
}

document.write('<h3>' + greeting + '</h3>');


