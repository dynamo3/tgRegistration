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
	$('.userSignIn').show();
	$('.userPopUp').hide();
}

var forgotPassword = function() {
	$('.forgotPassword').show();
	$('.signIn').hide();
	$('.signUp').hide();
}
	//validate email format/blank
	//validate password length/not blank
	//change sign in link to user's first name

//event handlers

//signin/up button clicked (signInClicked)
$('.userButton').on('click',userButtonClicked);

//signin tab clicked ()function
$('.signIn').on('click',signinClicked);

//signin tab clicked ()function
//signup tab clicked function
//submit clicked function
//forgot pw clicked function
$('a.password').on('click', forgotPassword
//cancel clicked function
$('.cancel').on('click', reset);

//password hover function //CSS
//myAccount clicked function XXX not needed out of scope




//Jaylyn's Workspace //
// $('button.submit').on('click', function() {
// 	if($('input.email').text() == '') {
// 		error();
// 	}
// 	else {
// 	reset();
// 	$('header').html('')
// 	}
// });

//error function inserts error message and makes a red box





































// sign
var signInClicked = function() {
	$('.email').text("");
	$('.password').text("");
	$('.userSignIn').show();
	$('.signInTab').addClass('.active');
	$('.signUpTab').removeClass('.active');
	$('.email').focus();
}

var signUpClicked = function() {
	$('.firstName').text("");
	$('.lastName').text("");
	$('.email').text("");
	$('.password').text("");
	$('.signIn').show();
	$('.signUpTab').addClass('.active');
	$('.signInTab').removeClass('.active');
	$('.firstName').focus();
}



});