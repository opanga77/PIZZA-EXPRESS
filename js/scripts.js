// function Pizza(size, toppings1,toppings2,toppings3,toppings4,crust){
//     this.size = size;
//     this.toppings1 = toppings1;
//     this.toppings2 = toppings2;
//     this.toppings3 = toppings3;
//     this.toppings4 = toppings4;
//     this.crust = crust;
//   };
  
//   Pizza.prototype.price = function(){
//     var total = this.toppings1 + this.toppings2 + this.toppings3 + this.toppings4 + this.size + this.crust;
//     return total;
//   };
  
  
//   $(document).ready(function(){
//     $("#pizzaOrder").submit(function(event){
//       event.preventDefault();
//       var size = parseFloat($("#size").val());
//       var toppings1 = parseFloat($("#toppings1").val());
//       var toppings2 = parseFloat($("#toppings2").val());
//       var toppings3 = parseFloat($("#toppings3").val());
//       var toppings4 = parseFloat($("#toppings4").val());
//       var crust = parseFloat($("#crust").val());
//       var userPizza = new Pizza(size,toppings1,toppings2,toppings3,toppings4,crust);
      
//       $("#customerOrder").alert("your price total is " + "ksh." + userPizza.price().toFixed(2));
//       $("ul").append("<li>" + "ksh." + userPizza.price().toFixed(2) + "</li>");
//       $("li").remove();
//       $("ul").append("<li>" + "ksh." + userPizza.price().toFixed(2) + "</li>");
//     });
//   });
$(document).ready(function(){
  $("#placeOrder").click(function(event){
    var sizePrice = function getSize() {
      var pizzaSize = document.getElementById("size").value;
      return parseInt(pizzaSize);
      }; 

        
          var toppings1Price = function getToppings1() {
          var pizzaToppings1 = document.getElementById("toppings1").value;
          return parseInt(pizzaToppings1);
      }; 
      var toppings2Price = function getToppings2() {
        var pizzaToppings2 = document.getElementById("toppings2").value;
        return parseInt(pizzaToppings2);
    }; 
    var toppings3Price = function getToppings3() {
      var pizzaToppings3 = document.getElementById("toppings3").value;
      return parseInt(pizzaToppings3);
  }; 
  var toppings4Price = function getToppings4() {
    var pizzaToppings4 = document.getElementById("toppings4").value;
    return parseInt(pizzaToppings4);
}; 
var crustPrice = function getCrustType() {
  var pizzaCrust = document.getElementById("crust").value;
  return parseInt(pizzaCrust);
};        
          var quantityPrice = function getQuantity() {
          var pizzaQuantity = document.getElementById("quantity").value;
          return parseInt(pizzaQuantity);
      };        
      function UserOrder(size, toppings1, toppings2, toppings3, toppings4, crust,quantity) {
          this.newSize = size;
          this.newTopping1 = topping1;
          this.newTopping2 = topping2;
          this.newTopping3 = topping3;
          this.newTopping4 = topping4;
          this.newCrust = crust;          
          this.newQuantity = quantity;
      }        
      var inputForUserOrder = new UserOrder(
          sizePrice(),
          toppings1Price(),
          toppings2Price(),
          toppings3Price(),
          toppings4Price(),
          crustPrice(),
          quantityPrice()
      );        
      var totalPrice = (inputForUserOrder.newSize + inputForUserOrder.newToppings1 + inputForUserOrder.newToppings2 + inputForUserOrder.newToppings3 + inputForUserOrder.newToppings4 + inputForUserOrder.newCrust) *  inputForUserOrder.newQuantity;        
          alert("Your total price is Ksh. :"  +totalPrice);

          if (totalPrice > 0) {
          alert("Your order of ksh. :"+ totalPrice +" ,has been placed.Thank you");
          var delivery = confirm(
          "For home delivery, an additional fee of 150 will be inccured. Would you like to proceed?");
          if (delivery === true) {
              for (;;) {
                  var location = prompt(
                  "Enter  a location for delivery: "
                  );
                  if (location !== "") {
                  alert(
                      "Your order will be delivered to: " +
                      location +
                      ". Thank you for orderin with the Pizza booth"
                  );                    break;
                  } else {
                  alert(
                      "Please enter a valid location to have your order delivered!"
                  );
                  }
              }                alert(
                  "Your order is = ksh" +
                  totalPrice +
                  " + ksh100 delivery fee."
              );
              } else {
              alert(
                  "Thank you! Your order has been processed, pick it within 72hrs or order."
              );
              alert(
                  "Your total order is = ksh" + totalPrice
              );
              }
              $("#placeOrder").reset();
          } else {
              alert("Please fill in all the valid fields for an order");
          }        event.preventDefault();
  });
});

  }
}