

// 인증번호 전송, 인증확인 버튼은 disabled 속성을 주어서 
// 조건에따라 클릭 기능 활성화


// 1. 핸드폰 번호가 다 입력 되어야 인증번호 전송 버튼이 활성화

const checkPhoneNumber = () => {

    let phone1 = document.getElementById("phone1").value
    let phone2 = document.getElementById("phone2").value
    let phone3 = document.getElementById("phone3").value
    
    // 각각 3자리, 4자리, 4자리 일때 
    if((phone1.length >= 3) && (phone2.length >= 4) && (phone3.length >= 4)){
        // 인증번호 전송 버튼을 활성화 시킴
        document.getElementById("auth__button").disabled=false
        // 외형도 활성화 시킴
        document.getElementById("auth__button").style="color : #0068FF; background-color: white"
    } else {
        // 하나라도 값이 안맞을 때
        document.getElementById("auth__button").disabled=true
    }

}

// 2. 핸드폰 번호는 각각 3자리 4자리 입력할때마다 다음칸으로
const changeFocus1 = () => {
    let phone1 = document.getElementById("phone1").value
    if(phone1.length === 3){
        document.getElementById("phone2").focus()
    }

}
const changeFocus2 = () => {
    let phone2 = document.getElementById("phone2").value
    if(phone2.length === 4){
        document.getElementById("phone3").focus()
    }

}

// 위의 두 기능은 버튼 하나로 두개씩 동작해야하므로 이중 함수를 사용하자

const inputPhone1 = () => {
    checkPhoneNumber();
    changeFocus1();
}
const inputPhone2 = () => {
    checkPhoneNumber();
    changeFocus2();
}
const inputPhone3 = () => {
    checkPhoneNumber();
}


// 3. 인증번호 전송 버튼의 기능을 만들자

// 현재 인증번호를 발급 받았는지 확인하는 isStarted
let isStarted = false;
let time = 0; 
let timer
function authNumber(){
    if(isStarted===false){
        // 타이머가 동작중이지 않으면 = 인증번호를 발급받지 않은 상태
        // 동작중 으로 설정하고
        isStarted = true
        // 인증번호 전송 버튼을 비활성화 시키고
        document.getElementById("auth__button").disabled = true
        document.getElementById("auth__button").style="border:1px solid gray; color : gray; background-color:rgb(224, 224, 224)"


        // 인증 완료 버튼을 활성화 시키고
        document.getElementById("finish__button").disabled = false
        // 인증 완료 버튼을 활성화 외형으로 바꿔주자
        document.getElementById("finish__button").style="color : white; background-color: #0068FF"

        // 랜덤한 6자리숫자를 만들어서 출력
        let a = String (Math.floor(Math.random() * 1000000)).padStart(6,0)
        document.getElementById("auth__number").innerText = a

        // 몇초동안 동작할 것인가
        time = 180

        // setInterval 은 timer에 할당 될 때 실행되고 밑의 else 구문의 clearInterval에서 풀어줌
        timer = setInterval(function(){
            if(time >= 0){
            // 타이머가 0초가 아닐때는
            // 인증번호 전송 버튼을 비활성화 시키고
            document.getElementById("auth__button").style="color : gray; background-color:rgb(224, 224, 224)"


            // 시간을 분, 초로 나뉘어서 출력
            let time__min = Math.floor(time/60);
            let time__sec = String(time%60).padStart(2, '0');
            document.getElementById("auth__time").innerText = time__min+" : "+time__sec
            // 매 초마다 1초씩 감소
            time = time - 1

            } else{
                // 타이머가 0초일때 
                // 인증번호 000000 으로 만들기
                document.getElementById("auth__time").innerText = "0 : 00"
                // 인증 완료 버튼을 비활성화 시키고
                // 인증번호 전송 버튼을 활성화 시킴
                document.getElementById("finish__button").disabled=true
                document.getElementById("finish__button").style="color : gray; background-color:rgb(224, 224, 224)"

                document.getElementById("auth__button").disabled = false
                document.getElementById("auth__button").style="color : #0068FF; background-color: white"

                // 동작중 확인하는 불린을 false 로 바꾸고
                isStarted = false;

                // 타이머를 종료시킴
                clearInterval(timer)
            }
        },1000)

    } else {
        // 타이머가 동작중일 때 누르면 아무런 반응도 하지 않음.
    }
}


// 4. 시간내로 인증 완료 버튼을 누르면 메시지로 "인증이 완료되었습니다" 띄우기

// 인증상태 저장할 auth 불린변수
let auth = false;
const authComplete = () =>{

    // 현재 타이머가 돌아가는지 확인
    if(isStarted===true){
        // 타이머가 돌고 있으면

        // 인증상태 true로 바꿔주고
        auth = true;

        // 메시지 출력
        alert("인증이 완료되었습니다");

        // 타이머도 멈추고
        clearInterval(timer)
        // 동작중 확인하는 불린을 false 로 바꾸고
        isStarted = false;

        // 타이머도 꺼주고
        document.getElementById("auth__time").innerText = "0 : 00"

        // 인증 완료 버튼을 비활성화 시키고
        // 인증번호 전송 버튼을 활성화 시킴
        document.getElementById("finish__button").disabled=true
        document.getElementById("finish__button").style="color : gray; background-color:rgb(224, 224, 224)"

        document.getElementById("auth__button").disabled = false
        document.getElementById("auth__button").style="color : #0068FF; background-color: white"


        // 가입하기 버튼이 활성화됨.
        document.getElementById("signup__button").disabled=false
        document.getElementById("signup__button").style="color : #0068FF; background-color: white; border: 1px solid #0068FF"

    }else{
        // 타이머가 안돌고 있으면 그냥 종료함
    }

}


// 5. 가입하기 버튼을 눌렀을 때 다른 항목이 채워져 있지 않으면
// 해당 항목 아래에 ~~~이 올바르지 않습니다 출력하기
const inputCheck = () => {
    // check가 true 인 경우에만 로그인 되도록
    let check = true;
    // 모두 검사를 해야하니 전부 각각 if문으로 만들자

    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let pw1 = document.getElementById("pw1").value
    let pw2 = document.getElementById("pw2").value
    let location = document.getElementById("location__now");
    let now__location = location.options[location.selectedIndex].value;
    let gender = document.querySelector('input[name="gender"]:checked');

    // email
    if(email.length = 0){
        // 입력한 값이 없는 경우
        document.getElementById("wrong__email").innerText = "이메일은 필수 입력 항목 입니다"
        check = false;
    }else {
        if(!email.includes("@")){
            // 값은 있는데 
            // 값의 사이에 @ 가 없을경우
            document.getElementById("wrong__email").innerText = "이메일 형식이 올바르지 않습니다."
            check = false;
        }else{
            // 값도 있고, @도 포함되어있으면 그냥 넘어감
        }
    }

    // name
    if(name.length === 0){
        // 입력한 값이 없는 경우
        document.getElementById("wrong__name").innerText = "이름은 필수 입력 항목 입니다."
        check = false;

    }

    // pw
    if(pw1.length === 0){
        // pw1 이 빈칸인 경우
        document.getElementById("wrong__pw1").innerText = "비밀번호는 필수 입력 항목 입니다."
        check = false;
    }
    if(pw2.length === 0){
        document.getElementById("wrong__pw2").innerText = "비밀번호확인은 필수 입력 항목 입니다."
        check = false;
    }
    if(pw1 !== pw2){
        document.getElementById("wrong__pw2").innerText = "비밀번호 확인이 올바르지 않습니다."
        check = false;
    } else{
        // 양쪽 다 값이 있고 pw1 = pw2 인경우는 그냥 넘어감
    }
    
    // location
    if (now__location === ""){
        // 기본 선택지인경우
        document.getElementById("wrong__location").innerText = "거주지를 선택해 주세요."
        check = false;
    }

    // gender
    if (gender){
        // 어디든 선택함 = 정상 넘어감
    } else {
        // 둘다 안고름
        document.getElementById("wrong__gender").innerText = "성별은 필수 입력 항목 입니다."
        check = false;
    }


    if (check === true){
        alert("회원가입을 환영합니다.")
    }

}
