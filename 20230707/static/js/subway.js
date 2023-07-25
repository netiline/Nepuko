let station=new Array(40).fill(0);

const st_name=['개화역','김포공항역','공항시장역','신방화역','마곡나루역','양천향교역','가양역','중미역','등촌역','염창역','신목동역','선유도역','당산역','국회의사당역',
'여의도역','샛강역','노량진역','노들역','흑석역','동작역','구반포역','신반포역','고속터미널','사평역','신논현역','언주역','선정릉역','삼성중앙역','봉은사역','종합운동장',
'삼전역','석촌고분역','석촌역','송파나루역','한성백제역','올림픽공원','둔촌오륜역','신명일역','고덕역','지금역'];

const train=[0,0,0,0];
const train_color=["","t-red","t-green","t-blue","t-yellow"];

window.onload=function(){
    map_draw();
    train_active();
}

function info(){
    alert("역클릭");
}

function train_active(){
    station[0]=1;
    map_draw();
    setInterval(
        function(){
            station[Math.abs(train[0]++)]=0;
            station[Math.abs(train[0])]=1;
            map_draw();
            if(train[0]==39){ // 마지막역 도착
                station[Math.abs(train[0])]=0;
                map_draw();
                setTimeout(function(){
                    train[0]=-40;
                },500);
            }
        }
    ,500);
    setTimeout(train2,1000);
    setTimeout(train3,2500);
    setTimeout(train4,3500);
}
function train2(){
    station[0]=2;
    setInterval(
        function(){
            station[Math.abs(train[1]++)]=0;
            station[Math.abs(train[1])]=2;
            if(train[1]==39){ // 마지막역 도착
                station[Math.abs(train[1])]=0;
                setTimeout(function(){
                    train[1]=-40;
                },500);
            }
        }
    ,500);
}
function train3(){
    station[0]=3;
    setInterval(
        function(){
            station[Math.abs(train[2]++)]=0;
            station[Math.abs(train[2])]=3;
            if(train[2]==39){ // 마지막역 도착
                station[Math.abs(train[2])]=0;
                setTimeout(function(){
                    train[2]=-40;
                },500);
            }
        }
    ,500);
}
function train4(){
    station[0]=4;
    setInterval(
        function(){
            station[Math.abs(train[3]++)]=0;
            station[Math.abs(train[3])]=4;
            if(train[3]==39){ // 마지막역 도착
                station[Math.abs(train[3])]=0;
                setTimeout(function(){
                    train[3]=-40;
                },500);
            }
        }
    ,500);
}


function map_draw(){
    var map=document.querySelector('#map'); // $("#map")
    var out="";
    for(var line=0; line<4; line++){
        var t=line*10;
        if(line%2!=0){ t+=9;
            while(t >= line*10)
                out += make(t--);
        }else{
            while(t <= line*10+9)
            out += make(t++);
        }
    }
    map.innerHTML=out;
}

function make(t){
    var w95="";
    if((t%10==9 || t%10==0) && t!=0)
        w95="w95";
    if( t==9|| t==29 || t==19 )
        w95+=" w95-top";
    if( t==10|| t==30 || t==20)
        w95+=" w95-bottom";
    if(t==19||t==20)
        w95+="-right";

        var out="";
    out += "<div class='station'>";
    out += "<div class='train "+(train_color[station[t]])+"'>  <i class='fa-solid fa-train'></i>  </div>";
    out += "<div class='mark' onclick='info()' data-idx='"+t+"'><div class='rail "+w95+"'></div>"+
            "<span class='stop '><i class='fa-regular fa-square "+(train_color[station[t]])+"'></i></span>";
    
    out += "</div>";
    if(t%10==9 && t!=39)
        out+="<div class='rad "+(t==19?'right':'left')+"'></div>";
    out += "<div class='name'>" +st_name[t]+ "</div></div>";
    return out;
}