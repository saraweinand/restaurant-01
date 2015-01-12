$(function() {
 
    // grab the initial top offset of the navigation 
    var sticky_navigation_offset_top = $('#stickynav').offset().top;
     
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickynav = function(){
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top
         
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > sticky_navigation_offset_top) { 
            $('#stickynav').css({ 'position': 'fixed', 'top':0, 'left':0 });
        } else {
            $('#stickynav').css({ 'position': 'relative' }); 
        }   
    };
     
    // run our function on load
    stickynav();
     
    // and run it again every time you scroll
    $(window).scroll(function() {
         stickynav();
    });
 
});



//http://www.backslash.gr/content/blog/webdevelopment/6-navigation-menu-that-stays-on-top-with-jquery