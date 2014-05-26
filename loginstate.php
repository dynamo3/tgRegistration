<?php 
  if ($loggedIn){
    echo "<div class='welcome'>
          <p>Welcome
            <a href='#'class='userName'>$email</a> Not 
            <a href='#'class='nonUser'>$email</a>?
            <button class='signOut'>Sign Out</button>
          </p>
        </div>";
  }else {
    echo "<div class='userButton'>
          <div>
            <span>user</span><button>Sign In / Sign Up</button>
          </div>
        </div>";
  }
?>