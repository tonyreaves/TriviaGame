

//array of questions, which are objects, which contain arrays of answers, which contain objects
var questionArray = [
    {question: "How many species of rattlesnake live in Arizona?",
    answers:
    [{answer:"13",
    correct:true},
    {b:"36",
    correct:false},
    {c:"4",
    correct:false},
    {d:"7",
    correct:false}],
    post:"There are 32 different species total, with 13 of them in Arizona. Holy crap, 13 ways to die!"},
  
    {question: "When was the last confirmed human death attributed to a gila monster?",
    answers:
    [{a:"2008",
    correct:false},
    {b:"1939",
    correct:true},
    {c:"1989",
    correct:false},
    {d:"2017",
    correct:false}],
    post:"They're actually pretty sluggish and shy, and it's believed those fatalies resulted from old-timey medical treatment, not the bites themselves. Still, they say the bite is pretty painful so I'm going to steer clear."},
  
    {question:"What should you do if you hear a rattlesnake rattle?",
    answers:
    [{a:"Call your family and tell them you love them.",
    correct:false},
    {b:"Grab it before it can bite you.",
    correct:false},
    {c:"Freeze and carefully determine where it's coming from, then slowly step away from the snake.",
    correct:true},
    {d:"Scream and run.",
    correct:false}],
    post:"Not everyone is lucky enough to hear a rattle. If you touch one by accident they'll probably skip straight to the biting. Probably best to just never go outside."},
 
    {question:"What should you do if you're bitten by a rattlesnake?",
    answers:
    [{a:"Stay calm and try not to let the venom circulate through y[our body. Keep the affected limb lower than your heart.",
    correct:true},
    {b:"Run full bore toward the nearest hospital.",
    correct:false},
    {c:"Cut open the wound and try to suck out the venom.",
    correct:false},
    {d:"Quickly cook and eat the snake to gain immunity from its powers.",
    correct:false}],
    post:"Stay calm LOL."},

    {question:"Where do bark scorpions typically hide indoors?",
    answers:
    [{a:"Sinks",
    correct:false},
    {b:"Bathtubs",
    correct:false},
    {c:"Dark cabinets",
    correct:false},
    {d:"All of the above.",
    correct:true}],
    post:"This is why I bought a UV flashlight."},

    {question:"How are Africanized bees differnet from other bees in North America?",
    answers:
    [{a:"They don't pollinate plants.",
    correct:false},
    {b:"They are much larger.",
    correct:false},
    {c:"They are more aggressive and will chase you.",
    correct:true},
    {d:"Their sting is more venomous.",
    correct:false}],
    post:"They'll chase you up to half a mile. They are bastards."},

    {question:"What should you do if your dog gets ahold of a Sonoran Desert Toad (formerly the Colorado River Toad)?",
    answers:
    [{a:"Get a garden hose and wash the poisonous slime out of the dog's mouth, then get to a vet.",
    correct:true},
    {b:"Rush straight to the vet.",
    correct:false},
    {c:"Make your dog eat the whole thing, to teach Fido a lesson.",
    correct:false},
    {d:"Yell at your dog.",
    correct:false}],
    post:"Get that poison out of its mouth! Still take it to the vet, but spray out as much slime as you can first to keep your dog from absorbing it through its mucous membranes."},

    {question:"What do experts recommend you do if stung by a tarantula hawk?",
    answers:
    [{a:"Drive to the hospital.",
    correct:false},
    {b:"Lie down and start screaming.",
    correct:true},
    {c:"Pour water on it.",
    correct:false},
    {d:"Get some tweezers and remove the stinger.",
    correct:false}],
    post:"I wish I was making this up. They say the pain is so bad you lose motor function, so lie down so you don't hurt yourself, and scream so you don't have to concentrate on the pain. Why did I move here?"},
]

//starts the quiz
document.addEventListener("DOMContentLoaded", function game() {

//variable reset
correct=0;
wrong=0;
unanswered=0;

//for loop for questions
for (var i=0; i<questionArray.length; i++) {
$("#questions").text(questionArray[i].question);
$("#button1").text(questionArray[i].answers.a);
console.log(questionArray[i].question);
};
console.log(correct);
})