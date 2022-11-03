$(document).ready(function () {
  $(".read-more").click(function () {
    $(".more-p").slideDown(900);
    $(".read-more").hide();
    $(".read-less").show();
  });

  $(".read-less").click(function () {
    $(".more-p").slideUp(900);
    $(".read-more").show();
    $(".read-less").hide();
  });

  $(".menu, .menu2").click(function () {
    $(".menu-content,.menu-contain,#bars2").fadeIn();
    $(".booking,.name p,.voucher,#bars2").css("z-index", "10000");
    $(".name i,.name sup").css("color", "hotpink");
    $("#bar1").css(bar1);
    $("#bar2").css(bar2);
    $("#bar3").css(bar3);
    $("#bars2").css(bars2);

    $("#bars").hide();
  });

  $("#bars2").click(function () {
    $(".menu-content,.menu-contain,#bars2").fadeOut();
    $(".name i,.name sup").css("color", "rgb(243, 166, 204)");
    $("#bars").show();
  });
});

var bar1 = {
  animationName: "bar1",
  animationDuration: ".8s",
  animationFillMode: "forwards",
};
var bar2 = {
  animationName: "bar2",
  animationDuration: ".8s",
  animationFillMode: "forwards",
};
var bar3 = {
  animationName: "bar3",
  animationDuration: ".8s",
  animationFillMode: "forwards",
};

var bars2 = {
  animationName: "bars2",
  animationDuration: ".8s",
  animationFillMode: "forwards",
};

//--------------------------------------------------------------------------------------------------------------------------------------//

const navbarDisplay = document.querySelector(".navbar-display");
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 475) {
    $(".navbar-display").show();
  }
  if (currentScroll < 475) {
    $(".navbar-display").hide();
  }

  lastScroll = currentScroll;
});
