// function hello() {
//     alert("안녕하세요")
// }

// // hello()


// function hello2(name) {
//     alert(name + '님 안녕하세요')
// }

// let friend = '홍길동'
// hello2(friend)

// 함수 선언식
function get__Authen__number(){
    let a = String (Math.floor(Math.random() * 1000000)).padStart(6,0)
    document.getElementById("Authen__number").innerText = a
}



// 화살표 함수 + 누를때마다 색 바꾸기
const get__Authen__number2 = () => {
    let b = String (Math.floor(Math.random() * 1000000)).padStart(6,0)
    document.getElementById("Authen__number2").innerText = b
    document.getElementById("Authen__number2").style.color = "#" + b
}