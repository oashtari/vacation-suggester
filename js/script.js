// back end
var vacation = function(name,continent,landscape,social,age) {
  if(name) {
    if (continent === "europe") {
      if (landscape === "beach") {
        if (social === "introvert") {
          return "norway";

        } else if (social === "extrovert") {
          return "estonia";
        }

      } else if (landscape === "woods") {
          if (social === "introvert") {
            return "norway";
          } else if (social === "extrovert") {
            return "taste";
          }

      } else if (landscape === "city"){
          if (social === "introvert") {
            return "taste";
          } else if (social === "extrovert") {
            return "brazil"
          }

      }

    } else if (continent === "sAmerica") {
      if (landscape === "beach") {
        if (social === "introvert") {
          return "taste";
        } else if (social === "extrovert") {
          return "brazil";
        }

      } else if (landscape === "woods") {
          if (social === "introvert") {
            return "patagonia";
          } else if (social === "extrovert") {
            return "taste";
          }

      } else if (landscape === "city"){
          if (social === "introvert") {
            return "taste";
          } else if (social === "extrovert") {
            return "brazil";
          }

      }

    } else if (continent === "asia") {
      if (landscape === "beach") {
        if (social === "introvert") {
          return "thailand";
        } else if (social === "extrovert") {
          return "taste";
        }

      } else if (landscape === "woods") {
          if (social === "introvert") {
            return "myanmar";
          } else if (social === "extrovert") {
            return "taste";
          }

      } else if (landscape === "city"){
          if (social === "introvert") {
            return "taste";
          } else if (social === "extrovert") {
            return "taste";
          }
      }
    }
  } else {
    alert("Please enter your first name.")
  }
}

// front end

$(document).ready(function(){
  $("submit#push").click(function(event) {

    var name = $("#name").val();
    var continent = $("#continent").val();
    var landscape = $("#landscape").val();
    var social = $("#social").val();
    var age = parseInt($("#age").val());

    var suggestion = vacation(name,continent,landscape,social,age);

    event.preventDefault();
    console.log(suggestion);

    // "#" + suggestion
    var finalResult = "#" + suggestion;
    // $("div").text(suggestion);
    $(finalResult).show();
  })

})
