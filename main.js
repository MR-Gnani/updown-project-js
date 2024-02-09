// 랜덤번호 지정
// 번호 입력 인풋, 버튼
// 정답 : 정답입니다.
// 랜덤번호 < 입력번호 : down
// 랜덤번호 > 입력번호 : up
// Reset : 게임이 리셋
// 기회는 5번으로 한정 (5번이 지나면 버튼 클릭 disable)
// 1~100범위 밖의 번호 입력시 알림. 기회 소모 x
// 유저가 이미 입력한 숫자 재입력시 알림. 기회 소모 x

let num = 0;
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let result = document.getElementById('result');

playButton.addEventListener("click", play);

// 랜덤번호 생성
function randNum(){
    num = Math.floor(Math.random()*100)+1;
    console.log('정답', num)
}

function play(){
    let userValue = userInput.value;
    if(userValue < num){
        result.textContent = 'UP'
    }else if(userValue > num){
        result.textContent = 'DOWN'
    }else{
        result.textContent = 'GREAT!! YOU GOT THE CORRECT ANSWER!'
    }
}

randNum();