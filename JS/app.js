$(document).ready(() => {
  $(".fa-bars").click(() => {
    $(".main-navigation").slideToggle();
  });

  $(".hello").click(() => {
    $(".proj-description p").slideToggle();
  });
});
