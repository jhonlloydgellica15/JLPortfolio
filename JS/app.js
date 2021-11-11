$(document).ready(() => {
  $(".splash").delay(2500).fadeOut("fast");

  $(".fa-bars").click(() => {
    $(".main-navigation").slideToggle();
  });

  const toTop = $(".to-top");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) toTop.addClass("active");
    else toTop.removeClass("active");
  });

  let navItems = $("nav ul > li a");
  let sections = $(".sections");

  window.onscroll = () => {
    let scrollHeight = window.pageYOffset;

    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop / 1.1 <= scrollHeight) {
        for (let j = 0; j < navItems.length; j++) {
          navItems[j].classList.remove("active");
        }

        navItems[i].classList.add("active");
      }
    }
  };

  class Navigate {
    static navigateElement(destination) {
      $(`${destination}`).click(function (e) {
        e.preventDefault();
        $("body,html").animate(
          {
            scrollTop: $($(this).attr("href")).offset().top,
          },
          1
        );
      });
    }
  }

  //Navigate all href buttons
  Navigate.navigateElement(".btn.more");
  Navigate.navigateElement(".hire-me");
  Navigate.navigateElement("nav ul li a");
  Navigate.navigateElement(".top");
});
