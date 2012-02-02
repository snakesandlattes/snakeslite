<?php

if ($_SERVER['PHP_AUTH_USER'] != "snakes" || $_SERVER['PHP_AUTH_PW'] != "password"):    
   
  header("WWW-Authenticate: " . "Basic realm=\"Protected Page: " .    
         "Enter your username and password " .    
         "for access.\"");    
  header("HTTP/1.0 401 Unauthorized");    
  // Display message if user cancels dialog    
  ?>    
  <HTML>    
  <HEAD><TITLE>Authorization Failed</TITLE></HEAD>    
  <BODY>    
  <H1>Authorization Failed</H1>    
  <P>Without a valid username and password,    
     access to this page cannot be granted.    
     Please click 'reload' and enter a    
     username and password when prompted.    
  </P>    
  </BODY>    
  </HTML>    
<?php die(); ?>    
<?php endif; ?> 
<?php

define('ENVIROMENT', $_SERVER['SERVER_NAME']);

switch(ENVIROMENT){

case 'snakeslite':
    $connecton = mysql_connect('localhost', 'root', '');
    $db = mysql_selectdb('snakeslite');
break;
case 'snakesandlattes.com':
    $connecton = mysql_connect('127.0.0.1', 'snakeslite', 'yaPGs6eFfmkJRXhP');
    $db = mysql_selectdb('snakeslite');
    break;

}

echo "<h3>Contacts</h3>";

$sql = "SELECT * FROM contacts";
$result = mysql_query($sql);

$num = mysql_num_rows($result);




echo "<table width='800'>";
echo "<tr>";
echo "<td>Name</td><td>Email</td><td>Phone</td>";
echo "</tr>";
$i = 0;
while($i < $num){
    echo "<tr>";
    echo "<td>" . mysql_result($result, $i, 'names') . "</td>";
    echo "<td>" . mysql_result($result, $i, 'email') . "</td>";
    echo "<td>" . mysql_result($result, $i, 'phone') . "</td>";
    echo "</tr>";

    $i++;
}
echo "</table>";

echo "<h3>Upload Schedule</h3>";
?>


<form action="/backend/upload_schedule.php" method="post" enctype="multipart/form-data">
    
    <input type="file" name="upload" />
        
    <input type="submit" value="Upload" />
    
</form>

