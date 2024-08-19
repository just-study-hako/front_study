// 데이터 타입 연산자 실습
console.log(1+1)                
console.log(1+"만원")           
console.log(1+"1")
console.log(1-"1")
console.log("서울"+"경기")
console.log("123" == 123)
console.log("123" === 123)
console.log(true && false)
console.log(true && true)
console.log(true || true)
console.log(!false)
console.log(!true)


// 조건문
if(1+1 === 2){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}

if(true){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}

if(!true){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}

if(0){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}

if(1){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}

// https://developer.mozilla.org/ko/docs/Glossary/Falsy 거짓으로 보는 값들


// 간단 퀴즈
/* 조건문을 활용하여 
철수의 나이가 20세 이상이면 '성인입니다'
8세이상 19세 이하면 학생입니다
7세 이하면 어린이입니다를 출력하도록 해보자
*/
const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}

if(profile.age >=20){
    console.log("성인 입니다.")
} else if (profile.age >= 8){
    console.log("학생 입니다.")
} else if (profile.age > 0) {
    console.log("어린이 입니다.")
} else {
    console.log("잘못 입력하셨습니다.")
}

// 반복문

for (let i = 0; i < 5; i++) {
	console.log("hello"+i)
}


const children = ['철수','영희','훈이']
for(let i = 0 ; i < 3 ; i++){
    console.log(children[i]+'입니다')
}

// 반복을 얼마나 할지 모르는경우는 
for(let i = 0 ; i < children.length ; i++){
    console.log(children[i]+'입니다')
}
// 이런식으로도 가능함.


// for 루프, if문 같이 써보기
let persons = [
    {name : "철수",age:17},
    {name : "영희",age:22},
    {name : "훈이",age:5},
    {name : "맹구",age:65},
    {name : "짱구",age:43}
]

for(let i = 0; i<persons.length;i++){
    if(persons[i].age >= 19){
        console.log(persons[i].name + "님은 성인 입니다.")
    } else {
        console.log(persons[i].name + "님은 미성년자 입니다.")
    }
}



// 수학 객체
String (Math.floor(Math.random() * 1000000)).padStart(6,0)
// padStart = 6자리 숫자가 안되면 앞부터 0을 채워라
console.log(String (Math.floor(Math.random() * 1000000)).padStart(6,0))
