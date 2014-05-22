<?php 
	error_reporting(E_ALL);
	ini_set('display_errors', 'on');

	$string = file_get_contents("student_data.json"); 
	$users=json_decode($string,true);

	$error_array = array();
	$error_string = "";
  $reg = '/^[a-zA-Z-_.+]+@[a-zA-Z-_.+]+\.[a-z]{2,6}\.?[a-z]+/';
	

  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$email = $_POST['email'];
	$password = $_POST['password'];
	  if (preg_match($reg, $email) === 1){
	  foreach($users as $user) {
	  	// if (preg_match($reg, $email)) {
	      if ($user['Email'] == $email) {
	  			if ($user['Password'] == $password) {
	  				// loggedIn();
	  				echo "<div>\n";
	  				echo "\n logged in as $email ";
	  				echo "</div>\n";
	  			}else {
	  				// badPw();
	  				echo "<div>\n";
	  				echo "\n Bad password $email ";
	  				echo "</div>\n";
	  			 }
	        }
	      }   
	    }else{
	      echo "Please enter a valid email address.";
	    }
	}    
	


 ?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script type="text/javascript" src="tgregister.js"></script>
</head>
<body>
<div class="userNav">
<div class="userButton">
	<h4>User<button>Sign In / Sign Up</button></h4>
</div>	

</div class="welcome">
	<p>Welcome
		<a href="#"class="userName"> User </a> Not 
		<a href="#"class="nonUser">User</a>?
		<button class="signOut">Sign Out</button>
	</p>
</div>
</div>

<div class="userPopUp">
	<div>Sign In</div>
	<div>Sign Up</div>


<div class="userSignIn">
	<div>
		<form action="index.php" method="POST">
			Email<input type="text" placeholder="email" name="email"><br>
			Password<input type="password" placeholder="password" name="password"><br>
			<button>Cancel</button><button type="submit">Submit</button>
			<a href="#">Forgot password?</a>	
		</form>	
		<div class="errorOut"><?php  print_r($error_array)?></div>
	</div>
</div>

<div class="userSignUp">
	<div>
		<form action="" method="#">
			First Name<input type="text" placeholder="first name"><br>
			Last Name<input type="text" placeholder="last name"><br>
			Email<input type="text" placeholder="email"><br>
			Password<input type="password" placeholder="password"><br>
			<button>Cancel</button><button type="submit">Submit</button>
		</form>	
	</div>
</div>
	
</div>
</body>
</html>