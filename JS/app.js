$(document).ready(() => {
  $(".fa-bars").click(() => {
    $(".main-navigation").slideToggle();
  });

  VanillaTilt.init(document.querySelectorAll(".box-1"), {
    max: 30,
    speed: 400,
    transition: true,
  });
});
