$(document).ready(function(){

    scrchk();
    
    

    $(".accbtn").click(function(event){
        event.preventDefault();
        $(this).parent("a").parent(".mmain").siblings(".mmain").children(".msub").stop().slideUp();
        $(".accbtn").not($(this)).removeClass("rot");

        if($(this).parent("a").next(".msub").is(":visible")){
           $(this).removeClass("rot");
        }
        else
        {
            $(this).addClass("rot");
        }
        $(this).parent("a").next(".msub").stop().slideToggle();
    });

    // $(".accbtn").on("click", function(event){
    //     event.preventDefault();
    //     // event.stopPropagation();

    //     var idx = $(".accbtn").index(this);
   
    //     $(".mmain").eq(idx).siblings().find(".accbtn").removeClass("rot");
    //     $(".mmain").eq(idx).find(".accbtn").toggleClass("rot");

    //     $(".mmain").eq(idx).siblings().find(".msub").stop().slideUp();
    //     $(".mmain").eq(idx).find(".msub").stop().slideToggle();
    // });


    function scrchk(){
        var scr = $(document).scrollTop();
        if(scr>0) {
            $("header").addClass("shadow");
        }
        else
        {
            $("header").removeClass("shadow");
        }

    }


    $(window).scroll(function(){
        scrchk();
    });

    $("#ham").click(function(){
        $("#mmenu").stop().animate({right:0});
        $("#mback").stop().fadeIn();

        $("html, body").css({overflow:"hidden"});
    });

    $("#mclose").click(function(){
        $("#mmenu").stop().animate({right:-290});
        $("#mback").stop().fadeOut();

        $("html, body").css({overflow:"auto"});

    });

    $("#mback").click(function(){
        $("#mclose").trigger("click");
    });



    $('.single-item').slick();


    $("#famsite").change(function(){
        var addr = $(this).val();
        if(addr != "")
        {
            //새창 window
            //window.open(addr, "aaa")
            //페이지 이동 location
            //location.href = addr;
            location.assign
        }
    });

});
