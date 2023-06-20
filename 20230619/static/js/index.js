function calcgrade(score){
    if (score >= 90 && score <=100)
    return "A등급";
    else if (score >= 80 && score < 90)
    return "B등급";
    else if (score >= 70 && score < 80)
    return "C등급";
    else
    return "F등급";
}

function calc(){
    var kor = parseInt(document.getElementById("kor").value);
    var math = parseInt(document.getElementById("math").value);
    var eng = parseInt(document.getElementById("eng").value);
    //국어 점수
    document.getElementById("kor_grade").innerHTML= calcgrade(kor);
    //수학 점수
    document.getElementById("math_grade").innerHTML= calcgrade(math);
    //영어  점수
    document.getElementById("eng_grade").innerHTML= calcgrade(eng);

    var res = document.getElementById("result");
    var mean = document.getElementById("mean");
    var grade = document.getElementById("grade");
    var calc = kor+math+eng;
    var mean_grade = (calc/3).toFixed(1);

    // 총점수 계산 
    res.innerHTML=calc+"점";
    // 평균 계산
    mean.innerHTML=mean_grade+"점";
    // 평균 등급계산
    document.getElementById("grade").innerHTML= calcgrade(mean_grade);
}