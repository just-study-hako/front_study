// 완료 여부 체크를 위한 EventListener 추가

const todoInput = document.querySelector('#todo-input');
const todoList= document.querySelector('#todo-list');

const newTag = function () {
    if (window.event.keyCode === 13 && todoInput.value){
        const newLi = document.createElement('li')
        const newSpan = document.createElement('span')
        const newBtn = document.createElement('button')

        newBtn.addEventListener('click',() => {
            newLi.classList.toggle('complete')
        })

        newLi.addEventListener('dblclick',() => {
            newLi.remove()
        })

        newSpan.textContent = todoInput.value;
        newLi.appendChild(newBtn);
        newLi.appendChild(newSpan);
        todoList.appendChild(newLi);
        todoInput.value ='';
        saveItemsFn()
    }
}

// 전체 삭제 버튼 기능
const deleteAll = function () {
    const liList = document.querySelectorAll('li');
    for(let i = 0 ; i < liList.length; i ++ ){
        liList[i].remove();
    }
}

// 로컬 스토리지에 저장
const saveItemsFn = function () {
    const saveItems = [];
    // 데이터를 가져오는 방법
    // console.log(todoList.children[0].querySelector('span').textContent);
    // 위의 방식을 사용할것.

    for(let i = 0 ; i < todoList.children.length; i++ ){
        const todoObj = {
            contents : todoList.children[i].querySelector('span').textContent,
            complete : todoList.children[i].classList.contains('complete')  
        };
        saveItems.push(todoObj);
    }
    console.log(saveItems);
}