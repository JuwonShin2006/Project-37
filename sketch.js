var canvas;
var gameState, contestantCount, allContestants, answer, database, quiz, question, contestant;

function setup(){
  canvas = createCanvas(850,400);
  gameState = 0;
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
