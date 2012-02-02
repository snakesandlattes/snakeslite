<?php

if(isset($_FILES['upload'])){
    
    $target_path = "../";
    
    $target_path = $target_path .  'schedule.html'; //basename( $_FILES['uploadedfile']['name']); 
    
    if(move_uploaded_file($_FILES['upload']['tmp_name'], $target_path)) {
        echo "The file has been uploaded<br>";
        echo '<a href="/schedule.html">View</a>';
    } else{
        echo "There was an error uploading the file, please try again!";
    }
    
}
