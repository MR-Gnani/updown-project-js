
    // 초기번호
    let num = 0;
    let chance = 5;
    let gameOver = false;
    let history = []

    let userInput = $(`#user-input`);
    let result = $(`#result`);
    
    // play, reset버튼 클릭시 함수 호출
    $(`#play-button`).on("click", play);
    $(`#reset-button`).on("click", reset);
    
    // 랜덤번호 생성
    function randNum(){
        num = Math.floor(Math.random()*100)+1;
        console.log('정답', num)
    }

    // 게임 리셋
    function reset(){
        userInput.val("");
        randNum();
        result.text('결과');
    }

    function play(){
        let userValue = userInput.val();

        // 범위 유효성 검사
        if(userValue<1 || userValue>100){
            result.text('1과 100사이의 숫자를 입력해 주세요');
            return;
        }

        // 동일값 입력 유효성 검사
        if(history.includes(userValue)==true) {
            result.text('이미 입력한 값입니다. 다시 입력해 주세요');
            return;
        }

        // 남은 기회 카운트
        chance --;
        $(`#chance`).text(`남은기회 : ${chance}`)

        // 업다운 로직
        if(userValue < num){
            result.text('UP');
        }else if(userValue > num){
            result.text('DOWN');
        }else{
            result.text('GREAT!! YOU GOT THE CORRECT ANSWER!');
            gameOver = true;
        }

        // 배열에 입력한 값 넣어주기
        history.push(userValue);

        // 이미지 변경
        if(chance==4){
            $("#main-img").attr("src","/images/chance4.png");
        } else if(chance==3){
            $("#main-img").attr("src","/images/chance3.png");
        } else if(chance==2){
            $("#main-img").attr("src","/images/chance2.png");
        } else{
            $("#main-img").attr("src","/images/chance1.png");
        }
        $("#main-img").css("width", "250px");  
        $("#main-img").css("height", "250px");

        // 기회가 소진되면 버튼 비활성화
        if(chance < 1) {
            gameOver = true
            $("#main-img").attr("src","/images/end.png");
            $("#main-img").css("width", "250px");  
            $("#main-img").css("height", "250px");
            result.text('쿠와아아아아아아아앙');
        }

        if(gameOver){
            $(`#play-button`).prop("disabled", true);
        }

        // 인풋 필드 비워주기
        userInput.val("");
    }

    randNum();
