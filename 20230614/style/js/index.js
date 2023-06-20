// func.js

//함수의 형태 4가지
// 입력과 출력이 없는 형태
// 입력은 있고 출력이 없는 형태
// 입력은 없고 출력만 있는 형태
// 입력과 출력이 있는 형태

// 함수에서 입력이라는 것은 함수의 내용이 실행되기
// 위해서 꼭 필요한값이 있다면 함수외부로부터 
// 값을 받는것을 입력 이라고 한다.
// 전문 용어로  인자 인수  ,  매개변수  라고 한다.

// 함수에서 출력은 함수에서 생성된 값을  다른함수나
// 다른 곳에 보내고자 할경우에 사용된다.
//  return 을 사용해서 밖으로 내보낸다.


function sum(a,b){
    // alert(a+b);
    var result = document.getElementById("sum_result");
    result.innerHTML= a+b;
}

// 웹에서 입력하는 모든 값은 전부 텍스트이다.
// input 태그에 입력한 값을 자바스크립트로 가져오려면
// value로 속성을 사용해야한다.
// 모든 input태그에 값은 value에 저장되어 있다.
// getElement를 통해서 input 태그를 가져오고
// 가져온 input 태그에서 value 값을 뽑아내기

function plus(){
    var a = document.getElementById("num1");
    var b = document.getElementById("num2");
    var result2 = document.getElementById("result2");
    result2.innerHTML = Number(a.value) + Number(b.value);
    // result2.innerHTML = Number(a.value) + parseInt(b.value);
}

function myage(){
    var year = document.getElementById("birth_year");
    var max = 2023;
    var age = document.getElementById("age");
    age.innerHTML = max - Number(year.value); 
}

// return

function score_calc(){
    var kor = document.getElementById("kor");
    var mat = document.getElementById("mat");
    var mus = document.getElementById("mus");
    var res = document.getElementById("result3");
    if (kor.value=='' || !(kor.value>=0&& kor.value<=100)){
        alert("국어 점수 입력해라!");
        kor.focus();
        return;
    }else if(mat.value==''){
        alert("수학 점수 입력 안함.");
        mat.focus();
        return;
    }else if(mus.value==''){
        alert("음악 점수 어디감?");
        mus.focus();
        return;
    }

    var tot = total(Number(kor.value), Number(mat.value), Number(mus.value)); // total이라는 함수 호출(실행)
    var avg_val = avg(tot);

    res.innerHTML="총점 : "+tot+" 평균 : "+avg_val;
}
function total(k, m ,s){
    return (k+m+s);
}
function avg(tot){ // avg.tot = score_calc.tot
    return tot/3;
}

function my_minus_life() {
    var soju = document.getElementById("soju");
    var min = document.getElementById("minute");
    var hour = document.getElementById("hour");
    var day = document.getElementById("day");

    if (soju.value == '') {
        alert("소주도 안먹으면서 왜 계산하려함");
        soju.focus();
        return;
    }

    var life = calculateLife(Number(soju.value));
    var min_calc = calculateMinute(life);
    var hour_calc = calculateHour(min_calc);

    min.innerHTML = life+"분";
    hour.innerHTML = min_calc+"시간";
    day.innerHTML = hour_calc+"일";
}

function calculateLife(s) {
    return (s * 2)*7300;
}

function calculateMinute(life) {
    return (life / 60);
}

function calculateHour(min) {
    return (min / 24);
}

/*
    볼링장에서  볼링게임을 20판을 했다.
    각 게임 마다 점수를 input으로 입력받아서
    평균이 얼마인지 출력하기 
    평균값은 정수만 출력하기
*/

function pin_calc(){
    var pin1 = document.getElementById("pin1");
    var pin2 = document.getElementById("pin2");
    var pin3 = document.getElementById("pin3");
    var pin4 = document.getElementById("pin4");
    var pin5 = document.getElementById("pin5");
    var pin6 = document.getElementById("pin6");
    var pin7 = document.getElementById("pin7");
    var pin8 = document.getElementById("pin8");
    var pin9 = document.getElementById("pin9");
    var pin10 = document.getElementById("pin10");
    var pin11 = document.getElementById("pin11");
    var pin12 = document.getElementById("pin12");
    var pin13 = document.getElementById("pin13");
    var pin14 = document.getElementById("pin14");
    var pin15 = document.getElementById("pin15");
    var pin16 = document.getElementById("pin16");
    var pin17 = document.getElementById("pin17");
    var pin18 = document.getElementById("pin18");
    var pin19 = document.getElementById("pin19");
    var pin20 = document.getElementById("pin20");
    var res = document.getElementById("result4");

    var tot = total(Number(pin1.value),Number(pin2.value),Number(pin3.value),Number(pin4.value),Number(pin5.value),Number(pin6.value),Number(pin7.value),Number(pin8.value),Number(pin9.value),Number(pin10.value),Number(pin11.value),Number(pin12.value),Number(pin13.value),Number(pin14.value),Number(pin15.value),Number(pin16.value),Number(pin17.value),Number(pin18.value),Number(pin19.value),Number(pin20.value)); // total이라는 함수 호출(실행)
    var avg_val = avg(tot);

    res.innerHTML="총점 : "+tot+" 평균 : "+avg_val;
}
function total(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t){
    return (a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+r+s+t);
}
function avg(tot){ // avg.tot = score_calc.tot
    return tot/20;
}

// switch 문은 if와 다르게 조건식이 참이냐 거짓이냐에 따라
// 동작하는 조건문이 아니다.
// switch 문은 값을 넣어서 해당 값에 따라 동작하도록 선택하는 문이다.
// 즉 여러분이 지금 사용하고 있는 vscode의 메뉴가 바로 switch 문으로
// 만들어진 것이다. 메뉴에서 내가 폴더 열기를 선택하면 탐색창이 실행된다.
// 즉 내가 선택한 메뉴에 따른 동작을 하는 것이다.
// switch 문에서 동작할 내용 선택은 case로 만들어준다.
// 여러개의 case를 만들 수 있다.
/*
    switch(10){
        case 1:
            1을 선택하면 동작할 내용
        case 5:
            5을 선택하면 동작할 내용
        case 100:
            100을 선택하면 동작할 내용
        case 2:
            2을 선택하면 동작할 내용
        case 10:
            10을 선택하면 동작할 내용
    }
*/

function my_order(){
    var main_menu = document.getElementById("night_snack");
    var side_menu = document.getElementById("side_menu");
    var alc = document.getElementById("alc");

    // 출력 엘리멘트
    var order_list = document.getElementById("order_result");

    var out="";
    var temp=menu(main_menu.value); // 메뉴 입력시 판매하는 메뉴를 입력되면
    // 금액(숫자)이 return되고, 판매하지 않는 메뉴 입력시 문자역이 return된다.
    out += main_menu.value+"금액 : "+temp+"원<br>";
    menu(main_menu.value);
    var temp1=menu(side_menu.value);
    out += side_menu.value+"금액 : "+temp1+"원<br>";
    menu(side_menu.value);
    var temp2=menu(alc.value);
    out += alc.value+"금액 : "+temp2+"원<br>";
    menu(alc.value);

    if( typeof(temp) === 'string' || typeof(temp1) === 'string' || typeof(temp2) === 'string'){ // temp의 값 타입이 문자열이라면
        alert("존재하지 않는 메뉴다");
        main_menu.value=''; // <- 이렇게 해주면 야식메뉴 input의 값이 지워진다.
        side_menu.value=''; // <- 이렇게 해주면 사이드메뉴 input의 값이 지워진다.
        alc.value=''; // <- 이렇게 해주면 주류 input의 값이 지워진다.
        main_menu.focus();
        return;
    }
    order_list.innerHTML = out+"총 금액 : ";

}
function menu(name){
    var money = 0;
    switch(name){
        case "족발":
            money=28000;
            break; // switch case 에서 break를 하지 않으면 밑에 있는 case도 실행된다.

        case "반반치킨":
            money=22000; break;
        
        case "무뼈닭발":
            money=19000; break;
        
        case "페페로니 피자":
            money=18000; break;
        
        case "짬뽕탕":
            money=18000; break;
        
        case "포케":
            money=15000; break;

        case "감자튀김":
            money=3000; break;

        case "염통꼬치":
            money=4000; break;

        case "타코야끼":
            money=6000; break;

        case "치즈볼":
            money=5000; break;

        case "테라":
            money=4000; break;
        
        case "피치 하이볼":
            money=8000; break;

        case "진로":
            money=5000; break;

        case "새로주":
            money=5000; break;
        
        case "카스":
            money=4000; break;

        case "발렌타인30년":
            money=1100000; break;

        case "시바스리갈":
            money=59800; break;

        default:
            return "판매하지 않는 메뉴입니다.";
    }
    return money;
}