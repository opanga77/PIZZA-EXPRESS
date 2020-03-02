
$(document).ready(function () {
  $("#delivery").submit(function () {

      var name = $("input#name").val();
      var number = $("input#number").val();
      var location = $("input#location").val();

      alert("From PIZZA-EXPRESS, " + "Hi " + name + ". Your order has been  received,it will be delivered to " +  location + " within short time possible.The delivery  cost is ksh.200....Thank you and we are graetfull for you!.");
      
  });
  
});

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
function copicola() {
  var copicola = 0;
  var addcopicola = document.getElementById("toppingone");
  if (addcopicola.checked === true) {
      copicola = free;
  }
  return parseInt(copicola);
}
function arugula() {
    var arugula = 0;
    var addarugula = document.getElementById("toppingone");
    if (addarugula.checked === true) {
        arugula = free;
    }
    return parseInt(arugula);
}
function onions() {
    var onions = 0;
    var addonions = document.getElementById("toppingone");
    if (addonions.checked === true) {
        onions = free;
    }
    return parseInt(onions);
}
function pepperoni() {
    var pepperoni = 0;
    var addpepperoni = document.getElementById("toppingone");
    if (addpepperoni.checked === true) {
        pepperoni = free;
    }
    return parseInt(pepperoni);
}

function anchovies() {
  var anchovies = 0;
  var addAnchovies = document.getElementById("toppingone");
  if (addAnchovies.checked === true) {
      anchovies = free;
  }
  return parseInt(anchovies);
}
function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + anchovies()) * (getNumber());
    
        console.log(totalPrice);
    alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )

}




