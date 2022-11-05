// Fade in
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function () {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight() / 2;
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        $(this).addClass("faded-in")
      } else { //object goes out of view (scrolling up)
        $(this).removeClass("faded-in")
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

// Fun
$(document).ready(function(){
  $('.fun').each(function () {
    var letters = $(this).text();
    console.log(letters)
    var nHTML = '';
    for(var letter of letters) {
      if (letter == ' ') {
        nHTML += "<span class='fun-letter'>&nbsp;</span>";
      } else {
        nHTML += "<span class='fun-letter'>"+letter+"</span>";
      }
    }
    $(this).html(nHTML);
  })
})
