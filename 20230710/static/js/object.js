window.onload=function(){

    var body = document.getElementsByTagName("body");
    // body[0].innerHTML="<div>오늘 비와?</div>";

    var node = document.createElement("div"); // 새로운 tag 만들기
    node.setAttribute("id","rain"); // 태그에 속성 부여
    node.addEventListener("click",function(){alert("선향 졸려?")}) 
    var text = document.createTextNode("오늘 비 많이 와?");
    node.appendChild(text); // 태그에 글씨넣기
    body[0].appendChild(node); // 만든 태그를 누구 밑에?
}