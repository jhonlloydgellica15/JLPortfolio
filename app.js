$(document).ready(() => {
  const hamburger = $("#nav");
  $(".fa-bars").click(() => {
    $(".nav-container").slideToggle();
  });
});
