function greeting(){
    
    document.getElementById("target").innerText = "World"
   
    // innerText 까지만 하면 값을 가져오기만함. = 하고 값을 입력하면 재할당 시킴
}

// function greeting(){
//     if(document.getElementById("target").innerText === "Hello"){
//         document.getElementById("target").innerText = "World"
//     } else{
//         document.getElementById("target").innerText = "Hello"
//     }
// }


// innerText는 시작태그와 종료 태그 사이의 값을 바꿔주는데
// input의 경우는 시작태그만 있기에 innerText를 사용할 수 없음
// 대신 value를 사용함.

function greeting(){
    
    document.getElementById("input").value = "World"
   
    // innerText 까지만 하면 값을 가져오기만함. = 하고 값을 입력하면 재할당 시킴
}

// 함수 이름 똑같아서 위쪽 함수는 동작안함.