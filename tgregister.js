$(function() { // call for jQuery
// variables
var activeColor = "#FF0000"; // active color for the div
// function definitions
// signInClick function
var userButtonClicked = function() {
	$('.userDialog').show();
	$('.email').focus();
}
	
var signinclicked = function() {
	$('.signinTab').attr('border-bottom',0);
	$('.signinTab').attr('background-color',activeColor);
	$('.signupTab').attr('border-bottom',)
}

var reset = function() {
	$('.input').text().remove();
	$('.signin').show();
	$('.userDialog').hide();
}

var forgotPassword = function() {
	$('.forgotPassword').show();
	$('.signin').hide();
	$('signup').hide();
}
	//validate email format/blank
	//validate password length/not blank
	//change sign in link to user's first name

//event handlers

//signin/up button clicked (signInClicked)
$('.userButton').on('click',userButtonClicked);

//signin tab clicked ()function
$(".signin").on('click',signinClicked);

//signup tab clicked function
//submit clicked function
//forgot pw clicked function
$('a.password').on('click', forgotPassword
//cancel clicked function
$('.cancel').on('click', reset);

//password hover function //CSS
//myAccount clicked function XXX not needed out of scope
});