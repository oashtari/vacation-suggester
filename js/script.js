// back end
var vacation = function(name,continent,landscape,social,age) {
  if(name) {
    if (continent === "europe") {
      if (landscape === "beach") {
        if (social === "introvert") {
          return "norway";

        } else if (social === "extrovert") {
          console.log("estonia");
        }

      } else if (landscape === "woods") {
          if (social === "introvert") {
          } else if (social === "extrovert") {
          }

      } else if (landscape === "city"){
          if (social === "introvert") {
          } else if (social === "extrovert") {
          }

      }

    } else if (continent === "sAmerica") {
      if (landscape === "beach") {
        if (social === "introvert") {
        } else if (social === "extrovert") {
        }

      } else if (landscape === "woods") {
          if (social === "introvert") {
          } else if (social === "extrovert") {
          }

      } else if (landscape === "city"){
          if (social === "introvert") {
          } else if (social === "extrovert") {
          }

      }

    } else if (continent === "asia") {
      if (landscape === "beach") {
        if (social === "introvert") {
        } else if (social === "extrovert") {
        }

      } else if (landscape === "woods") {
          if (social === "introvert") {
          } else if (social === "extrovert") {
          }

      } else if (landscape === "city"){
          if (social === "introvert") {
          } else if (social === "extrovert") {
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

    // $(#suggestion).text(suggestion);
    // $(#suggestion).show();
  })

})
console.log(vacation);
