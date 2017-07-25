// JavaScript File
$( document ).ready(function() {

$("img").hide();
$("#pizza").click(function(){
$("#pizzaimage").show();
});
 
 $("#gk").click(function(){
$("#gkimage").show();
});

$("#salad").click(function(){
$("#saladimage").show();
});
 
 $("#spaghetti").click(function(){
$("#spaghettiimage").show();
});
 
 $("#soda").click(function(){
$("#sodaimage").show();
});
$("#pizzaimage").click(function(){
 $("#pizzaimage").fadeOut();
 });
 $("#gkimage").click(function(){
 $("#gkimage").fadeOut();
 });
 $("#saladimage").click(function(){
 $("#saladimage").fadeOut();
 });
 $("#spaghettiimage").click(function(){
 $("#spaghettiimage").fadeOut();
 });
 $("#sodaimage").click(function(){
 $("#sodaimage").fadeOut();
 });
  $("#yes").click(function(){
 $("#cashier").text("Thank You!");
 $("#yes").css("color","green");
  $("#no").css("color","black");

  $("#takeout").slideDown();
  $(".food").hide();
 });
 
  $("#no").click(function(){
 $("#cashier").text("Please Pay!");
 $("#no").css("color","red");
  $("#yes").css("color","black");

   $("#takeout").slideUp();

 });
});