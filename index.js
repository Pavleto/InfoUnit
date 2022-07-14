// CHANGE NAVBAR CLASS TO SCROLLED

$(function() {
  $(document).scroll(function() {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

// END




//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// END BACK TO TOP BUTTON


// FILTER GALLERY

$('.filter-button').on('click', (e) => {
  const filter = $(e.target).attr('data-filter');
  console.log(filter);
  const items = $('.item-content').parent();
  for (item of items) {
    if (filter == '') {

      $(item).addClass('animated zoomIn faster');
      $(item).parent().addClass('animated zoomIn faster');
      $(item).removeClass('d-none');
      $(item).parent().removeClass('d-none');


      console.log('x');
    } else if ($(item).attr('data-category') == filter) {
      $(item).addClass('animated zoomIn faster');
      $(item).parent().addClass('animated zoomIn faster');
      $(item).removeClass('d-none');
      $(item).parent().removeClass('d-none');
    } else {
      $(item).addClass('d-none');
      $(item).parent().addClass('d-none');
      $(item).removeClass('animated zoomIn faster');
      $(item).parent().removeClass('animated zoomIn faster');
    }
  }
});

// navbar toggler closes after click link
$('.navbar-collapse a').click(function(){
           $(".navbar-collapse").collapse('hide');
       });
// navbar toggler closes after esc key press
       $(document).on("keyup", function(e){
          if(e.which == 27){
             if($('.navbar-collapse').is(":visible")){
                 $('.navbar-collapse').collapse('hide');
             }
         }
       });

// MORE OR LESS TEXT AT CARDS

$(".utility-a").click(function() {
  if ( $(this).closest("div").find(".showclass").is(':visible')) {
    $(this).text("more");
    $(this).closest(".card").find(".showclass").hide();
    $(this).closest(".card").find(".hideclass").show();
  } else {
    $(this).text("less");
    $(this).closest(".card").find(".hideclass").hide();
    $(this).closest(".card").find(".showclass").show();
  }
});
