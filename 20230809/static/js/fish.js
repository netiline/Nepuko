let fish=[];
let fish_kind=[];
let fish_amount=[];

async function getData(){
    var data = await fetch("https://api.odcloud.kr/api/15031992/v1/uddi:3c46e4ef-78dc-4da6-97b1-ad226624eff5_201911131644?page=1&perPage=500&serviceKey=2yMYwum1rXlCN9VG0KUQCPfZM7%2FyybR7NTmeeY4tz%2FedSWLlmuRTlESOhQqiOeDdCqvlHigDuiIUuLtUHQBkvA%3D%3D").then((res)=>res.json()).then((r)=>r);
    return data.data;
}



$(async function(){
    fish = await getData();
    // 어초종류
    var kind = new Set();
    var amount = new Set();
    var y = new Set();

    $.each(fish,function(i,item){
        kind.add(item.어초종류);
        amount.add(Number(item.어초확인수량));
        y.add(Number(item.설치년도));
        $("#list").append(
            "<div class='fish_item'>"+
            "<span class='num'>"+item.연번+"</span>"+
            "<span class='fyear'>"+item.설치년도+"</span>"+
            "<span class='ftype'>"+item.어초종류+"</span>"+
            "<span class='famount'>"+item.어초확인수량+"</span>"+
            "<span class='flocation'>"+item.지역명+"</span></div>"
        );
    });
    fish_kind = Array.from(kind);

    fish_amount = Array.from(amount);
    var inc = parseInt(fish_amount.length/5);
    fish_amount=[ Math.round(fish_amount[inc]/10)*10, Math.round(fish_amount[inc*2]/10)*10,
                  Math.round(fish_amount[inc*3]/10)*10, Math.round(fish_amount[inc*4]/10)*10];
    year = Array.from(y);

    make_checkbox(year, "#install_year", "year");
    make_checkbox(fish_amount, "#fish_amount", "amount")
    make_checkbox(fish_kind, "#fish_kind", "kind");

    $("input[type=checkbox]").change(search);
});
function search(){
    
}

function make_checkbox(arr, id, name){
    $.each(arr, function(i,data){
        $(id).append("<span class='chk'><input type='checkbox' name='"+name+"' value='"+data+"'>"+
        "<label>"+data+"</label></span>")
    })
}