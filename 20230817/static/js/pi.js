$(function(){
    $(".labels").click(function(){
        if($(this).hasClass("choice")) return;
        $(".labels").toggleClass("choice");
        $(".input_wrap").toggle();
    });
});