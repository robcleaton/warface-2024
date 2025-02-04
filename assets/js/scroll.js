$(document).ready(function () {
  // Bootstrap tooltip
  $('[data-bs-toggle="tooltip"]').tooltip();

  $(window).scroll(function () {
    const intro = $(".intro");
    const outro = $(".outro");
    const headerIndicator = $("#indicator-header");
    const footerIndicator = $("#indicator-footer");

    const scrollTop = $(window).scrollTop();
    const headerOpacity = 1 - scrollTop / intro.height();

    // Header opacity handling
    headerIndicator.text("Header opacity: " + headerOpacity.toFixed(2));

    if (headerOpacity < 0) {
      intro.hide();
      headerIndicator.css("background", "rgba(255,100,100,.5)");
    } else {
      intro.show().css("opacity", headerOpacity);
      headerIndicator.css("background", "rgba(100,255,100,.5)");
    }

    // Footer opacity handling
    const scrollBottom = $(document).height() - $(window).height() - scrollTop;
    footerIndicator.text("To bottom: " + ~~scrollBottom);

    if (scrollBottom > outro.height()) {
      outro.hide();
      footerIndicator.css("background", "rgba(255,100,100,.5)");
    } else {
      outro.show();
      footerIndicator.css("background", "rgba(100,255,100,.5)");
      const footerOpacity = 1 - scrollBottom / outro.height();
      outro.css("opacity", footerOpacity);
    }
  });

  // Animate intro text
  const titles = document.querySelectorAll(".animate-text > *");
  if (titles.length > 0) {
    let index = 0;
    const textInTimer = 3000;
    const textOutTimer = 2800;

    function animateIntroText() {
      titles.forEach(title => title.classList.remove("text-in", "text-out"));

      titles[index].classList.add("text-in");

      setTimeout(() => {
        titles[index].classList.add("text-out");
      }, textOutTimer);

      setTimeout(() => {
        index = (index + 1) % titles.length;
        animateIntroText();
      }, textInTimer);
    }

    animateIntroText();
  }
});

// Animate text flip
window.onload = function () {
  const flipContainer = document.querySelector(".text-flip");
  if (flipContainer) {
    const titles = flipContainer.children;
    if (titles.length > 0) {
      let index = 0;
      const textInTimer = 1000;
      const textOutTimer = 1000;

      function animateFlipText() {
        for (let i = 0; i < titles.length; i++) {
          titles[i].classList.remove("text-in-2", "text-out-2");
        }

        titles[index].classList.add("text-in-2");

        setTimeout(() => {
          titles[index].classList.add("text-out-2");
        }, textOutTimer);

        setTimeout(() => {
          index = (index + 1) % titles.length;
          animateFlipText();
        }, textInTimer);
      }

      animateFlipText();
    }
  }
};
