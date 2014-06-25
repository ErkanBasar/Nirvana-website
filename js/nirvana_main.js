
$(document).ready(function() {
  

                                      <!-- back to the top -->

  $('.go_top a').click(function(){
      $.scrollTo(this.hash, 1500);
      return false;
  });
  $(window).scroll(function () {
      if ($(window).scrollTop() >= 270) {
           $('.totop').fadeIn(300);
      }
      if ($(window).scrollTop() <= 270) {
           $('.totop').fadeOut(300);
      }
  });


                                       <!-- got to the bottom -->

  $('.go_bot a').click(function(){
      $.scrollTo(this.hash, 1500);
      return false;
  });
  $(window).scroll(function () {
      if ($(window).scrollTop() + $(window).height() < $(document).height() - 300) {
           $('.tobot').fadeIn(300);
      }
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
           $('.tobot').fadeOut(300);
      }
  });


                                 <!-- go to the content list and contents -->

  $('#content_list a').click(function(){
      $.scrollTo(this.hash, 1200);
      return false;
  });
  $('#go_content a').click(function(){
      $.scrollTo(this.hash, 1200);
      return false;
  });
  $(window).scroll(function () {
      if ($(window).scrollTop() >= 800) {
           $('#go_content').fadeIn(300);
      }
      if ($(window).scrollTop() <= 800) {
           $('#go_content').fadeOut(300);
      }
  });

                                        <!-- slider -->        
 
   $('#slides').slidesjs({
        width: 940,
        height: 528,
        play: {
          active: true,
          auto: true,
          interval: 3000,
          swap: true
        }
   });

                                       <!-- toolTip -->

   $('.followerTip').aToolTip();


                                       <!-- search -->
    
   $('#tipue_search_input').tipuesearch({
          'show': 5
   });



});

