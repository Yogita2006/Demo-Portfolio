$(document).ready(function () {
      $("#main-nav a").click(function (e) {
        e.preventDefault();
        $("section").removeClass("show");
        var target = $(this).attr("href");
        $(target).addClass("show");
      });

      new Typed(".type-effect", {
        strings: ["Full Stack Developer", "Data Scientist", "UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
});