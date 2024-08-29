// 완료 여부 체크를 위한 EventListener 추가
const newTag = function () {
        const todoInput = document.querySelector('#todo-input');
    if (window.event.keyCode === 13 && todoInput.value){
        const todoList= document.querySelector('#todo-list');
        const newLi = document.createElement('li')
        const newSpan = document.createElement('span')
        const newBtn = document.createElement('button')

        newBtn.addEventListener('click',() => {
            newLi.classList.toggle('complete')
        })

        newSpan.textContent = todoInput.value;
        newLi.appendChild(newBtn);
        newLi.appendChild(newSpan);
        todoList.appendChild(newLi);
        console.log(newLi)
        todoInput.value ='';
    }
}