$(function() {
    var isMenuShown = false; // 메뉴 상태를 추적하는 변수

    // 전체 메뉴를 왼쪽에서 오른쪽으로 슬라이드하여 보여준다.
    $("#menu_icon").click(function() {
        if (!isMenuShown) {
            $("#menu_list").css({ 'display': 'block' });
            $("#menu_list").css({ 'left': '-100%'});
            $("#menu_list").animate({width : '100%' });
            $("#menu_list").animate({ left: 0 }, { duration: 700 });
        } else {
            // 전체 메뉴를 오른쪽에서 왼쪽으로 슬라이드하여 숨긴다.
            $("#menu_list").animate({ left: '-100%' }, {
                duration: 700,
                complete: function() {
                    $("#menu_list").css({ 'display': 'none' });
                }
            });
        }

        isMenuShown = !isMenuShown; // 메뉴 상태 반전
    });
});