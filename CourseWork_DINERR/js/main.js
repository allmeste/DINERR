// открыть бургер-меню
$(function () {
  $(".menu-open").click(function () {
    $(".menu").toggleClass("show-menu");
  });
});
$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger, .header_menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});


//вернуться на верх страницы
$(function () {
  $(".rect12").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
//перейти вниз страницы
$(function () {
  $("#rect1").click(function () {
    $("html, body").animate(
      { scrollTop: $(document).height() - $(window).height() },
      900
    );
    return false;
  });
});
//xml
$(document).ready(function () {
  var text, parser, xmlDoc;

  text =
    "<info>" +
    "<text>Потапчик Алла Александровна, 9ДЭВИ, 2021</text>" +
    "</info>";

  parser = new DOMParser();
  xmlDoc = parser.parseFromString(text, "text/xml");

  document.getElementById("information").innerHTML =
    xmlDoc.getElementsByTagName("text")[0].childNodes[0].nodeValue;
});
