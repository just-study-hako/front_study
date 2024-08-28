// const messageContainer = document.querySelector('#d-day-message');
// const container = document.querySelector('#d-day-container');

// // container.style.display = 'none'
// messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';


document.addEventListener('DOMContentLoaded', function() {
    const messageContainer = document.querySelector('#d-day-message');
    const container = document.querySelector('#d-day-container');

    container.style.display = 'none'
    messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';
});

// document.addEventListener 이거 안감싸면 
// TypeError: Cannot set properties of null (setting 'innerHTML') 이런 에러남
/*
이 오류는 JavaScript 코드가 실행될 때, 
#d-day-message라는 ID를 가진 요소가 아직 DOM에 존재하지 않아서 발생합니다. 
따라서 document.querySelector('#d-day-message')가 null을 반환하고, 
이 null에 대해 innerHTML 속성을 설정하려고 시도할 때 TypeError가 발생하게 됩니다.
*/

const dateFormMaker = function () {
    const inputYear = document.querySelector('#target-year-input').value;
    const inputMonth = document.querySelector('#target-month-input').value;
    const inputDate = document.querySelector('#target-day-input').value;
    
    const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
    // console.log(dateFormat)
    return dateFormat;

}


const counterMaker = function (data)  {
    const messageContainer = document.querySelector('#d-day-message');
    const container = document.querySelector('#d-day-container');

    const nowDate = new Date();
    const targetDate = new Date(data).setHours(0,0,0,0);
    const remaining = (targetDate - nowDate) / 1000
    // 만약 remaining 이 0 이된다면, 타이머가 종료 되었습니다 출력
    // console.log(remaining);
    // 이상한 날짜를 입력하면 NaN 값을 리턴받아옴
    if(remaining <= 0){
        // console.log('타이머가 종료 되었습니다.');
        messageContainer.innerHTML = '<h3>타이머가 종료되었습니다.</h3>';
        messageContainer.style.display = 'flex'
        container.style.display = 'none'
        setClearInterval();
        return;
    } else if (isNaN(remaining)) {
        // 만약 잘못된 날짜가 들어왔다면
        // 유효한 시간대가 아닙니다 출력

        // NaN 은 === 비교 연산자로는 안됨
        // console.log('유효한 시간대가 아닙니다.');
        messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다.</h3>';
        messageContainer.style.display = 'flex'
        container.style.display = 'none'
        setClearInterval();
        return;
    }
    
    // 남은시간을 계산한 obj
    const remainingObj = {
        remainingDate : Math.floor(remaining / 3600 / 24),
        remainingHours : Math.floor((remaining / 3600) % 24),
        remainingMin : Math.floor((remaining / 60) % 60),
        remainingSec : Math.floor(remaining) % 60,
    };

    const format = function(time) {
        if(time < 10 ){
            return '0'+time;
        } else {
            return time;
        }
    }


    const timeKeys = Object.keys(remainingObj);
    let i = 0;
    const documentArr = ['days','hours', 'min','sec'];

    for(let tag of documentArr){
        const remainingTime =  format(remainingObj[timeKeys[i]]);
        document.getElementById(tag).textContent = remainingTime;
        i++
    }
};

const intervalIdArr =[]

const starter = function  () {

    const messageContainer = document.querySelector('#d-day-message');
    const container = document.querySelector('#d-day-container');
    
    container.style.display = 'flex'
    messageContainer.style.display = 'none'
    
    const targetDateInput = dateFormMaker();
    counterMaker(targetDateInput)
    const intervalId =  setInterval(() => {counterMaker(targetDateInput)},1000);
    //  setInterval에 함수를 넣을때
    /*
    함수를 써서 직접 넣어주면 매회차마다 함수가 동작함
        () => {counterMaker(targetDateInput)}
    그냥 함수를 넣어주면 한번만 실행하고 결과값만 반복함
        counterMaker(targetDateInput)
     */
    intervalIdArr.push(intervalId)
}


const setClearInterval = function () {
    for (let i = 0 ; i < intervalIdArr.length; i++){
        clearInterval(intervalIdArr[i]);
    }
}

const resetTimer = function () {
    const messageContainer = document.querySelector('#d-day-message');
    const container = document.querySelector('#d-day-container');
    container.style.display = 'none';
    messageContainer.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';
    messageContainer.style.display = 'flex';
    setClearInterval();
}