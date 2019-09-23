
//  Define answers
var q1_value = 20, 
    q2_value = 20,
    q3_value = 20,
    q4_value = 20,
    q5_value = 20,
    q1_answer = "sacramento",
    q2_answer = "Missouri",
    q3_answer = "Rhode Island",
    q5_answer = "seal2",
    q5_response = "";

let totalTimes = localStorage.getItem("totalTimesTaken");
let scoresArray =  localStorage.getItem("scoreHistory");
if (scoresArray == null) {
    scoresArray = [];
} else {
    scoresArray = scoresArray.split(","); //creates array from a string
}

$(".active").on( "click", function() {
     $(".active").css("background","");
     $(this).css("background","yellow");
     //alert($(this).attr("id"));
     q5_response = $(this).attr("id");
});

function isFormValid(){
    let isValid = true;
    if ($("#q2").val() == "") {
        isValid = false;
        $("#validSubmission").html("Question 1 not answered");
    }
    return isValid;
}

$("#submitButton").on( "click", function() {
    
    $("#validSubmission").html("");
    
    if (!isFormValid()) {   //isFormValid == false
        return;
    }
    
    let total_points = 0;
    
    let q1_response = $("#q1").val().toLowerCase();
    let q2_response = $("#q2").val();
    let q3_response = $("input[name=q3]:checked").val();
    
    //Question 1
    if(q1_response == q1_answer) {
        $("#q1_feedback").html("Correct!");
        total_points += q1_value;
        $("#markImg1").html("<img src ='assets/img/checkmark.png' alt='checkmark'>");
        //alert(total_points);
        $("#q1_feedback").attr("class", "correct");
    }else {
        $("#q1_feedback").html("Incorrect!");
        $("#markImg1").html("<img src ='assets/img/xmark.png' alt='xmark'>");
        $("#q1_feedback").attr("class", "incorrect");
    }
    
    //Question 2
    if (q2_response == q2_answer) {
        $("#q2_feedback").html("Correct!");
        total_points += q2_value;
        $("#markImg2").html("<img src ='assets/img/checkmark.png' alt='checkmark'>");
        $("#q2_feedback").attr("class", "correct");
    }
    else {
        $("#q2_feedback").html("Incorrect!");
        $("#markImg2").html("<img src ='assets/img/xmark.png' alt='xmark'>");
        $("#q2_feedback").attr("class", "incorrect");
    }
    
    //Question 3
    if (q3_response == q3_answer) {
        $("#q3_feedback").html("Correct!");
        total_points += q3_value;
        $("#markImg3").html("<img src ='assets/img/checkmark.png' alt='checkmark'>");
        $("#q3_feedback").attr("class", "correct");
    }
    else {
        $("#q3_feedback").html("Incorrect!");
        $("#markImg3").html("<img src ='assets/img/xmark.png' alt='xmark'>");
        $("#q3_feedback").attr("class", "incorrect");
    }
    
    //Question 4
    if ($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked") && !$("#Jackson").is(":checked")&& !$("#Franklin").is(":checked")){
        $("#q4_feedback").html("Correct");
        total_points+=q4_value;
        $("#markImg4").html("<img src ='assets/img/checkmark.png' alt='checkmark'>");
        $("#q4_feedback").attr("class", "correct");
    } else {
           $("#q4_feedback").html("Incorrect");
           $("#markImg4").html("<img src ='assets/img/xmark.png' alt='xmark'>");
           $("#q4_feedback").attr("class", "incorrect");
    }
    
    //Question 5
    if (q5_response == q5_answer) {
        $("#q5_feedback").html("Correct");
        total_points += q5_value;
        $("#markImg5").html("<img src ='assets/img/checkmark.png' alt='checkmark'>");
        $("#q5_feedback").attr("class", "correct");
    } else {
        $("#q5_feedback").html("Incorrect");
        $("#markImg5").html("<img src ='assets/img/xmark.png' alt='xmark'>");
        $("#q5_feedback").attr("class", "incorrect");
    }
    
    //Congrats if 100 points
    
        
    //Totals    
    $("#total").html("The total Score is: " + total_points);
    if (total_points == 100) {
        $("#congratulations").html("Congrats on a perfect score!")
    }
    totalTimes++;
    localStorage.setItem("totalTimesTaken",totalTimes);
    $("#totalTimes").html("Quiz taken: " + totalTimes + " time(s)");
    scoresArray.push(total_points);
    $("#prevScores").html("Score History: ");
    scoresArray.forEach(function(score){
        $("#prevScores").append(score + " ");
    });
    
    localStorage.setItem("scoreHistory",scoresArray);
    
});

function randomizeQ4(){
    let choices = ["Maine", "Rhode Island", "Maryland", "Delaware"];
    choices = _.shuffle(choices);
    
    for (let i=0; i<choices.length; i++){
        let html  = `<label for="${choices[i]}"><input type='radio' name='q3' id="${choices[i]}" value="${choices[i]}">${choices[i]} </label>`;
        $("#q4Choices").append(html);
    }
}

randomizeQ4();
