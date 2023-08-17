let data=[]; // json 데이터 저장할 배열
let tmp_data=new Object(); // 월별 기온 데이터 저장할 객체
let year=[]; // 년도 저장할 배열

function temperature(year){

}

async function getData(){
    var temp = await fetch("./static/js/csvjson.json").then((res)=>res.json());
    // console.log(temp);
    return temp;
}

$(async function(){
    data = await getData();
    var y=new Set();
    var oldDay={y:0, m:1, d:0}; // 이전 월이 몇월, 몇일인지 기억
    $.each(data,function(i,item){
        var date = item.날짜.split("-"); // 각 데이터의 날짜를 - 기준으로 분리, 배열
        y.add(date[0]); // 년도만 저장
        keyIn(date);
        if(oldDay.m != Number(date[1])){ // 월이 변경 되었을 경우
            tmp_data[oldDay.y][oldDay.m].평균기온 = tmp_data[oldDay.y][oldDay.m].평균기온/oldDay.d;
            tmp_data[oldDay.y][oldDay.m].최저기온 = tmp_data[oldDay.y][oldDay.m].최저기온/oldDay.d;
            tmp_data[oldDay.y][oldDay.m].최고기온 = tmp_data[oldDay.y][oldDay.m].최고기온/oldDay.d;
        }

        tmp_data[date[0]][Number(date[1])].평균기온 += item.평균기온c;
        tmp_data[date[0]][Number(date[1])].최저기온 += item.최저기온c;
        tmp_data[date[0]][Number(date[1])].최고기온 += item.최고기온c;
        oldDay.y=date[0];
        oldDay.m=Number(date[1]);
        oldDay.d=Number(date[2]);
    });
    year = Array.from(y);
    console.log(tmp_data);

    // 그래프 그리기
    draw("spring",[3,4,5]);
    draw("summer",[6,7,8]);
    draw("fall",[9,10,11]);
    draw("winter",[12,1,2]);
});

function draw(id,month){
    var ctx = $("#"+id)[0].getContext("2d");
    // 범례
    make_legend(ctx);
}

function make_legend(id, ctx){
    // 제목
    ctx.font="20px Arial";
    ctx.fillText(id,100,30);
    var yp = 10;
    for(var i=0; i<year.length; i++){
        if(i == parseInt(year.length/2)){
            ctx.arc();
            ctx.fillStyle="";
            ctx.fill();
            ctx.fillStyle="";
            ctx/fillText();
        }else{

        }
    }
}

function keyIn(날짜){
    if(!(날짜[0] in tmp_data)){ // tmp_data 객체에 해당년도가 키로 존재하냐?
        tmp_data[날짜[0]]=new Object();
        for(var i=1; i<=12; i++){
            tmp_data[날짜[0]][i]={
                평균기온:0,
                최저기온:0,
                최고기온:0
            }
        }
    }
}
