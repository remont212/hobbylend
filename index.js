$("#nav-click").on("click", () => {
    $(".nav-modal").animate({
        "top":"0"
    }, 500)
})
$(".close").on("click", () => {
    $(".nav-modal").animate({
        "top":"-700px"
    }, 500)
})
$(document).on("scroll", () => {
    $("header").addClass("fixed")
})