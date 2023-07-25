let ice_box =""; // 유저와 컴퓨터가 낸 숫자가 들어갈 곳

let out="";

let last_split = 0;

let com_last=0;


window.onload=function(){
    let active = document.getElementById("active");
    active.addEventListener("click", process)
    let input = document.getElementById("user");
    input.addEventListener("keypress", function(e){
        if(e.keyCode==13)process();
    })
}


function process(){
    let input = document.getElementById("user").value;
    ice_box=input;

    if(input===""){
        alert("뭐라도 입력해주세요.")
        document.getElementById("user").value="";
        input.value.focus()
        return;
    }

    if(input<com_last){
        alert("컴퓨터의 마지막 숫자보다 더 큰 숫자를 입력하세요!")
        document.getElementById("user").value="";
        input.value.focus()
        return;
    }

    let split = new Array();
    split = ice_box.split(","); // 입력값에서 ,뺀 걸 split에 저장함

    if(split[0]!=(com_last+1)){
        alert("컴퓨터 바로 다음 숫자부터 입력하세요!")
        document.getElementById("user").value="";
        input.value.focus()
        return;
    }

    if(split.length>=4){
        alert("최대 세 개까지만 입력 가능합니다!")
        document.getElementById("user").value="";
        input.value.focus()
        return;
    }

    


    last_split = split[split.length-1]; // 숫자가 1의 자리일 때, 내가 낸 숫자의 마지막 숫자 자리가
                                        // last_split에 저장됨
    


    let fight = document.getElementById("fight_box");

    out+="내가 낸 숫자 = "+input+"<br>";


    if(last_split>=31){
        alert("당신의 패배입니다!");
        document.getElementById("user").value="";
        input.focus()
        last_split=0;
        return;
    }


    // 컴퓨터 차례
    var temp = Math.floor(Math.random()*2)+1; // 숫자를 몇 번 낼 것인지 랜덤
    for (var i=0; i<=temp; i++){
        last_split++;;
        out+="컴퓨터가 낸 숫자 : " + last_split + "<br>";
    }com_last=last_split;



    if(com_last>=31){
        alert("당신의 승리입니다!");
        document.getElementById("user").value="";
        input.focus()
        last_split=0;
        return;
    }

    fight.innerHTML=out;
    document.getElementById("user").value="";
}