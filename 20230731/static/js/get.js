// append -  선택한 태그의 마지막에 추가
// prepend - 선택한 태그의 처음에 추가
// before - 선택한 태그의 앞쪽에 추가
// after = 선택한 태그의 뒤쪽에 추가
let ri=1;

$(function(){
    $("#setImage").click(function(){
        var data = $("#imageName").val();
        $("#gallery").append("<div class='img_box'><img src='"+data+"'></div>");
    });

    $("#3n").click(function(){
        $("#gallery").removeClass("grid-4n");
        $("#gallery").addClass("grid-3n");
    })
    $("#4n").click(function(){
        $("#gallery").removeClass("grid-3n");
        $("#gallery").addClass("grid-4n");
    })
    // $("#3n").click(function(){
    //    $("#gallery").css("grid-template-columns","repeat(3,1fr)")
    // })
    // $("#4n").click(function(){
    //    $("#gallery").css("grid-template-columns","repeat(4,1fr)")
    // })
    $("#slide").click(function(){
        $("#gallery").removeClass("grid-4n");
        $("#gallery").removeClass("grid-3n");
        $("#gallery").removeClass("slide-off");
        $("#gallery").addClass("slide-active");
        $("#slide_box").append($(".img_box"));
        var len = $(".img_box").length;
        $("#slide_box").css("width",len*1200+"px");
    })
});