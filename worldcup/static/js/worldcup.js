
const image=['b1.jpg','b2.jpg','b3.jpg','b4.jpg','b5.jpg','b6.jpg','b7.jpg','b8.jpg',
'b9.jpg','b10.jpg','b11.jpg','b12.jpg','b13.jpg','b14.jpg','b15.jpg','b16.jpg','b17.jpg','b18.jpg',
'b19.jpg','b20.jpg','b21.jpg','b22.jpg','b23.jpg','b24.jpg','b25.jpg','b26.jpg','b27.jpg',
'b28.jpg','b29.jpg','b30.jpg','b31.jpg','b32.jpg'];

const kind=['고양이1','고양이2','고양이3','고양이4','고양이5','고양이6','고양이7','고양이8','고양이9','고양이10','고양이11','고양이12','고양이13','고양이14','고양이15',
'고양이16','고양이17','고양이18','강아지1','강아지2','강아지3','강아지4','강아지5','강아지6','강아지7','강아지8','강아지9','강아지10','강아지11','강아지12','강아지13','강아지14']

let toner1=new Array(); // 현재 토너먼트
let toner2=new Array(); // 다음 토너먼트 (현재 토너먼트에서 선택한 것)
let order =new Array();
let round = 32; // 현재 몇강?
let count = 1; // 현재 순서

function shuffle(){

    for(var i=1; i<=round; i++){
        var tmp = Math.floor(Math.random()*round);
        if(order.indexOf(tmp) == -1){
            order.push(tmp);
        }else{
            --i;
        }
    }
}
function tag(id){
    return document.getElementById(id);
}

window.onload=function(){
    var title = tag("title");
    title.innerHTML=round+"강   "+count+"/"+(round/2);

    toner1=Array(round).fill().map((arr,i) => i); // 배열 복사

    shuffle();
    show();
    
    var left=tag("left");
    var right=tag("right");
    left.addEventListener("click",select);
    right.addEventListener("click",select);
}

function final(id, nid){
    var n=tag(nid);
    n.style.display="none";
    var finale=tag(id);
    finale.style.width="100%";
    finale.style.height="100vh";
}

function select(){
    if(this == tag("left")){
        toner2.push(toner1[order[count*2-2]]);
    }else{
        toner2.push(toner1[order[count*2-1]]);
    }
    if(round==2) final("left","right");
    
    if(count==round/2){
        round=round/2;
        count=0;
        order=new Array();
        shuffle();
        toner1=toner2.map((i)=>i);
        toner2=new Array();
    }
    count++;
    var title = tag("title");
    title.innerHTML=round+"강   "+count+"/"+(round/2);
    show();
}
function show(){
    var left=tag("leftimg");
    var right=tag("rightimg");
    var leftText=tag("leftText");
    var rightText=tag("rightText");

    left.src="./static/image/"+image[toner1[order[count*2-2]]];
    right.src="./static/image/"+image[toner1[order[count*2-1]]];
    leftText.innerHTML=kind[toner1[order[count*2-2]]];
    rightText.innerHTML=kind[toner1[order[count*2-1]]];
}