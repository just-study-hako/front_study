function get__Authen__number(){
    let a = String (Math.floor(Math.random() * 1000000)).padStart(6,0)
    document.getElementById("Authen__number").innerText = a


    let time = 5
    setInterval(function(){
        if(time >= 0){
        let time__min = Math.floor(time/60);
        let time__sec = String(time%60).padStart(2, '0');
        document.getElementById("timer").innerText = time__min+" : "+time__sec
        time = time - 1
        } else{
            document.getElementById("finish__button").disabled=true

        }

    
    },1000)


}

// 위 기능을 만들어서 사용할때 
// 인증번호 전송 버튼을 누를 때 마다 위 함수가 동작을 하는데
// 함수 안쪽에 타이머의 상태를 저장하면 매번 초기화가 되기에 의미가 없음

// 함수 밖에서 상태를 저장하도록 만들어 보자.

// 타이머가 도는지 안도는지 알려주는 불린 타입
let isStarted = false; 

function get__Authen__number(){
    
    if(isStarted===false){
        // 타이머가 동작중이지 않을 때 = false
        isStarted = true
        document.getElementById("finish__button").disabled = false

        let a = String (Math.floor(Math.random() * 1000000)).padStart(6,0)
        document.getElementById("Authen__number").innerText = a

        let time = 10
        let timer

        // setInterval 은 timer에 할당 될 때 실행되고 밑의 else 구문의 clearInterval에서 풀어줌
        timer = setInterval(function(){
            if(time >= 0){
            let time__min = Math.floor(time/60);
            let time__sec = String(time%60).padStart(2, '0');
            document.getElementById("timer").innerText = time__min+" : "+time__sec
            time = time - 1
            } else{
                // 동작이 끝났을 때
                document.getElementById("finish__button").disabled=true
                isStarted = false;
                clearInterval(timer)
            }
        },1000)

    } else {
        // 타이머가 동작중일 때 = true
    }


}