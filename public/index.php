<?php include 'functions.php'; ?>
<!DOCTYPE HTML>
<html>
<head>
<title>Snakes and Lattes</title>

    <!-- include meta tags -->
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    
    <!-- include css -->
            <link rel="stylesheet" type="text/css" href="/css/reset.css" />
            <link rel="stylesheet" type="text/css" href="/css/main.css" />
			<link rel="stylesheet" type="text/css" href="/css/ios.css" />
            <link rel="stylesheet" type="text/css" href="/css/ie.css" />
    
    <!-- include js -->
            <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
            <script type="text/javascript" src="/js/jquery.js"></script>
            <script type="text/javascript" src="/js/jquery.easing.js"></script>
            <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
			<script type="text/javascript" src="/js/uicore.js"></script>
			<script type="text/javascript" src="/js/scrollbar.js"></script>
			<script type="text/javascript" src="/js/ios.js"></script>
            <script type="text/javascript" src="/js/map.js"></script>
            <script type="text/javascript" src="/js/main.js"></script>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</head>
<body class="<?php echo $body_class[0];?>">
	
<div class="wrap">
	<div class="menu_hit left"></div>
		<div class="menu_hit top"></div>
		<div class="menu_hit right"></div>
		
		<div class="menu">
				<div class="menu_item sub active" rel="contact">Contact</div>
				<div class="menu_item sub" rel="hours">Hours</div>
				<div class="menu_item sub" rel="location">Location</div>
				<div class="menu_item sub" rel="games">Games</div>
				<div class="menu_item sub" rel="gallery">Gallery</div>
				<div class="menu_item sub" rel="food">Food &amp; Drink</div>
				<div class="menu_item sub" rel="store">Online Store</div>
				
				
		</div><!-- /.menu -->
		<div class="foreground">
			<div class="photo_container">
                <div class="photo_next"></div>
                <div class="photo_previous"></div>
                <div class="photo_close"></div>
				<div class="photo_slider">
					<?php include('photos.php'); ?>
				</div><!-- /.photo-slider-->
			</div>
			<h1 class="title">Snakes and Lattes</h1>
			<div class="banner_hit"></div>
		</div><!-- /.foreground -->
		
		<div class="content">
			
			<div class="page" id="page_contact">
				<div class="contact_left">
					<div class="map">
						<img src="/<?php echo $images_folder;?>/maps/map.gif" />
					</div>
					<div class="contact_item">
						<div class="contact_icon"><img src="/<?php echo $images_folder;?>/icons/address.png"></div>
						<div class="contact_info">600 Bloor Street West<br />Toronto, Ontario<br />M8G 1K4</div>
					</div>
					<div class="contact_item">
						<div class="contact_icon"><img src="/<?php echo $images_folder;?>/icons/phone.png"></div>
						<div class="contact_info">647.342.9229</div>
					</div>
					<div class="contact_item">
						<div class="contact_icon"><img src="/<?php echo $images_folder;?>/icons/email.png"></div>
						<div class="contact_info"><a href="mailto:contact@snakesandlattes.com">contact@snakesandlattes.com</a></div>
					</div>
				</div>
				
				<div class="contact_right">
					<h6>Name</h6>
					<input type="text" class="contact_input" id="contact_name" />
					<h6>E-mail</h6>
					<input type="text" class="contact_input"id="contact_email" />
					<h6>Phone</h6>
					<input type="text" class="contact_input"id="contact_phone" />
                    <h6>Reason for Contact</h6>
                    <select class="contact_input" id="contact_reason">
                        <option value="">Please Choose</option>
                        <option value="booking">Bookings</option>
                        <option value="party">Host a Party</option>
                        <option value="games">Game Inquiries</option>
                        <option value="general">General Question</option>
                    </select>
					<h6>Message</h6>
					<textarea class="contact_input textarea"id="contact_message"></textarea>
					
					<a href="#" class="form-button" id="submit_contact_form">Submit</a>
					
				</div>
				
				<div class="clear"></div>
				
			</div><!-- /#page_contact -->
			
			<div class="page" id="page_hours">
                
                <?php if($is_open):?>
                    <div class="open"><img src="/<?php echo $images_folder;?>/open.png" /></div>
                <?php else: ?>
                    <div class="close"><img src="/<?php echo $images_folder;?>/closed.png" /></div>
                <?php endif; ?>
                
				<div class="hours">
					
					<div class="hours_left">Mon-Thu</div>
					<div class="hours_right">11am - 2am</div>
					<div class="clear"></div>
					
					<div class="hours_left">Fri-Sat</div>
					<div class="hours_right">11am - 4am</div>
					<div class="clear"></div>
					
					<div class="hours_left">Sun</div>
					<div class="hours_right">11am - 2am</div>
					<div class="clear"></div>
					
				</div>
				
			</div><!-- /#page_hours -->
            
            <div class="page" id="page_splash">
    
				<!--<div class="splash"></div>-->
				
			</div><!-- /#page_hours -->
			
			
			<div class="page" id="page_location">
				
				<div id="map_canvas"></div>
                <div class="location_info">
                    <p>We are located just one street west of Bathurst on the north side of Bloor St.<br>
                    If you're using the TTC, get off at Bathurst Station or Bloor St. and walk west.</p>
                </div>
				<div class="location_icons">
						<div class="contact_item">
						<div class="contact_icon"><img src="/<?php echo $images_folder;?>/icons/address.png"></div>
						<div class="contact_info">600 Bloor Street West<br />Toronto, Ontario<br />M8G 1K4</div>
					</div>
					<div class="contact_item">
						<div class="contact_icon"><img src="/<?php echo $images_folder;?>/icons/phone.png"></div>
						<div class="contact_info">647.342.9229</div>
					</div>
					<div class="contact_item">
						<div class="contact_icon"><img src="/<?php echo $images_folder;?>/icons/email.png"></div>
						<div class="contact_info"><a href="mailto:contact@snakesandlattes.com">contact@snakesandlattes.com</a></div>
					</div>
				</div>
				
				
			</div> <!-- /#page_location -->
			
			<div class="page" id="page_games">

				<div class="search_bar">
						<div class="search_icon"></div>
						<input type="text" placeholder="Search" onclick="select(this);">
				</div>
				<ul class="abc_index">
						<li class="active">0-9</li>
						<li>a</li>
						<li>b</li>
						<li>c</li>
						<li>d</li>
						<li>e</li>
						<li>f</li>
						<li>g</li>
						<li>h</li>
						<li>i</li>
						<li>j</li>
						<li>k</li>
						<li>l</li>
						<li>m</li>
						<li>n</li>
						<li>o</li>
						<li>p</li>
						<li>q</li>
						<li>r</li>
						<li>s</li>
						<li>t</li>
						<li>u</li>
						<li>v</li>
						<li>w</li>
						<li>x</li>
						<li>y</li>
						<li>z</li>
				</ul>
				
				 <div id="list1" class="listContainer">
						<?php include('games.php'); ?>		
				</div>
									
			</div> <!-- /#page_games -->
			
			
			<div id="page_food" class="page">
				<?php include('food.php'); ?>	
				
			</div>
			
		</div> <!-- /.content -->
		
		
		
        <div class="fbook_hit">
        
		<div class="social">
			<a href="http://www.facebook.com/snakesandlattes" class="social_link" target="_blank"><img src="/<?php echo $images_folder;?>/icons/social/facebook.png" /></a>
			<a href="http://twitter.com/#!/snakesandlattes" class="social_link" target="_blank"><img src="/<?php echo $images_folder;?>/icons/social/twitter.png" /></a>
			<a href="mailto:contact@snakesandlattes.com" class="social_link"><img src="/<?php echo $images_folder;?>/icons/social/email.png" /></a>
		</div>
        
        </div>
        
        <iframe class="fbook_link" src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.snakesandlattes.com&amp;send=false&amp;layout=button_count&amp;width=80&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=tahoma&amp;height=21&amp;appId=227259757331738" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:80px; height:21px;" allowTransparency="true"></iframe>
		
		
	</div><!-- /.wrap -->
	
</body>
</html>