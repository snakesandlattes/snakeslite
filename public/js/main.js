var window_width = null;
var window_height = null;
var current_photo;
var currentPage;
var num_photos;
var photo_opened;
var allow_photo_slide;

var starting_menu_width = null;

$(document).ready(function(){
    
    $slider = $(".photo_slider");
    $photos = $(".photo");
    
    initSite();
    initMap();
    
    starting_menu_width = $(".menu").width();
    hover_menu_width = 84;

    // Dom Events
    
    $(".menu_item.main").mouseover(function(){
       
       open_menu();
       
    });
    
    $(".menu_item.main").click(function(){
       
       open_menu(); 
        
    });
    
    
    $(".menu_item.sub").click(function(){
       
       if(photo_opened){
            close_photo();
       }
       
       
       nextPage = $(this).attr("rel");
       
       if(nextPage != currentPage || nextPage == 'gallery'){

            loadPage(nextPage);
            
            $(".menu_item.sub").removeClass('active');
            
            $(this).addClass("active");
            
            close_menu();
            
        }
       
       return false;
        
    });
    
    $(".menu_hit").mouseover(function(){
       
       close_menu(); 
        
    });
    

    $(".photo_container").mouseover(function(){
       
       $(".color_photo").fadeIn(150);
        
    });
   
    
    $(".banner_hit").mouseover(function(){
       
       $(".color_photo").fadeOut(150);
       allow_photo_slide = true;
        
    });
    
    
    $(".photo").click(function(){
       
       
       toggle_photo_open();
       
       
        
    });
    
    
    $(".photo_next, .photo_previous").mouseover(function(){
       $(this).css('width', '90px');
       
       $(this).stop().fadeTo(300, .9);
       
        
    });
    
    $(".photo_next, .photo_previous").mouseout(function(){
       $(this).css('width', '30px');
       $(this).stop().fadeTo(300, .3); 
        
    });
    
    
    $(".photo_next").click(function(){
       allow_photo_slide = true;
       next_pic();
       allow_photo_slide = false;
        
    });
    

    
    $(".photo_previous").click(function(){
       allow_photo_slide = true;
       prev_pic();
       allow_photo_slide = false;
        
    });
    
    $(".photo_close").mouseover(function(){
       
       $(this).stop().fadeTo(300, .9);

    });
    
    $(".photo_close").mouseout(function(){
       
       //$(this).stop().fadeTo(300, .6);

    });
    
    
    
    $(".photo_close").click(function(){
       close_photo();
        
    });
    
    
    $(".fbook_hit").mouseover(function(){
        
       $(".fbook_link").fadeIn(300);
        
    });
    
     $(".content, .foreground").mouseover(function(){
        
       $(".fbook_link").fadeOut(300);
        
    });
     
     $("#submit_contact_form").click(function(){
        
        submit_contact_form();
        
     });
     
     
     
     
     $(".abc_index li").click(function(){
        
        var current = $(".listContainer").scrollTop();
        
        var letter = $(this).text();
        
        var header = $("dl#header_"+letter);
        
        
        if($(this).attr('rel') == '1'){
        
            var position = header.position();
            var top = position.top + current;
    
            $(".listContainer").animate({
                scrollTop: top
             }, 300);
             
        } 
        
        
     });
     
    $(".search_bar input").keyup(function(e){
    
     
           
           var q = $(this).val();
           var datastring = 'q=' + q;
            $.ajax({
                url: '/games.php',
                type: 'GET',
                data: datastring,
                success: function(d) {
                    
                     
                    $("#list1").html(d);
                    instantiate_ios();
                       
               
                }
            
            });
            

    });


         
       // Food and Drinks Menu
       
    $(".food_link").click(function(){
    
        if(!$(this).hasClass('active')){
            var rel = $(this).attr('rel');
            
            $(".food_table_container").slideUp(300);
            
            $("#food_table_" + rel).slideDown(300);
            
            $('.food_link').removeClass('active');
            $(this).addClass('active');
            
        }
        
            
        
        
    });
       
    
    
});

  
     $(window).resize(function(){
        window_height = $(window).height();
        position_objects();
        
     });


function toggle_photo_open() {
    
    if(photo_opened){
       
           close_photo();
        
       } else {
        
            open_photo();
            
       }
    
}


function open_photo() {
    
    var h = window_height;
    
    $(".photo_container").fadeIn(300);
        
    var current_fg_h = $(".foreground").height();
    var current_p_h = $(".photo_container").height();
    
    $next = $(".photo_next");
    $next.height(h);
    $next.css('right', '0px');
    $next.fadeTo(300, .3);
    
    $prev = $(".photo_previous");
    $prev.height(h);
    $prev.css('left', '0px');
    $prev.fadeTo(300, .3);
    
    $close = $(".photo_close");
    $close.fadeTo(300, .6);
    
    
    $(".foreground").animate({
     
         height: h
     
     }, 500);
    
    $(".photo_container, .color_photo, .photo").animate({
     
         height: h
     
     }, 500);
    
    
    photo_opened = true;
    allow_photo_slide = false;

}

function close_photo() {
    
    $(".foreground").animate({
             
        height: 350
    
    }, 500);
   
   $(".photo_container, .color_photo, .photo").animate({
    
        height: 250
    
    }, 500);
   
   $next = $(".photo_next");
   $prev = $(".photo_previous");
   
   $next.fadeOut(300);
   $prev.fadeOut(300);
   
   $(".photo_close").fadeOut(300);
   
   photo_opened = false;
   allow_photo_slide = true;
   
   $(".color_photo").fadeOut(300);
   
}

function hide_gallery() {
    $(".photo_container").fadeOut(300, function(){
        $(".foreground").animate({
                 
            height: 100
        
        }, 500);
    
    });
}

function part_gallery() {
    
    $(".foreground").animate({
             
        height: 350
    
    }, 500, function(){
        
        $(".photo_container").fadeIn(300);
        
        });
    
    
}


function initSite() {
    
    //set up defaults
    currentPage = 'contact';
    current_photo = 0;
    photo_opened = false;
    allow_photo_slide = true;
    
    //get window sizes
    getWindowSize();

    //position objects
    
    //animate stage in
    
    $foreground = $(".foreground");
    
    
    position_objects();
    
    $photo_slider = $(".photo_slider");
    
     $.ajax({
        url: '/photos.php',
        type: 'GET',
        success: function(d) {
             
           //$photo_slider.html(d);
            
            easing = get_random_ease();
    
            $foreground.fadeIn(500, function(){
                
                photo_slider_init();
                
                $foreground.animate({
                    height: 350
                }, 600, easing, function(){
                    
                    load_first_page();
                    
                    });
                
            });   
       
        }
    
    });
    
    
   
      
    
}


function load_slides(){
    
    

    
}

function position_objects() {
    
    
    $(".wrap").height(window_height);
    
}

function load_first_page(){
    
     //search for hash tag
    hash = getHash();
    nextPage = hash;
    
    if(hash == ''){ nextPage = 'contact'; }
    
    //load current page
    loadPage(nextPage);
    
    
    
}

function getWindowSize(){
    
    window_width = $(window).width();
    window_height = $(window).height();
    
}

function getHash(){
    
    var hash = window.location.hash;
    hash = hash.replace('#', '');
    
    return hash;
    
}

function loadPage(page){
    
    if(page != ''){
    
        //remove currentPage content
        removePage(currentPage);
        
        //bring in nextPage content
        var t = setTimeout('showPage()', 500);

    }
    
    
    
}

function removePage(page) {
    
    switch(page){
        case "home":
            
            break;
        case "contact":
            animate_out($("#page_contact"));
            break;
        case "location":
            animate_out($("#page_location"));
            break;
        case "hours":
            animate_out($("#page_hours"));
            break;
        case "gallery":
            close_photo();
            break;
        case "food":
            animate_out($("#page_food"));
            break;
        case "games":
            animate_out($("#page_games"));
            break;
        case "shop":
            window.location = 'http://shop.snakesandlattes.com';
            break;
        }
    
}

function showPage() {
    
    var banner_position = 'normal';
    
    switch(nextPage){
        case "contact":
            animate_in($("#page_contact"));
            set_hash('contact');
            part_gallery();
            break;
        case "hours":
            animate_in($("#page_hours"));
            set_hash('hours');
            part_gallery();
            break;
        case "location":
            animate_in($("#page_location"));
            set_hash('location');
            initMap();
            part_gallery();
            break;
        case "splash":
            animate_in($("#page_splash"));
            set_hash('splash');
            part_gallery();
            break;
        case "gallery":
            open_photo();
            set_hash('gallery');
            break;
        case "games":
            animate_in($("#page_games"));
            set_hash('games');
            setTimeout('instantiate_ios()', 100);
            hide_gallery();
            break;
        case "food":
            animate_in($("#page_food"));
            set_hash('food');
            hide_gallery();    
            break;
        case "store":
            window.location = 'http://shop.snakesandlattes.com';
            break;
        
    }
    
    
    currentPage = nextPage;
    nextPage = null;
    
}

function instantiate_ios() {

    
    $("#list1").ioslist();
    
    $(".abc_index li").each(function(obj){
         
       var text = $(this).text();

    
       var header =  $("#header_" + text);
        
       if(header.length >= 1){
            $(this).attr('rel','1');
       } else {
            $(this).attr('rel','0');
       }
    });
    
}


function animate_in($page) {
    
    easing = 'easeOutQuad';
    
    $page.css('margin-top', '-500px');
    
    $page.css('opacity', 0);
    $page.css('display', 'block');
    
    $page.animate({
        'opacity': 1,
        'margin-top': 0
        
    }, 750, easing);
    
    
    
    
    
}

function animate_out($page){
    
    $page.fadeOut(500);
    
    
}



function open_menu() {
    
    $(".menu").animate({
        
        width: hover_menu_width
        
        }, 120, function(){
            
    });
    
    $(".menu_item.main").fadeTo(300, .7);
    $(".menu_item.sub").slideDown(100);
     
}


function close_menu() {
    
    
    /*
    $(".menu").animate({
        
        width: starting_menu_width
        
        }, 120, function(){
            
    });
    
    
    $(".menu_item.main").fadeTo(300, 1);
    $(".menu_item.sub").slideUp(100);
    */
    
}



function photo_slider_init(){
    
    
    num_photos = $photos.length;
    
    $(".photo").width(window_width);
    $(".photo").height(500);
    
    $(".color_photo").width(window_width);
    $(".color_photo").height(500);
    
    $slider.width(window_width * num_photos);
 
    var i = 0;
    
    $photos.each(function(){
        i++;
        var l = (window_width * i) + 'px';
        $(this).css('left', l);
        
    });
    
    setTimeout('next_pic()', 1000);
    
    t = setInterval('next_pic()', 5000);
    
}


function next_pic() {
    
    
    if(allow_photo_slide){
        
        var current_left = parseInt($slider.css('left').replace(/[^-\d\.]/g, ''));
        var new_left = current_left - window_width;
        var delta = 700;
      
        var next_photo = current_photo + 1;
  
        if(next_photo > num_photos){
            new_left = 0 - window_width;
            delta = 1500;
            next_photo = 1;
        }
    
    
        easing = get_random_ease();
        
        $slider.animate({
            
            left: new_left + 'px'
            
            }, delta, 'easeInOutQuad', function(){
                
                current_photo = next_photo;
                
        });
    
    } 
    
}




function prev_pic() {
    
    if(allow_photo_slide){
        
        var current_left = parseInt($slider.css('left').replace(/[^-\d\.]/g, ''));
        var new_left = current_left + window_width;
        var delta = 700;
        
        var next_photo = current_photo - 1;
               
        if(next_photo <= 0){
          
            new_left = 0 - (num_photos * window_width);
            delta = 1500;
            next_photo = num_photos;
        }
       
        easing = get_random_ease();
        
        $slider.animate({
            
            left: new_left + 'px'
            
            }, delta, 'easeInOutQuad', function(){
                
                current_photo = next_photo;
                
        });
    
    } 
    
}


function submit_contact_form() {
    
    var datastring = 'name=' + $("#contact_name").val() + '&email=' + $("#contact_email").val() + '&reason=' + $("#contact_reason").val() + '&message=' + $("#contact_message").val() + "&phone=" + $("#contact_phone").val(); 
    
    $.ajax({
        url: 'ajax_contact.php',
        type: 'POST',
        data: datastring,
        success: function(d) {
            
            
         $(".contact_right").fadeOut(300, function(){
          
          $(".contact_right").css('font-size', '13px');
          $(".contact_right").html(d);
          $(".contact_right").fadeIn(300);
            
         })
           
            

        },
        error: function(d) {
            
            alert('Oops, something went wrong. Please try again!');

        }
    });
    
    
    
}

/* Helpers */

function set_hash(h){
    
    hash = h;
    window.location.hash = null;
    window.location.hash = h;
    
}

function isIE() {
  return /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent);
}


function isAndroid() {
    
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    

}


function isIphone()
{
   if (uagent.search("iphone") > -1)
      return true;
   else
      return false;
}


function isIpod()
{
   if (uagent.search("ipod") > -1)
      return true;
   else
      return false;
}


function isIos(){
    if (isIphone()) {
       return true;
    }
    else if (isIpod()) {
       return true;
    } else {
       return false;
    }
}


function isMobile(){
    
    if(isAndroid() || isIphone()){
        return true;
    }
    
    return false;
}



function get_random_ease(){
    
    var a = new Array('easeInOutQuad','easeOutSine','easeInOutExpo','easeOutElastic','easeOutBack','easeOutBounce'); 
    
    var rand = Math.round(Math.random() * a.length);
    
    return a[rand];
}





