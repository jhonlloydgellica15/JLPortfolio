$(document).ready(() => {
  $(".fa-bars").click(() => {
    $(".main-navigation").slideToggle();
  });

  $(".hello").click(() => {
    $(".proj-description p").slideToggle();
  });

  const toTop = $(".to-top");
  console.log(toTop);
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) toTop.addClass("active");
    else toTop.removeClass("active");
  });
});
