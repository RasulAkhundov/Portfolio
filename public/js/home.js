$(document).ready(function() {

    //Loading PAge Animation
    $("#page-open-btn").click(function() {
        $("html, body").css('overflow', 'visible');
        $(this).addClass('loading-button-animation');

        setTimeout(function() {
            $("#loading-wrapper").addClass('loading-page-animation');
        }, 2000);

        setTimeout(function() {
            $("#loading-cover-wrapper").addClass('loading-cover-animation');
        }, 2500);
    });

    //MENU OPEN CLOSING FUNCTION 
    let toggle = false;
    $("#menu-toggle").click(function(e) {

        if(toggle === false) {
            $(".menu-section").css('display', 'flex');
            $("body").css("overflow-y", 'hidden');
            toggle = true;
            return;
        } else {
            $(".menu-section").css('display', 'none');
            $("body").css("overflow-y", 'visible');
            toggle = false;
            return
        }

    });

    //HEADER FIXED FUNCTION

    $(window).scroll(function() {
        let scrollY = window.scrollY;

        if(scrollY > 0) {
            $('#header-wrapper').addClass('header-wrapper-fixed');
        } else if(scrollY === 0) {
            $('#header-wrapper').removeClass('header-wrapper-fixed');
        }
    });

    //GETTING CURSOR POSITION 
    let circle = document.getElementById('cursor-pointer');
    const onMouseMove = (e) =>{
        circle.style.left = e.pageX + 'px';
        circle.style.top = e.pageY + 'px';
    }
    document.addEventListener('mousemove', onMouseMove);

    //PORTFOLIO BIGGEST IMAGE
    $(".portfolio-item").click(function() {
        let imageIndex = $(this).data('index');
        $("body").css("overflow-y", 'hidden');
        $('.portfolio-big-image').css('display', 'block')

        $("#portfolio-image").attr('src', `/assets/portfolio-${imageIndex}.png`);
        //GIVING NUMBER TO IMAGE NUMBER COUNTER
        $("#portfolio-number-counter").text(`${imageIndex} of 9`);

        ///PREVIOUS IMAGE
        $("#previous-image").click(function() {

            if(imageIndex > 1) {
                imageIndex -= 1;
                $("#portfolio-image").attr('src', `/assets/portfolio-${imageIndex}.png`);
            } else {
                imageIndex = 9;
                $("#portfolio-image").attr('src', `/assets/portfolio-${imageIndex}.png`);
            }
                //GIVING NUMBER TO IMAGE NUMBER COUNTER
            $("#portfolio-number-counter").text(`${imageIndex} of 9`);
        })
        ///NEXT IMAGE
        $("#next-image").click(function() {

            if(imageIndex < 9) {
                imageIndex += 1;
                $("#portfolio-image").attr('src', `/assets/portfolio-${imageIndex}.png`);
            } else {
                imageIndex = 1;
                $("#portfolio-image").attr('src', `/assets/portfolio-${imageIndex}.png`);
            }
                //GIVING NUMBER TO IMAGE NUMBER COUNTER
            $("#portfolio-number-counter").text(`${imageIndex} of 9`);
        })
    });

    //CLOSING PORTFOLIO IMAGE
    $("#close-portfolio-img").click(() => {
        $("body").css("overflow-y", 'visible');
        $('.portfolio-big-image').css('display', 'none');
    });

    //SENDING MESSAGE FROM MAIL
    // let formData = {};

    $("#send-message").click(async function() {
        $("#form-name").val("");
        $("#form-email").val("");
        $("#form-subject").val("");
        $("#form-message").val("");
    })

})