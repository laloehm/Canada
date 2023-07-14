$("a.smooth").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body")
        .stop()
        .animate(
            {
                scrollTop: $(anchor).offset().top - 50 + "px",
            },
            1000
        );
});