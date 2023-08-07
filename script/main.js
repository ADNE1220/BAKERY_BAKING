$(function(){

    //메인메뉴
    $(".menu li").hover(function(){
        var m2= $(this).find("a").attr("m2");
        console.log("m2 :",m2)
        $(this).find("a").text(m2)
    },function(){
        var m1= $(this).find("a").attr("m1");
        console.log("m1 :",m1)
        $(this).find("a").text(m1)
    })//menu hover

    //메인메뉴 모바일
    $(".m_sub_nav").hide()
    $(".menu_toggle").hover(function(){
        $(this).find(".m_sub_nav").stop().slideDown();
    },function(){
        $(".m_sub_nav").stop().slideUp();
    })//

    //슬라이드 이미지
    /* $(".move li").hide()
    $(".move li").eq(0).show() */
    
    setInterval( left_move , 4000)
    function left_move(){
        $(".move").animate({left: "-=1920px"},1000, function(){
            $(".move").append( $(".move li").eq(0))
            $(".move").css({left: "+=1920px"})
        })
    }//  .move

    setInterval( left_move , 4000)
    function left_move(){
        $(".move_m").animate({left: "-=750px"},1000, function(){
            $(".move_m").append( $(".move_m li").eq(0))
            $(".move_m").css({left: "+=750px"})
        })
    }// .move_m

    $(".heart").click(function(){
        $(this).toggleClass("on")
    })//

    //팝업
    $(".popup").show();
    $(".logo").click(function(){
        $(".popup").show();
    })
    $(".close").click(function(){
        $(".popup").hide();
    })//popup show hide


    //이벤트 탭off
    $("a").click(function(e){
        e.preventDefault();
    })//
})

//퀵메뉴
$(window).scroll(function(){
    var top = $(this).scrollTop();
    console.log("top: ", top, "px")
    $(".quick").css({top:top })
})