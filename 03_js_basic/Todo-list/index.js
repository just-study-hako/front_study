const todoInput = document.querySelector('#todo-input');
const todoList= document.querySelector('#todo-list');
const savedTodolist = JSON.parse(localStorage.getItem('saved-items'));

console.log(savedTodolist)



// 완료 여부 체크를 위한 EventListener 추가
const newTag = function (storageData) {
    let todoContents = todoInput.value
    if(storageData){
        todoContents = storageData.contents
    }
    const newLi = document.createElement('li')
    const newSpan = document.createElement('span')
    const newBtn = document.createElement('button')

    newBtn.addEventListener('click',() => {
        newLi.classList.toggle('complete')
        saveItemsFn()
    })

    newLi.addEventListener('dblclick',() => {
        newLi.remove()
    })

    newSpan.textContent = todoContents;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value ='';
    saveItemsFn()
}

const keyCheck = function () {
    if (window.event.keyCode === 13 && todoInput.value){
        newTag()
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
            // class에 complete가 있나 없나 - 불린으로
        };
        saveItems.push(todoObj);
    }
    // console.log(saveItems);
    // console.log(String(saveItems))
    // console.log(JSON.stringify(saveItems))
    // console.log(typeof JSON.stringify(saveItems))
    localStorage.setItem('saved-items',JSON.stringify(saveItems))
}

if (savedTodolist) {
    for(let i = 0 ; i < savedTodolist.length; i++ ){
        newTag(savedTodolist[i])
    }
}