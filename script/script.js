$(document).ready(function () {
    $("#defaultCountdown").countdowntimer({
        dateAndTime: "2017/10/02 11:00:00", //end date
        size: "xl"
    });

    // Instantiate the Bootstrap carousel
    $('.multi-item-carousel').carousel({
        interval: false
    });

    // for every slide in carousel, copy the next slide's item in the slide.
    // Do the same for the next, next item.
    $('.multi-item-carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
     
    /*$(window).resize(function(){*/
        if ($(window).width() <= 480){	
            $("#defaultCountdown").countdowntimer({
                dateAndTime: "2017/10/02 11:00:00",
                size: "xs"
            });
        } else  if ($(window).width() <= 767){	
            $("#defaultCountdown").countdowntimer({
                dateAndTime: "2017/10/02 11:00:00",
                size: "sm"
            });
        } else if ($(window).width() <= 1024){	
            $("#defaultCountdown").countdowntimer({
                dateAndTime: "2017/10/02 11:00:00",
                size: "md"
            });
        } else {
            $("#defaultCountdown").countdowntimer({
                dateAndTime: "2017/10/02 11:00:00",
                size: "xl"
            });
        }	
   /* });*/
});