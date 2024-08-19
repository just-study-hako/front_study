// setTimeout(function(){
//     console.log("펑")
// },3000)

// 3초 뒤에 펑 하고 출력됨

// setInterval(function(){
//     console.log("1초가 지났다")
// },1000)

// 해당 기능은 무한동작 하기에 일단 주석처리해둠


// let time = 10

// setInterval(function(){
//     console.log(time)
//     time = time - 1
// },1000)

// 얘도 타이머처럼 만들었지만 음수로 무한대로 가버림


// setInterval(function(){
//     if(time>=0){
//     console.log(time)
//     time = time - 1
// }
// },1000)



// 실무 실습 예제
/*
인증 번호를 받았을때 3분 타이머가 돌아가도록 + 분 초로 표기되도록
*/
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

