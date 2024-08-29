const checkInput = function () {
    // 인풋 박스에 입력된 데이터 가져오려면
    const inputValue = document.querySelector('#todo-input').value;
    console.log(inputValue)
}

// 특정 키를 인식하여 함수를 동작시키기
const keyCodeCheck = function () {
    if (window.event.keyCode === 13){
        const inputValue = document.querySelector('#todo-input').value;
        console.log(inputValue)
    }
}

// 새로운 li 태그를 만들기
const newTag = function () {
        const todoInput = document.querySelector('#todo-input');
    if (window.event.keyCode === 13 && todoInput.value){
        const todoList= document.querySelector('#todo-list');
        const newLi = document.createElement('li')
        const newSpan = document.createElement('span')

        newSpan.textContent = todoInput.value;
        newLi.appendChild(newSpan);
        todoList.appendChild(newLi)
        todoInput.value ='';
    }
}