let classmates = ["철수","영희",'훈이']
console.log("classmates의 내용물 : "+classmates)

console.log("classmates의 0번째 인덱스 : " + classmates[0])
console.log("classmates의 1번째 인덱스 : " + classmates[1])
console.log("classmates의 2번째 인덱스 : " + classmates[2])

console.log("classmates에 훈이가 있나 : " + classmates.includes("훈이")) // 일치하는 값이 있는지 확인하는 includes
console.log("classmates에 맹구가 있나 : " + classmates.includes("맹구"))
console.log("길이 : "+classmates.length)  // 길이를 확인하는 length
console.log("맹구 값 추가")
classmates.push('맹구')
console.log("classmates에 맹구가 있나 : " + classmates.includes("맹구"))
console.log("길이 : "+classmates.length)  
console.log("classmates에서 마지막값을 빼고 출력 : " + classmates.pop())    // 가장 오른쪽 값을 출력하고 삭제시키는 pop
console.log("길이 : "+classmates.length)  

// 배열 합치기
let alp = ['a','b','c']
let num = ['1','2','3','4']
let alp_num = alp.concat(num)
console.log(alp_num)

// 문자열 = 문자의 배열형태
const email = "abcdef@naver.com"
console.log(email[2])



// 받아온 이메일  * 표시하기
// 위에서 만든 email로 사용

// 1. 받아온 문자열이 이메일이 맞는지 체크하기
console.log(email.includes('@'))

// 2. @ 기준 앞뒤 나누기
console.log(email.split('@'))
let email_user = email.split('@')[0]
console.log(email_user)
let email_compony = email.split('@')[1]

// 3. 앞부분에 마스킹 하기
let maskingMail = []
for (let i = 0; i < email_user.length; i++) {
    if(i<email_user.length-4){
        maskingMail.push(email_user[i])
    }else{
        maskingMail.push('*')
    }
}
console.log(maskingMail)

// 4. 다시 합쳐주기
let result = maskingMail.join("")+'@'+email_compony
console.log(result)