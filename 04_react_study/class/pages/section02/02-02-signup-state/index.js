import { useState } from "react";

export default function SignupStatePage() {
    
    // 이메일 저장할 state
    const [email,setEmail] = useState ("");

    // 비밀번호 저장할 state
    const [password, setPassword] = useState ("");

    // 에러를 담을 state
    const [emailError, setEmailError] = useState("");

    function onChangeEmail(event) {
        // event 는 사용해도 안해도 됨, 무조건 들어감 / 내가 한 행동이 들어감.
        // console.log(event)

        setEmail(event.target.value)
    }
    function onChangePassword () {
        // 안 받아와도 사용가능한 event
        // 이벤트 핸들러 함수
        // console.log(event)  // 나의 행동
        // console.log(event.target)  // 작동된 태그
        // console.log(event.target.value)  // 작동된 태그에 입력된 값
        setPassword(event.target.value)

    }

    function onClickSignup(event){
        console.log(email)
        console.log(password)

        // 1. 검증하기
        if(!email.includes("@")){
            // alert("이메일이 올바르지 않습니다.") // 요즘은 alert가 아니라 email 아래에 빨갛게 작게 나옴.
            // document.getElementById("emailError").innerText = "이메일이 올바르지 않습니다." // 얘도 state로 해보자
            setEmailError("이메일이 올바르지 않습니다.")

        }else{
            
        // 2. 백엔드로 보내기
        // 지금 안하고 나중에

        // 3. 성공 알람 띄우기
        alert("회원 가입을 환영 합니다.")
        }
        
    }

    return(
        <div>
            이메일 : <input type="text" onChange={onChangeEmail}></input>
            {/* onChange:  값을 입력해서 바뀔때 마다 */}
            <div>{emailError}</div>
            비밀번호 :  <input type="password" onChange={onChangePassword}></input>
            <button onClick={onClickSignup}>회원 가입</button>

        </div>
    )

}