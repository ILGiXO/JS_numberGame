//랜덤번호 지정
//유저가 번호를 입력한다. go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면 맞추셧습니다!
//랜덤번호가 <유저번호보다 작다 Down!
//랜덤번호가 > 유저번호보다 크다 Up!
//Reset버튼을 누르면 게임이 리셋
//5번의 기회를 다쓰면 게임이 끝난다.
//유저가 1~100 범위 밖이면 알려주고 기회를 깍지않는다.
//유저기ㅏ 이미 입력했으면 알려주고 기회를 깍지않는다.

let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resetButton = document.getElementById("reset-button");
let resultArea = document.getElementById("result-area");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let computerNum ;
let history =[];


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){userInput.value=""})

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1
    console.log("정답",computerNum);
}pickRandomNum();

function play(){
    
    let userValue = userInput.value;
    if(userValue<1 || userValue>100){
        resultArea.textContent="1과 100사이의 숫자를 알려주세요."
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다."
        return;
    }
    
    
    chances--;
    chanceArea.textContent=`남은기회: ${chances}번`
        
    
    if(userValue<computerNum){
        resultArea.textContent="Up!";
    }else if(userValue>computerNum){
        resultArea.textContent="Down!";    
    }else{
        resultArea.textContent="정답";
        gameOver=true;
    }

    history.push(userValue)
    console.log(history)
    if(chances==0){
        gameOver=true;
    }
    if(gameOver==true){
        playButton.disabled=true;
    }
}

function reset(){
    //userInput창이 정리가되고
    pickRandomNum();
    userInput.value="";
    gameOver=false;
    playButton.disabled=false;
    chances = 5;
    chanceArea.innerHTML = `남은 기회:${chances}`;
    history = [];
  
    
    resultArea.textContent="결과값이 여기나옵니다."
}