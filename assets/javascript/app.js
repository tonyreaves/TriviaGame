

//array of questions, which are objects, which contain arrays of answers, which contain objects
var questionArray = [
    {
        question: "How many species of rattlesnake live in Arizona?",
        answers:
            [{
                answer: "A. 13",
                correct: true
            },
            {
                answer: "B. 36",
                correct: false
            },
            {
                answer: "C. 4",
                correct: false
            },
            {
                answer: "D. 7",
                correct: false
            }],
        post: "The correct answer was A. There are 32 different species total, with 13 of them in Arizona. Holy crap, 13 ways to die!"
    },

    {
        question: "When was the last confirmed human death attributed to a gila monster?",
        answers:
            [{
                answer: "A. 2008",
                correct: false
            },
            {
                answer: "B. 1939",
                correct: true
            },
            {
                answer: "C. 1989",
                correct: false
            },
            {
                answer: "D. 2017",
                correct: false
            }],
        post: "Correct answer: B. They're actually pretty sluggish and shy, and it's believed those fatalies resulted from old-timey medical treatment, not the bites themselves. Still, they say the bite is pretty painful so I'm going to steer clear."
    },

    {
        question: "What should you do if you hear a rattlesnake rattle?",
        answers:
            [{
                answer: "A. Call your family and tell them you love them.",
                correct: false
            },
            {
                answer: "B. Grab it before it can bite you.",
                correct: false
            },
            {
                answer: "C. Freeze and carefully determine where it's coming from, then slowly step away from the snake.",
                correct: true
            },
            {
                answer: "D. Scream and run.",
                correct: false
            }],
        post: "Correct answer: C. Not everyone is lucky enough to hear a rattle. If you touch one by accident they'll probably skip straight to the biting. Probably best to just never go outside."
    },

    {
        question: "What should you do if you're bitten by a rattlesnake?",
        answers:
            [{
                answer: "A. Stay calm and try not to let the venom circulate through your body. Keep the affected limb lower than your heart.",
                correct: true
            },
            {
                answer: "B. Run full bore toward the nearest hospital.",
                correct: false
            },
            {
                answer: "C. Cut open the wound and try to suck out the venom.",
                correct: false
            },
            {
                answer: "D. Quickly cook and eat the snake to gain immunity from its powers.",
                correct: false
            }],
        post: "Correct answer: A. Stay calm LOL."
    },

    {
        question: "Where do bark scorpions typically hide indoors?",
        answers:
            [{
                answer: "A. Sinks",
                correct: false
            },
            {
                answer: "B. Bathtubs",
                correct: false
            },
            {
                answer: "C. Dark cabinets",
                correct: false
            },
            {
                answer: "D. All of the above.",
                correct: true
            }],
        post: "Correct answer: D. This is why I bought a UV flashlight."
    },

    {
        question: "How are Africanized bees differnet from other bees in North America?",
        answers:
            [{
                answer: "A. They don't pollinate plants.",
                correct: false
            },
            {
                answer: "B. They are much larger.",
                correct: false
            },
            {
                answer: "C. They are more aggressive and will chase you.",
                correct: true
            },
            {
                answer: "D. Their sting is more venomous.",
                correct: false
            }],
        post: "Correct answer: C. They'll chase you up to half a mile. They are bastards."
    },

    {
        question: "What should you do if your dog gets ahold of a Sonoran Desert Toad (formerly the Colorado River Toad)?",
        answers:
            [{
                answer: "A. Get a garden hose and wash the poisonous slime out of the dog's mouth, then get to a vet.",
                correct: true
            },
            {
                answer: "B. Rush straight to the vet.",
                correct: false
            },
            {
                answer: "C. Make your dog eat the whole thing, to teach Fido a lesson.",
                correct: false
            },
            {
                answer: "D. Yell at your dog.",
                correct: false
            }],
        post: "Correct answer: A. Get that poison out of its mouth! Still take it to the vet, but spray out as much slime as you can first to keep your dog from absorbing it through its mucous membranes."
    },

    {
        question: "What do experts recommend you do if stung by a tarantula hawk?",
        answers:
            [{
                answer: "A. Drive to the hospital.",
                correct: false
            },
            {
                answer: "B. Lie down and start screaming.",
                correct: true
            },
            {
                answer: "C. Pour water on it.",
                correct: false
            },
            {
                answer: "D. Get some tweezers and remove the stinger.",
                correct: false
            }],
        post: "Correct answer: B. I wish I was making this up. They say the pain is so bad you lose motor function, so lie down so you don't hurt yourself, and scream so you don't have to concentrate on the pain. Why did I move here?"
    },
]

//starts the quiz
document.addEventListener("DOMContentLoaded", function game() {

    //variable reset
    var right = 0;
    var wrong = 0;
    var unanswered = 0;
    var seconds = 30;
    var secs = 5;
    var yourAnswer;

    //function to check if entered answer is correct
    // function check() {
    //     if (answerArray[i].answers[this] = (correct = true)) {
    //         right++;
    //     }
    // }

    //5 second countdown
    var posttm = setTimeout(secs, 1000);
    function postCountdown() {
        $("#answer").html(questionArray[i].post)

        if (secs == 0) {
            clearInterval(posttm);
            i++;
            seconds = 30;
            countDown();
        }
        else {
            secs--;
        }
    }

    //for loop for question
    for (var i = 0; i < 1; i++) {

        $("#questions").html(questionArray[i].question);
         console.log(questionArray[i].question);
        $("#button1").html(questionArray[i].answers[0].answer);
        console.log('dccdcdcdcvrvrv',questionArray[i].answers[0].answer)
        $("#button2").html(questionArray[i].answers[1].answer);
        $("#button3").html(questionArray[i].answers[2].answer);
        $("#button4").html(questionArray[i].answers[3].answer);
        //makes buttons check for true status
        $("#button1").on("click", function (event) {
            if(questionArray[i].)
            console.log($("#button1").text());
            // if (questionArray[i].answers.correct == true) {
            //     right++;
            //     postCountdown();
            //     console.log(right);
            // }
            // else if (questionArray[i].answers[x].correct == false) {
            //     wrong++;
            //     postCountdown();
            //     console.log(wrong);
            // }

        });
        $("#button2").html(questionArray[i].answers[1].answer);
        //30 second countdown
        var tm = setTimeout(seconds, 1000)
        function countDown() {
            $("#answer").empty();
            if (seconds === 0) {
                clearTimeout(tm);
                unanswered++;
                secs = 5;
                postCountdown();
            }
            else {
                seconds--;
                $("#countdown").html(seconds = "seconds left");
                console.log(seconds);
                $("#countdown").html(seconds);
            }


            // $("#answerButton").click(
            //     if (questionArray[i].answers[x].correct=true) {
            //        right++;
            //        postCountdown();
            //     }
            //     else if (questionArray[i].answers[x].correct=false) {
            //         wrong++;
            //         postCountdown();
            //     }
        }

countDown();


        //make 30 second count visible
        //make countdown trigger var changes, appearance of "post"
        //set click on to check answer
        //make 5 second countdown trigger next question
        //make questions appear in divs, answers in buttons

    }
}
, )