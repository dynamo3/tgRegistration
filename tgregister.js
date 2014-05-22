$(function() { // call for jQuery
// variables
// function definitions
// signInClick function
var userButtonClicked = function() {
	$('.userPopUp').show();
	$('.userSignIn').show();
	$('.userSignUp').hide();
	$('.email').focus();
}	

var reset = function(event) {
	event.preventDefault();
	$('input').val(""); 
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
		console.log('in');
		$('.email').val("");
		$('.password').val("");
		$('.userSignIn').show();
		$('.userSignUp').hide();
		$('.signInTab').addClass('.activeTab');
		$('.signUpTab').removeClass('.activeTab');
		$('.email').focus();
	}

	var signUpClicked = function() {
		console.log('up');
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

//submit clicked function

// //cancel clicked function
$('.cancelButton').on('click', reset);




// //Jaylyn's Workspace //
// $('button.submit').on('click', function() {
// 	for (i in $('.input')) {

// 	}
// 	if($('input.email').text() == '') {
// 		error();
// 	}
// 	else {
// 	reset();
// 	$('header').html('')
// 	}
// });

// //error function inserts error message and makes a red box
// var errorMessage = function() {
// 	console.log("this is the error");
// }





































});