// 이메일, pw1,pw2 모두 빈칸이 아닐때 회원가입 버튼 활성화

const checkValidation = function() {

    let email = document.getElementById("email").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value

    // email, pw1, pw2 모두 빈값이 아닐때
    // if(email !== "" && pw1 !== "" && pw2 !== ""){
    if(email && pw1 && pw2){     // 이런식으로 작성해도 위와 동일함
        // 모든 input이 비어있지 않을 때
        document.getElementById("submit").disabled = false
    } else {
        // 하나라도 비어있을 때
        document.getElementById("submit").disabled = true
    }

}


// 위의 기능이 실시간으로 확인되도 실행 되어야 함.
// 하지만 상시로 확인을 하게되면 프로그램이 쓸데없이 너무 무거워짐
// 해서 input 란에 값이 입력될때마다 확인하도록 하자
// email, pw1, pw2 의 input 란에 oninput 으로 함수를 넣자

// 이번엔 전화번호처럼 자동으로 칸을 채우면 다음칸으로 커서를 옮기는 기능을 만들어 보자

// 1번칸에 3개 입력되면 2번 칸으로
// 2번칸에 4개 입력되면 3번 칸으로 2개의 함수가 필요함

const changeFocus1 = () => {

    let phone1 = document.getElementById("p1").value
    if(phone1.length === 3){
        document.getElementById("p2").focus()
    }

}


const changeFocus2 = () => {
    let phone2 = document.getElementById("p2").value
    if(phone2.length === 4){
        document.getElementById("p3").focus()
    }

}