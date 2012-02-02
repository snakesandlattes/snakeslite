<?php

$photos = get_photo_array();

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
?>
<?php $i = 0; ?>
<?php foreach($photos as $photo): ?>
<?php $i++; ?>
    <div class="photo" id="photo<?php echo $i; ?>" rel="<?php echo $i; ?>" style="top:0;">
        <img src="<?php echo $photo['bw']; ?>" />
        <div class="color_photo" id="photo<?php echo $i; ?>_color" style="top:0;"><img src="<?php echo $photo['img']; ?>" /></div>
    </div>
<?php endforeach; ?>
                    