
// padStart() - 문자열의 시작을 다른 문자열로 채워준다.

window.onload=function(){
    setInterval(function(){
        var dt = document.querySelector("#date_time");
        const now = new Date(); // 현재 날짜와 시간 가져오는 함수
        const year = now.getFullYear();
        const month = String((now.getMonth()+1)).padStart(2,"0");
        const date = String(now.getDate()).padStart(2,"0");
        const hour = String(now.getHours()).padStart(2,"0");
        const minute = String(now.getMinutes()).padStart(2,"0");
        const sec = String(now.getSeconds()).padStart(2,"0");
        dt.innerHTML=`${year}.${month}.${date} ${hour}:${minute}:${sec}`; // ~이 있는 그 ` 를 넣어야지 작동함.
        // dt.innerHTML=year+"."+month+"."+date+" "+hour+":"+minute+":"+sec;
        // 기본형식: 요일 월 일 년 시간 표준시(영어임)
    },1000);
}