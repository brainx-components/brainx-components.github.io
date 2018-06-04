// Custom JS
$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, .container-jumbo .description a[href='#projects'], footer a[href='#myPage']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 55
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                //window.location.hash = hash;
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

// Navbar close by clicking outside
$(document).click(function (e) {
    if (!$(e.target).is('.navbar-nav')) {
        $('.collapse').collapse('hide');
    }
});

// Get Repos from Brainx Components

function appendUser(user, i, length) {
    if (length % 3 == 1) {
        if (i == length - 1) {
            $("#memberList").append(
                "<div class='col-md-offset-4 col-md-4 col-sm-6 member-col'>" +
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
        else 
        {
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
    }
    else if (length % 3 == 2) {
        if (i == length - 2) {
            $("#memberList").append(
                "<div class='col-md-offset-2 col-md-4 col-sm-6 member-col'>" +
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
        else {
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
    }
    else 
    {
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
}

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/brainx-components/repos",
        dataType: "json",
        success: function (result) {
            for (i in result) {
                if(result.length % 3 == 1)
                {
                    if (i == result.length-1) {
                        $("#repo_list").append(
                            "<div class='col-md-offset-4 col-md-4 col-sm-6'><div class='panel'><div class='panel-heading'><a href='" + result[i].html_url + "' target='_blank'>" +
                            result[i].name + "</a></div> <div class='panel-body'>" + (result[i].description == null ? "" : result[i].description) + "</div></div></div>"
                        );    
                    }
                    else
                    {
                        $("#repo_list").append(
                            "<div class='col-md-4 col-sm-6'><div class='panel'><div class='panel-heading'><a href='" + result[i].html_url + "' target='_blank'>" +
                            result[i].name + "</a></div> <div class='panel-body'>" + (result[i].description == null ? "" : result[i].description) + "</div></div></div>"
                        );
                    }
                }
                else if (result.length % 3 == 2) {
                    if (i == result.length - 2) {
                        $("#repo_list").append(
                            "<div class='col-md-offset-2 col-md-4 col-sm-6'><div class='panel'><div class='panel-heading'><a href='" + result[i].html_url + "' target='_blank'>" +
                            result[i].name + "</a></div> <div class='panel-body'>" + (result[i].description == null ? "" : result[i].description) + "</div></div></div>"
                        );
                    }
                    else {
                        $("#repo_list").append(
                            "<div class='col-md-4 col-sm-6'><div class='panel'><div class='panel-heading'><a href='" + result[i].html_url + "' target='_blank'>" +
                            result[i].name + "</a></div> <div class='panel-body'>" + (result[i].description == null ? "" : result[i].description) + "</div></div></div>"
                        );
                    }
                }
                else {
                    $("#repo_list").append(
                        "<div class='col-md-4 col-sm-6'><div class='panel'><div class='panel-heading'><a href='" + result[i].html_url + "' target='_blank'>" +
                        result[i].name + "</a></div> <div class='panel-body'>" + (result[i].description == null ? "" : result[i].description) + "</div></div></div>"
                    );
                }
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
                $.ajax({
                    type: "GET",
                    url: result[i].url,
                    dataType: "json",
                    success: function (innerResult) {
                        appendUser(innerResult, i, result.length);
                    }
                });
                console.log("i: " + i);
            }
            console.log(result);
        }
    });
});