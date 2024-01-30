//Bootstrap tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
  $(window).scroll(function(){
    const headerOpacity = 1 - $(window).scrollTop() / $('.intro').height();

    // the indicator elements are red when the header/footer (respectively) are set to display:none
    // and green when they are set to display:block

    // header:
    $("#indicator-header").text("Header opacity: " + headerOpacity.toFixed(2));
    if(headerOpacity < 0) {
      $(".intro").css("display", "none");
      $("#indicator-header").css("background", "rgba(255,100,100,.5)");
    } else {
      $(".intro").css("display", "block");
      $(".intro").css("opacity", headerOpacity);
      $("#indicator-header").css("background", "rgba(100,255,100,.5)");
    }


    // footer:
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    $("#indicator-footer").text("To bottom: " + ~~scrollBottom);

    if(scrollBottom > $(".outro").height()) {
      $(".outro").css("display", "none");
      $("#indicator-footer").css("background", "rgba(255,100,100,.5)");
    } else {
      $(".outro").css("display", "block");
      $("#indicator-footer").css("background", "rgba(100,255,100,.5)");
      const footerOpacity = 1 - scrollBottom/$(".outro").height();
    $(".outro").css("opacity", footerOpacity);
    }

  });
});

// Animage intro text
const {children: titles} = document.querySelector(".animate-text");
const txtsLen = titles.length;
let index = 0;
const textInTimer = 3000;
const textOutTimer = 2800;

function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    titles[i].classList.remove("text-in", "text-out");
  }
  titles[index].classList.add("text-in");

  setTimeout(function () {
    titles[index].classList.add("text-out");
  }, textOutTimer);

  setTimeout(function () {
    if (index == txtsLen - 1) {
      index = 0;
    } else {
      index++;
    }
    animateText();
  }, textInTimer);
}

window.onload = animateText;
