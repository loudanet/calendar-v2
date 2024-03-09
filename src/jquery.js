$(() => {
    $("tr").on("mouseenter", function() {
        let lastCell = $(this).children("td").last()
        let text = lastCell.text();
        if (text.match(/^W/)) {
            lastCell.addClass("win");
        } else if (text.match(/^D/)) {
            lastCell.addClass("draw");
        } else {
            lastCell.addClass("loss");
        }
    }).on("mouseleave", function() {
        $(this).children("td").last().removeClass("win draw loss");
    })

    $("tr").on("mouseenter", function() {
        $(this).children("td").each(function(index, element) {
            if (index == 2) {
                if ($(element).text() == "H") {
                    $("#info").text("At Anfield! Yay!")
                } else {
                    $("#info").text("Not at Anfield! Yikes!")
                }
            }
            $("#info").show();
        })
    }).on("mouseleave", function() {
        $("#info").hide();
    })
});

document.addEventListener("mousemove", function(e) {
    $("#info").css("top", `${e.pageY + 10}px`);
    $("#info").css("left", `${e.pageX + 10}px`);
});
