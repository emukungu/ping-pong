//BUSINESS LOGIC
function pingPong(number){
  //takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:
  //Numbers divisible by 3 are replaced with "ping"; Numbers divisible by 5 are replaced with "pong";
  //Numbers divisible by 15 are replaced with "pingpong"
  var answer
  var newArray = []
  for(var i = 1; i<=number; i++){
    if(i%3 === 0){
      answer = "ping"
    }
    else if (i%5 === 0) {
      answer = "pong"
    }
    else{
      answer = i
    }

    newArray.push(answer)
  }
  return newArray
}





//USER LOGIC
$(document).ready(
  function(){
    $("#play").submit(
      function(event){
        event.preventDefault()
        var userInput = $("#ping").val()
        var result = pingPong(userInput)

        $("#numbers-list").append("<li>"+result+"</li>")
        $(".display").show()
        $("#ping").val("")

      }
    )
  }
)
