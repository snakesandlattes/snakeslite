<?php
session_start();
//$photos = get_photo_array();

$body_class[] =  get_random_theme();
$images_folder = $body_class[0];
$is_open = check_if_open();
/*
function get_photo_array() {
        
        $size = 19;
        
        $photos = array();
        
        for($i=1; $i<=$size; $i++){
            
            $img = '/photos/' . $i . '.jpg';
            $bw = '/photos/' . $i . '_BW.jpg';
            
            $photos[] = array("img" => "$img", "bw" => "$bw");
            
        }
        
        return $photos;
        
}
*/


function get_random_theme() {
        
        if($_GET['color']){
            return $_GET['color'];
        }
        
        
        $colors = array('purple', 'blue', 'orange');
        $i = round(rand(0, 2));

        if(isset($_SESSION['color'])){
            
            if($colors[$i] == $_SESSION['color']){
                
                $i = round(rand(0, 2));
                
                for($j=0; $j <= 1000; $j++){
                    $i = round(rand(0, 2));
             
                    if($colors[$i] != $_SESSION['color']){
                        $color = $colors[$i];
                        break;
                    }
                    
                }

            }
        }
        
        $color = $colors[$i];
        
        $_SESSION['color'] = $color;
        
        
        return $color;
        
    }
    
function check_if_open(){
        
	date_default_timezone_set("America/New_York");

	$day = date('D');
	$hour = date('G');

	$open = 11;

	switch($day) {
		case 'Sat':
		case 'Sun':
			$close = 4;
			break;
		default:
			$close = 2;
	}
	
	if($hour < $open){
		if($hour < $close ) {
			return true; 
		}
		return false;
	}
	return true;
}
      
    