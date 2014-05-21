$(function() { // call for jQuery
// variables

// function definitions
// signInClick function
var userButtonClicked = function() {
	$(".userDialog").show();
	$(".email").focus();
}
	//validate email format/blank
	//validate password length/not blank
	//change sign in link to user's first name

//event handlers

//signin/up button clicked (signInClicked)
$(".userButton").on('click',userButtonClicked);

//signin tab clicked ()function
//signup tab clicked function
//submit clicked function
//forgot pw clicked function
//myAccount clicked function XXX not needed
//cancel clicked function
//password hover function
});