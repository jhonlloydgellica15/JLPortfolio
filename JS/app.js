$(document).ready(() => {
  $(".fa-bars").click(() => {
    $(".main-navigation").slideToggle();
  });

  const toTop = $(".to-top");
  console.log(toTop);
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
});
