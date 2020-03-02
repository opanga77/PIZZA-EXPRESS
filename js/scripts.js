
// $(document).ready(function () {
//   $("#delivery").submit(function () {

//       var name = $("input#name").val();
//       var number = $("input#number").val();
//       var location = $("input#location").val();

//       alert("From PIZZA-EXPRESS, " + "Hi " + name + ". Your order has been  received,it will be delivered to " +  location + " within short time possible.The delivery  cost is ksh.200....Thank you and we are graetfull for you!.");
      
//   });
  
// });

function getSizeCost() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}

function getCrustCost() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getNumber() {
    var selectedNumber = document.getElementById("numberofpizza").value;
    return parseInt(selectedNumber);
}
function mozarellaCheese() {
  var cheese = 0;
  var addmozarellaCheese = document.getElementById("toppingone");
  if (addmozarellaCheese.checked === true) {
      cheese = 120;
  }
  return parseInt(cheese);
}
function sausages() {
    var sausage = 0;
    var addsausage = document.getElementById("toppingone");
    if (addsausage.checked === true) {
        sausage = 150;
    }
    return parseInt(sausage);
}
function onions() {
    var onion = 0;
    var addonions = document.getElementById("toppingone");
    if (addMushroom.checked === true) {
        onion = 140;
    }
    return parseInt(onion);
}
function tikkaSaucee() {
    var tikkaSauce = 0;
    var addtikkaSauce = document.getElementById("toppingone");
    if (addtikkaSauce.checked === true) {
        tikkaSauce = 130;
    }
    return parseInt(tikkaSauce);
}

function mushrooms() {
  var mushroom = 0;
  var addMushroom = document.getElementById("toppingone");
  if (addMushroom.checked === true) {
      mushroom = 160;
  }
  return parseInt(mushroom);
}
function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());
    
        console.log(totalPrice);
    alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

}
$(document).ready(function () {
  $("#delivery").submit(function () {

      var name = $("input#name").val();
      var number = $("input#number").val();
      var location = $("input#location").val();

      alert("From PIZZA-EXPRESS, " + "Hi " + name + ". Your order has been  received,it will be delivered to " +  location + " within short time possible.The delivery  cost is ksh.200....Thank you and we are graetfull for you!.");
      
  });
  
});


