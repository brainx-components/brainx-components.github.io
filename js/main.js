// Custom JS
$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})

// Get Repos from Brainx Components

function appendUser(user) {
    $("#memberList").append(
        "<div class='col-md-4 col-sm-6 member-col'>" +
        "<div class='row' >" +
        "<img class='img-circle' width='175px' src='" + user.avatar_url + "'>" +
        "</div>" +
        "<div class='row'>" +
        "<a href='" + user.html_url + "' target='_blank'><h2>" + user.name + "</h2></a>" +
            "<p>" + (user.bio == null ? "" : user.bio) + "</p>" +
        "</div>" +
        "</div>"
    );
}

// function getUser(user_url) {
//     $.ajax({
//         type: "GET",
//         url: user_url,
//         dataType: "json",
//         success: function (result) {
//             return result;
//         }
//     });
// };

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/brainx-components/repos",
        dataType: "json",
        success: function (result) {
            for (i in result) {
                $("#repo_list").append(
                    "<div class='col-md-4 col-sm-6 panel'><div class='panel-heading'><a href='" + result[i].html_url + "' target='_blank'>" +
                    result[i].name + "</a></div> <div class='panel-body'>" + result[i].description + "</div></div>"
                );
                console.log("i: " + i);
            }
            console.log(result);
            $("#repo_count").append("Total Repos: " + result.length);
        }
    });

    $.ajax({
        type: "GET",
        url: "https://api.github.com/orgs/brainx-components/public_members",
        dataType: "json",
        success: function (result) {
            for (i in result) {
                // var user = getUser(result[i].url);
                $.ajax({
                    type: "GET",
                    url: result[i].url,
                    dataType: "json",
                    success: function (innerResult) {
                        appendUser(innerResult);
                    }});
                console.log("i: " + i);
            }
            console.log(result);
            //$("#repo_count").append("Total Repos: " + result.length);
        }
    });
});

//Type Effect
// var i = 0;
// var txt = 'brainx-components.github.io';
// var speed = 50;
// if (i < txt.length) {
//     document.getElementById("type-effect").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
// }