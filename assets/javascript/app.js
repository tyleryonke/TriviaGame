window.onload = function(){
	$('#instructions').show();
	$('#startButton').show();
	$('#picSpace').hide();
	$('#answers').hide();
	$('#startButton').click(timer.timerStart);
};

var question1 = {
	question: "1. Which of these U.S. Presidents appeared on the television series Laugh-In?",
	answer1: "Lyndon Johnson",
	answer2: "Jimmy Carter",
	answer3: "Richard Nixon",
	answer4: "Gerald Ford",
	correctAnswer: "Richard Nixon",
	picsrc: 'assets/images/pic1.jpg'
}

var question2 = {
	question: "2. Who did artist Grant Wood use as the model for the farmer in his classic painting American Gothic?",
	answer1: "Traveling salesman",
	answer2: "His dentist",
	answer3: "Local sheriff",
	answer4: "His butcher",
	correctAnswer: "His dentist",
	picsrc: 'assets/images/pic2.jpg'
}

var question3 = {
	question: "3. The U.S. icon 'Uncle Sam' was based on Samuel Wilson, who worked during the War of 1812 as a what?",
	answer1: "Meat inspector",
	answer2: "Historian",
	answer3: "Mail deliverer",
	answer4: "Weapons mechanic",
	correctAnswer: "Meat inspector",
	picsrc: 'assets/images/pic3.jpg'
}

var question4 = {
	question: "4. During World War II, U.S. soldiers used the first commercial aerosol cans to hold what?",
	answer1: "Cleaning fluid",
	answer2: "Insecticide",
	answer3: "Antiseptic",
	answer4: "Shaving cream",
	correctAnswer: "Insecticide",
	picsrc: 'assets/images/pic4.jpg'
}

var question5 = {
	question: "5. What letter must appear at the beginning of the registration number of all non-military aircraft in the U.S.?",
	answer1: "N",
	answer2: "U",
	answer3: "A",
	answer4: "L",
	correctAnswer: "N",
	picsrc: 'assets/images/pic5.jpg'
}

var question6 = {
	question: "6. Who is credited with inventing the first mass-produced helicopter?",
	answer1: "Igor Sikorsky",
	answer2: "Ferdinand von Zeppelin",
	answer3: "Elmer Sperry",
	answer4: "Gottlieb Daimler",
	correctAnswer: "Igor Sikorsky",
	picsrc: 'assets/images/pic6.jpg'
}

var question7 = {
	question: "7. In the children's book series, where is Paddington Bear originally from?",
	answer1: "India",
	answer2: "Canada",
	answer3: "Peru",
	answer4: "Iceland",
	correctAnswer: "Peru",
	picsrc: 'assets/images/pic7.png'
}

var question8 = {
	question: "8. Which of the following landlocked countries is entirely contained within another country?",
	answer1: "Lesotho",
	answer2: "Mongolia",
	answer3: "Burkina Faso",
	answer4: "Luxembourg",
	correctAnswer: "Lesotho",
	picsrc: 'assets/images/pic8.gif'
}

var question9 = {
	question: "9. Which of the following men does not have a chemical element named after him?",
	answer1: "Albert Einstein",
	answer2: "Isaac Newton",
	answer3: "Niels Bohr",
	answer4: "Enrico Fermi",
	correctAnswer: "Isaac Newton",
	picsrc: 'assets/images/pic9.jpg'
}

var question10 = {
	question: "10. In Alexander Dumas' book, The Three Musketeers, two of the Musketeers are called Athos and Porthos. What was the name of the third Musketeer?",
	answer1: "Aramis",
	answer2: "D'Artagnan",
	answer3: "Cardinal Richelieu",
	answer4: "Planchet",
	correctAnswer: "Aramis",
	picsrc: 'assets/images/pic10.jpg'
}

var correct;
var incorrect;
var unanswered;

var currentQuestion;
var currentCorrectAnswer;

var timer = {
	time:20,
	timerStart: function(){
		$('#timer').html("Time Remaining:  " + timer.time + " seconds");
        counter = setInterval(timer.count, 1000);
    },
    count: function(){
        timer.time--;
        $('#timer').html("Time Remaining:  " + timer.time + " seconds");
        if (timer.time === 0) {
        	timer.time = 25;
        	unanswered++;
        	$('#timer').hide();
        	$('#answers').hide();
        	$('#correctAnswer').show();
        	$('#correctAnswer').html("The correct answer was:  " + currentQuestion.correctAnswer);
        	$('#picSpace').show();
        }
        if (timer.time === 21) {
        	if (currentQuestion === question10) {
        		$('#correctAnswer').hide();
        		$('#endStats').show();
        		$('#endStats').html("Correct:  " + correct + "<br>Incorrect:  " + incorrect + "<br>Unanswered:  " + unanswered);
        		$('#question').hide();
        		$('#answers').hide();
        		clearInterval(counter);
        		timer.time = 20;
        		$('#startButton').html("Restart the quiz!");
        		$('#startButton').show();
        		return;
        	}
        	timer.time = 20;
        	if (currentQuestion === question9) {
        		currentQuestion = question10;
        	}
        	if (currentQuestion === question8) {
        		currentQuestion = question9;
        	}
        	if (currentQuestion === question7) {
        		currentQuestion = question8;
        	}
        	if (currentQuestion === question6) {
        		currentQuestion = question7;
        	}
        	if (currentQuestion === question5) {
        		currentQuestion = question6;
        	}
        	if (currentQuestion === question4) {
        		currentQuestion = question5;
        	}
        	if (currentQuestion === question3) {
        		currentQuestion = question4;
        	}
        	if (currentQuestion === question2) {
        		currentQuestion = question3;
        	}
        	if (currentQuestion === question1) {
        		currentQuestion = question2;
        	}
        	$('#correctAnswer').hide();
        	$('#timer').show();
        	$('#question').show();
        		$('#question').html(currentQuestion.question);
        	$('#answers').show();
        		$('#answer1').html(currentQuestion.answer1);
				$('#answer2').html(currentQuestion.answer2);
				$('#answer3').html(currentQuestion.answer3);
				$('#answer4').html(currentQuestion.answer4);
			currentCorrectAnswer = currentQuestion.correctAnswer;
			$('#answerPic').attr('src', currentQuestion.picsrc);
			$('#picSpace').hide();
        }
    }
}

$('#startButton').on('click', function gameStart() {
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	$('#instructions').hide();
	$('#startButton').hide();
	$('#timer').show();
	currentQuestion = question1;
	$('#question').show();
		$('#question').html(currentQuestion.question);
	$('#answers').show();
		$('#answer1').html(currentQuestion.answer1);
		$('#answer2').html(currentQuestion.answer2);
		$('#answer3').html(currentQuestion.answer3);
		$('#answer4').html(currentQuestion.answer4);
	currentCorrectAnswer = currentQuestion.correctAnswer;
	$('#answerPic').attr('src', currentQuestion.picsrc);
	$('#picSpace').hide();
	$('#correctAnswer').hide();
	$('#endStats').hide();
})

$('.answerText').on('click', function selectAnswer() {
	var selectedAnswer = $(this).html();
	timer.time = 25;
    $('#timer').hide();
    $('#answers').hide();
    $('#correctAnswer').show();
    $('#picSpace').show();
    if (selectedAnswer == currentCorrectAnswer) {
    	correct++;
    	$('#correctAnswer').html("Correct! The answer was:  " + currentQuestion.correctAnswer);
    }
    else {
    	incorrect++;
    	$('#correctAnswer').html("Incorrect! The correct answer was:  " + currentQuestion.correctAnswer);
    }
    if (timer.time === 21) {
        if (currentQuestion === question10) {
        	$('#endStats').show();
        	$('#endStats').html("Correct:  " + correct + "<br>Incorrect:  " + incorrect + "<br>Unanswered:  " + unanswered);
        	$('#question').hide();
        	$('#answers').hide();
        	$('#startButton').show();
        	return;
        }
        timer.time = 20;
        if (currentQuestion === question9) {
        	currentQuestion = question10;
        }
        if (currentQuestion === question8) {
        	currentQuestion = question9;
        }
        if (currentQuestion === question7) {
        		currentQuestion = question8;
        }
        if (currentQuestion === question6) {
        		currentQuestion = question7;
        }
        if (currentQuestion === question5) {
        		currentQuestion = question6;
        }
        if (currentQuestion === question4) {
        		currentQuestion = question5;
        }
        if (currentQuestion === question3) {
        		currentQuestion = question4;
        }
        if (currentQuestion === question2) {
        		currentQuestion = question3;
        }
        if (currentQuestion === question1) {
        		currentQuestion = question2;
        }
        $('#correctAnswer').hide();
        $('#timer').show();
        $('#question').show();
        	$('#question').html(currentQuestion.question);
        $('#answers').show();
        	$('#answer1').html(currentQuestion.answer1);
			$('#answer2').html(currentQuestion.answer2);
			$('#answer3').html(currentQuestion.answer3);
			$('#answer4').html(currentQuestion.answer4);
		currentCorrectAnswer = currentQuestion.correctAnswer;
		$('#answerPic').attr('src', currentQuestion.picsrc);
		$('#picSpace').hide();
	}
})