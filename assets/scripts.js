//Global variables
		var score = 0;
		var attempts = localStorage.getItem("quizAttempts") ? localStorage.getItem("quizAttempts") : 0;
		
      //Event Listeners
      //"Submit Quiz" button 
		  $("button").on("click", gradeQuiz);

		  $(".Q5").on("click", function(){ 
			  //console.log("it works!")
			  $(".Q5").css("background-color", ""); //resets the background color of all images
			  $(this).css("background-color", "rgb(255,255,0)");
			  
			});
			
		function calcTotal() {
			if (score > 80) {
				$("#celebrate").html("Congratulations you passed!");
				$("#celebrate").css("color", "green");
			}
			$("#totalScore").html(`Total Score: ${score}`);  //string literals
		}

  		function isFormValid(){
            let isValid = true;
            if ($("#q1").val() == "") {
                isValid = false;
                $("#validationFdbk").html("Question 1 was not answered");
            }
            return isValid;
        }

		function rightAnswer(index) {
			//$("#q" + index + "Feedback").html("Correct!");
			$(`#q${index}Feedback`).html("Correct!");  //using string literals
            $("#q" + index + "Feedback").attr("class", "bg-success text-white");
            $("#markQ" + index).html("<img src ='assets/img/checkmark.png'>");
            score += 12.5;
		}
		
		function wrongAnswer(index){
			$(`#q${index}Feedback`).html("Incorrect!");
            $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
            $("#markQ" + index).html("<img src ='assets/img/xmark.png' alt='xmark'>");
		}

		function displayQ4(){

			let choices = ["Maine", "Rhode Island", "Maryland", "Delaware"];

			choices = _.shuffle(choices);

			choices.forEach(function (i)  {
				console.log(i)
				$("#choices").append(`<input type="radio" name="q4" id="${i}" value="${i}"> <label for="${i}">${i} </label>`)

			})


		}

		displayQ4();

        function gradeQuiz(){

        	$("#validationFdbk").html(""); //resets validation feedback

        	 if (!isFormValid()) {   
        	    return;
        	  }

			//variables
			attempts++;
			localStorage.setItem("quizAttempts", attempts);
			
			//$("#attempts").html("Times taken: " + attempts);
			$("#attempts").html(`Times taken: ${attempts}`);
            score = 0;
            let q1Response = $("#q1").val().toLowerCase(),
            	q2Response = $("#q2").val(),
            	q4Response = $("input[name=q4]:checked").val(),
            	q6Response = $("#q6").val(),
            	q7Response = $("input[name=q7]:checked").val(),
            	q8Response = $("#q8").val();

			console.log(q4Response);

            //Question 1
            if(q1Response == "sacramento") {
                rightAnswer(1);
            }else {
                wrongAnswer(1);
            }

			//Question 2
			if(q2Response == "mo") {
                rightAnswer(2);
			}
			else {
				wrongAnswer(2);
			}
			
			//Question 3
			if ( $("#roosevelt").is(":checked") && $("#jefferson").is(":checked") && 
			!$("#jackson").is(":checked") && !$("#franklin").is(":checked")) {
				rightAnswer(3);
			} else {
				wrongAnswer(3);
			}
			
			//Question 4
			if(q4Response == "Rhode island") {
				rightAnswer(4);
			} else {
				wrongAnswer(4);
			}
			
			//Question 5
			if($("#seal2").css("background-color") == "rgb(255, 255, 0)"){
				rightAnswer(5);
			}else{
				wrongAnswer(5);
			}
			
			//Question6
			if(q6Response == 50)
				rightAnswer(6);
			else
				wrongAnswer(6);
				
			//Question 7
			if(q7Response == "US") {
				rightAnswer(7);
			} else {
				wrongAnswer(7);
			}
			
			//Question 8
			if(q8Response == "Olympia")
				rightAnswer(8);
			else
				wrongAnswer(8);
			
        	calcTotal();
		

        } //gradeQuiz