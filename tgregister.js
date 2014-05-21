$(function() { // call for jQuery
// variables
var activeColor = "#FF0000"; // active color for the div
// function definitions
// signInClick function
var userButtonClicked = function() {
	$('.userPopUp').show();
	$('.userSignIn').show();
	$('.email').focus();
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
$(".userButton").on('click',userButtonClicked);

//signin tab clicked ()function
$(".signin").on('click',signinClicked);

//signin tab clicked ()function
//signup tab clicked function
//submit clicked function
//forgot pw clicked function
$('a.password').on('click', forgotPassword
//cancel clicked function
$('.cancel').on('click', reset);

//password hover function //CSS
//myAccount clicked function XXX not needed out of scope





















































// sign
var signInClicked = function() {
	$('.email').text("");
	$('.password').text("");
	$('.signIn').show();
	$('.signInTab').attr('border-bottom',0);
	$('.signInTab').attr('background-color',activeColor);
	$('.signUpTab').attr('border-bottom',0);
	$('.signUpTab').attr('background-color',inactiveColor);
	$('.email').focus();
}

var signUpClicked = function() {
	$('.firstName').text("");
	$('.lastName').text("");
	$('.age').text("");
	$('.email').text("");
	$('.password').text("");
	$('.signIn').show();
	$('.signUpTab').attr('border-bottom',0);
	$('.signUpTab').attr('background-color',activeColor);
	$('.signInTab').attr('border-bottom',0);
	$('.signInTab').attr('background-color',inactiveColor);
	$('.email').focus();
}



});