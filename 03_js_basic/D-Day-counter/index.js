const messageContainer = document.querySelector('#d-day-message');
const container = document.querySelector('#d-day-container');

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


const counterMaker = function ()  {
    const messageContainer = document.querySelector('#d-day-message');
    const container = document.querySelector('#d-day-container');

    const targetDateInput = dateFormMaker();
    const nowDate = new Date();
    const targetDate = new Date(targetDateInput).setHours(0,0,0,0);
    const remaining = (targetDate - nowDate) / 1000
    // 만약 remaining 이 0 이된다면, 타이머가 종료 되었습니다 출력
    // console.log(remaining);
    // 이상한 날짜를 입력하면 NaN 값을 리턴받아옴
    if(remaining <= 0){
        // console.log('타이머가 종료 되었습니다.');
        messageContainer.innerHTML = '<h3>타이머가 종료되었습니다.</h3>';
        messageContainer.style.display = 'flex'
        container.style.display = 'none'
        return;
    } else if (isNaN(remaining)) {
        // 만약 잘못된 날짜가 들어왔다면
        // 유효한 시간대가 아닙니다 출력

        // NaN 은 === 비교 연산자로는 안됨
        // console.log('유효한 시간대가 아닙니다.');
        messageContainer.innerHTML = '<h3>유효한 시간대가 아닙니다.</h3>';
        messageContainer.style.display = 'flex'
        container.style.display = 'none'
        return;
    }
    
    // 남은시간을 계산한 obj
    const remainingObj = {
        remainingDate : Math.floor(remaining / 3600 / 24),
        remainingHours : Math.floor((remaining / 3600) % 24),
        remainingMin : Math.floor((remaining / 60) % 60),
        remainingSec : Math.floor(remaining) % 60,
    };

    /*
    // // 현재 출력되어있는 값
    // const documentObj = {
    //     days: document.getElementById('days'),
    //     hours: document.getElementById('hours'),
    //     min: document.getElementById('min'),
    //     sec: document.getElementById('sec'),
    // }
    const timeKeys = Object.keys(remainingObj);
    // const docKeys = Object.keys(documentObj);
    // 키값만 가져옴
    // console.log(timeKeys , docKeys)

    // for(let i = 0 ; i < timeKeys.length; i ++){
    //     documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
    // }

    // 위 for문과 기능은 동일한 for-in
    let i = 0;
    // for(let key in documentObj){
    //     documentObj[key].textContent = remainingObj[timeKeys[i]];
    //     i++
    // }
    */

    // 위 주석한 부분 압축한 내용
    const timeKeys = Object.keys(remainingObj);
    let i = 0;
    const documentArr = ['days','hours', 'min','sec'];

    for(let tag of documentArr){
        document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
        i++
    }
};


const starter = function  () {
    const messageContainer = document.querySelector('#d-day-message');
    const container = document.querySelector('#d-day-container');
    
    container.style.display = 'flex'
    messageContainer.style.display = 'none'

    for (let i = 0; i < 100 ;i++){
        setTimeout( () => {
            counterMaker()
        },1000 * i );
    }
}