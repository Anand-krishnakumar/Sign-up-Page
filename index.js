function validate()
{

var fname = $('#fname').val();
var lname = $('#lname').val();
var email = $('#email').val();
var pass = $('#pass').val();
var cpass = $('#cpass').val();

var checker = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var a = 0;

$("div.e").remove();
$( "#fname" ).click(function() {
  $("div.e1").remove();
});

$( "#lname" ).click(function() {
  $("div.e2").remove();
});

$( "#email" ).click(function() {
  $("div.e3").remove();
});

$( "#pass" ).click(function() {
  $("div.e4").remove();
});

$( "#cpass" ).click(function() {
  $("div.e5").remove();
});

if(fname.length == 0)
{
$("#fname").css('border-color' , '#ff0000');
$("#fname").after("<div class='e e1' style= 'color:red; margin-bottom:20px;'>Enter your first name</div>");
a = 1;
}

$("#fname").click(function(){
    $("#fname").css('border-color' , '#ced4da');
});
if(lname.length == 0)
{

 $("#lname").css('border-color' , '#ff0000');
 $("#lname").after("<div class='e e2' style= 'color:red; margin-bottom:20px;'>Enter your First Name</div>");
  a = 1;
}
$("#lname").click(function(){
    $("#lname").css('border-color' , '#ced4da');
});

if(checker.test(email) == false)
{
  $("#email").css('border-color' , '#ff0000');
  $("#email").after("<div class='e e3' style= 'color:red; margin-bottom:20px;'>Enter a valid Email</div>");

  a = 1;
}
$("#email").click(function(){
    $("#email").css('border-color' , '#ced4da');
});
if(pass.length == 0)
{
    $("#pass").css('border-color' , '#ff0000');
    $("#pass").after("<div class='e e4' style= 'color:red; margin-bottom:20px;'>Password cant be empty</div>");
    a = 1;
}
$("#pass").click(function(){
    $("#pass").css('border-color' , '#ced4da');
});
if(pass!=cpass)
{
  $("#cpass").css('border-color' , '#ff0000');
  $("#cpass").after("<div class='e e5' style= 'color:red; margin-bottom:20px;'>Passwords dont match</div>");


  a = 1;
}
$("#cpass").click(function(){
    $("#cpass").css('border-color' , '#ced4da');
});
if(a == 1){
  return false;
}

if(a == 0){
    $("#fname").click(function(){
    $("#fname").css('border-color' , '#ced4da');
});
  $("#lname").click(function(){
    $("#lname").css('border-color' , '#ced4da');
});
  $("#email").click(function(){
    $("#email").css('border-color' , '#ced4da');
});
  $("#pass").click(function(){
    $("#pass").css('border-color' , '#ced4da');
});
  $("#cpass").click(function(){
    $("#cpass").css('border-color' , '#ced4da');
  });
  alert("User successfully Registered!")

  return true;
}
}
