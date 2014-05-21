<?php 
	error_reporting(E_ALL);
	ini_set('display_errors', 'on');

	$string = file_get_contents("student_data.json"); 
	$users=json_decode($string,true);

	$error_array = array();
	$error_string = "";
	$email = $_GET['email'];
	$password = $_GET['password'];

	foreach($users as $user) {
		if ($user['Email'] == $email) {
			if ($user['Password'] == $password) {
				// loggedIn();
				echo "<div>\n";
				echo "\n logged in as $email ";
				echo "</div>\n";
			} else {
				// badPw();
				echo "<div>\n";
				echo "\n Bad password $email ";
				echo "</div>\n";
			}
		} else { 
			// notRegistered();
				echo "<div>\n";
				echo "\n $email not registered ";
				echo "</div>\n";
		}

	}


 ?>