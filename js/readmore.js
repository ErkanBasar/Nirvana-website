
$(document).ready(function() {

  $('.hidden').hide()
  $('.open').click(function() {  
    elem = $(this).parent().next()
    elem.slideDown(800)
    $(this).fadeOut(500)
  })
  $('.close').click(function() {
    $(this).parent().slideUp(800, function() {    
         $(this).parents().find("p span.open").fadeIn(0)
      }) 
  })

});

