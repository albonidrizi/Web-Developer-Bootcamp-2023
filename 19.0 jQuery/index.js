var as = $("h1").text();

console.log(as);

$("h1").click(function (e) {
  e.preventDefault();
  $("h1").text("Albon Idrizi ");
  $("h1").css("color", "red");
  $("h1").addClass("big-title");
});

$("button").keypress(function (e) {});

$("img").remove();

$("h1").append( "<button>Halo</button>");

$("h1").hide();

$("button").click(function () { 
 $("h1").slideUp().slideDown().animate({opacity:0.5});
});