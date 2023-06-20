let game=0;
function start() {
    document.getElementById("rsp").src = "";
    document.getElementById("result").innerHTML = "";
    clearInterval(game);
    game = setInterval(change_img, 100);
}
let turn=2;
function change_img() {
    var rock = "rock.png";
    var scissors = "scissors.png";
    var paper = "paper.png";
    var tag = document.getElementById("rsp");

    if (turn == 0) {
        tag.src = "./style/image/" + rock;
      turn = 1; // 순서 변경
    } else if (turn == 1) {
        tag.src = "./style/image/" + scissors;
      turn = 2; // 순서 변경
    } else {
        tag.src = "./style/image/" + paper;
      turn = 0; // 순서 변경
    }
}
function result(select){
    clearInterval(game);
    document.getElementById("result").innerHTML = "";
    var rock = "rock.png";
    var scissors = "scissors.png";
    var paper = "paper.png";
    var tag = document.getElementById("rsp");

    if (turn == 0) {
        tag.src = "./style/image/" + rock;
      turn = 1; // 순서 변경
    } else if (turn == 1) {
        tag.src = "./style/image/" + scissors;
      turn = 2; // 순서 변경
    } else {
        tag.src = "./style/image/" + paper;
      turn = 0; // 순서 변경
    }
    if( select == turn){
        document.getElementById("result").innerHTML="<h1>비김</h1>";
    } else if ( (select == 0 && turn == 1) || (select == 1 && turn == 2) || (select == 2 && turn == 0)){
        document.getElementById("result").innerHTML="<h1>이김</h1>";
    } else if ( (select == 0 && turn == 2) || (select == 1 && turn == 0) || (select == 2 && turn == 1)){
        document.getElementById("result").innerHTML="<h1>짐</h1>";
    }
}