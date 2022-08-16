$(document).ready(function () {
  var stt = 0;
  var endImg = $("img.slide__item").last().attr("idx");
  $(".dots__item").click(function () {
    stt = $(this).attr("idx");

    $("img.slide__item").hide();
    $("img.slide__item").eq(stt).show();
    $(".dots__item").removeClass("active");
    $(".dots__item").eq(stt).addClass("active");
  });

  $("#next").click(function () {
    if (++stt > endImg) {
      stt = 0;
    }

    $("img.slide__item").hide();
    $("img.slide__item").eq(stt).show();
    $(".dots__item").removeClass("active");
    $(".dots__item").eq(stt).addClass("active");
    // stt = $(".dots__item.active").attr("idx");
  });

  setInterval(function () {
    $("#next").click();
  }, 3000);
});
