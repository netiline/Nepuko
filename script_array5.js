let num = new Array();

function init(){ // 초기화
    // 중복없이 랜덤값 넣기
    num.push(Math.floor(Math.random()*10)+1);
    for (var i=1; i<=3; i++){
        var temp = Math.floor(Math.random()*10+1);
        if(num.indexOf(temp) == -1){ // num 배열 안에 들어간 temp의 값이 없다 == 중복되지 않는다
                                     // indexOf 갖고 놀기
            num.push(temp);
        }else{ // 늘어났던 i 를 다시 줄이면 해당 기회에 머물게 됨
            i--;
        }
    }
}

let ran = new Array();

function go(){
    ran.push(Math.floor(Math.random()*8));
    for(var i=1; i<=7; i++){
        var temp = Math.floor(Math.random()*8);
        if(ran.indexOf(temp) == -1){
            ran.push(temp);
        }else{
            i--;
        }
    }
}


function start(){
    init();
    go();
    let pic = document.getElementsByClassName("picture");
    for(var i=0; i<pic.length; i++){
        // pic[i].addEventListener("click", same_search); // pic[i] => pic의 i번 인덱스
        pic[ran[i]].innerHTML=num[i%4]; 
        // 8개의 칸에 4개의 숫자를 두 번 표현하기 위한 i%4 (계산식이 들어간 index 표현) *중요
    }
}