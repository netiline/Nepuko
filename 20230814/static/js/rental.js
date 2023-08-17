const brtc = new Object();
const signgu=new Object();

async function getCode(){
    var temp = await fetch("./static/js/sigu.json").then((res)=>res.json());
    $.each(temp,function(i,d){
        if(d.시군구코드==='' || d.광역시도코드==36){
            brtc[d.광역시도코드]=d.법정동명;
        }else{
            signgu[d.법정동명]=d.시군구코드;
        }
    });
    console.log(brtc);
}
async function getData(brtcCode, signguCode){
    var ServiceKey="aU2M7WTPerUiHviK%2Bo%2FXiW8lJKziToXUzCR94DRarfLfWW6nbPM%2FkuOYo%2Fntj30U24svccnw4EMvwXj3ccN%2Bxg%3D%3D";
    var url="http://krdrive.ipdisk.co.kr:8000/test/aaa.php?ServiceKey="+ServiceKey+
    "&brtcCode="+brtcCode+"&signguCode="+signguCode+"&numOfRows=500";
    var temp = fetch(url).then((res)=>res.json());
}


$(async function(){
    await getCode();
    var brtkey = Object.keys(brtc);
    $("#si").append("<option value=''>시도 선택하세요</option>");
    $.each(brtkey,function(i,k){
        $("#si").append("<option value='"+k+"'>"+brtc[k]+"</option>");
    });
    $("#gu").append("<option>구 군 선택</option>");
    $("#si").change(change_gu);
});

function change_gu(){
    $("#gu").empty();
    var key = $(this).val();
    var gukeys = Object.keys(signgu);
    $.each(gukeys,function(i,k){
        if(k.indexOf(brtc[key]) > -1 ){
            $("#gu").append("<option value='"+signgu[k]+"'>"+k+"</option>");
        }
    });
    console.log($(this).val());
}