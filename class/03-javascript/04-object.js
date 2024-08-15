let friend = {
    name : "철수",
    age : 13,
    home : "서울"
}
console.log(friend)

// 값 가져오기
console.log(friend.name)
console.log(friend.age)
console.log(friend.test)    // 없는 것을 입력해도 오류는 발생하지 않음 undefined 가 출력됨



// 배열에 객체 저장하기
let classmates = [
    friend,
    {name : "영희",age : 8,home : "경기"},
    {name : "훈이",age : 12,home : "인천"},
]
console.log(classmates) 

console.log(classmates.length) 

// 객체안의 값을 가져오기
console.log(classmates[0].home) 
console.log(classmates[2].age) 


// 인기 검색어 처럼 출력하기

const fruits = [
    {number : 1, title: "레드향"},
    {number : 2, title: "샤인머스켓"},
    {number : 3, title: "산청딸기"},
    {number : 4, title: "한라봉"},
    {number : 5, title: "사과"},
    {number : 6, title: "애플망고"},
    {number : 7, title: "딸기"},
    {number : 8, title: "천혜향"},
    {number : 9, title: "과일선물세트"},
    {number : 10, title: "뀰"},
]

for(let i = 0;i<fruits.length;i++){
    console.log(fruits[i].number+ " " +fruits[i].title)
}

for(let i = 0;i<fruits.length;i++){
    console.log(`${fruits[i].number} ${fruits[i].title}`)
}