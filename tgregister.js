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
	
var signinclicked = function() {
	$('.signinTab').attr('border-bottom',0);
	$('.signinTab').attr('background-color',activeColor);
	$('.signupTab').attr('border-bottom',)
}
	//validate email format/blank
	//validate password length/not blank
	//change sign in link to user's first name

//event handlers

//signin/up button clicked (signInClicked)
$(".userButton").on('click',userButtonClicked);

//signin tab clicked ()function
$(".signin").on('click',signinClicked);

//signup tab clicked function
//submit clicked function
//forgot pw clicked function
//myAccount clicked function XXX not needed
//cancel clicked function
//password hover function
});