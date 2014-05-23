$(function() { // call for jQuery
// variables
// function definitions
// signInClick function
var userButtonClicked = function() {
	$('.userPopUp').show();
	$('.userSignIn').show();
	$('.userSignUp').hide();
	$('.error').text("");
	$('.email').focus();
}	

var reset = function(event) {
	event.preventDefault();
	$('input').val('');
	$('.error').text(''); 
	$('.userSignIn').show();
	$('.userPopUp').hide();
}

// var forgotPassword = function() {
// 	$('.forgotPassword').show();
// 	$('.signIn').hide();
// 	$('.signUp').hide();
// }

// sign
var signInClicked = function() {
	$('.email').val("");
	$('.password').val("");
	$('.userSignIn').show();
	$('.userSignUp').hide();
	$('.signInTab').addClass('.activeTab');
	$('.signUpTab').removeClass('.activeTab');
	$('.email').focus();
}

var signUpClicked = function() {
	$('.firstName').text("");
	$('.lastName').text("");
	$('.email').text("");
	$('.password').text("");
	$('.userSignUp').show();
	$('.userSignIn').hide();
	$('.signUpTab').addClass('.activeTab');
	$('.signInTab').removeClass('.activeTab');
	$('.firstName').focus();
}

//error function inserts error message and makes a red box
var errorMessage = function(inputType, err) {
	$('.error').text(inputType + " is " + err + ".");
}
//event handlers

//signin/up button clicked (signInClicked)
$('.userButton').on('click',userButtonClicked);

//signin tab clicked ()function
$('.signInTab').on('click',signInClicked);

// //signup tab clicked function
$('.signUpTab').on('click',signUpClicked);

// //forgot pw clicked function
// $('a.password').on('click', forgotPassword

//password hover function 
//validate email field onblur
$('.email').on('blur', function(){	
	var email = $('.email').val();
	var re = /^(.)+(\@)+(.)+(\.)+(.{1,64})$/;
	if (!re.test(email)) {
		errorMessage("email", "invalid");
	} else {
		$('.error').text("");
	}
});

// //cancel clicked function
$('.cancelButton').on('click', reset);


});