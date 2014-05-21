$(function() { // call for jQuery
// variables

// function definitions
// signInClick function
var userButtonClicked = function() {
	$(".userDialog").show();
	$(".email").focus();
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
//signup tab clicked function
//submit clicked function
//forgot pw clicked function
$('a.password').on('click', forgotPassword
//cancel clicked function
$('.cancel').on('click', reset);

//password hover function //CSS
//myAccount clicked function XXX not needed out of scope
});