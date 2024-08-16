const startWord = () => {
    
    // 내가 입력한 값 가져오기
    let myword = document.getElementById("myword").value
    // 현재의 제시어 가져오기
    let word = document.getElementById("word").innerText

    // 제시어의 마지막 글자
    let lastword = word[word.length-1]
    // 내가 입력한 값의 첫글자
    let firstmyword = myword[0]

    // 두 글자가 같은지 비교
    if(lastword === firstmyword){
        // 같으면 정답입니다! 출력하고
        document.getElementById("result").innerText = "정답입니다!"
        // 제시어를 내가 입력했던 값으로 변경해줌
        document.getElementById("word").innerText = myword
        // 입력하는 공간은 빈칸으로 만들어줌
        document.getElementById("myword").value = ""
    }else {
        // 오답일 때
        // 땡 이라고 출력하고
        document.getElementById("result").innerText = "땡!"
        // 입력하는 공간을 빈칸으로 만듬
        document.getElementById("myword").value = ""
    }

}


// pickLotto

const pickLotto = () => {
    // 값을 저장할 6개의 공간
    let number = [];


    while(true){
        // 새로운 숫자를 받기
        newNumber =  Math.floor(Math.random() * 45) + 1
        // 현재 배열에 새로운 숫자랑 같은 숫자가 있는지 확인하기
        if(number.length === 0){
            number.push(newNumber)
        }
        for(let i = 0 ;i<number.length;i++){
            // 만약 같은 숫자가 있으면 for 루프문 그냥 빠져나가고
            if(number[i] === newNumber){
                break
            }else{
                // 같은숫자가 없으면 배열에 새로운 숫자를 추가하고 for루프문 종료
                number.push(newNumber)
                break
            }
        }

        // 종료 조건 = number 배열에 6개의 숫자가 있을경우
        if(number.length === 6){
            break;
        }
    }

    
    // 만들 값들을 각각 집어넣어주기

    for(let i = 0; i < 6 ; i ++){
        document.getElementById("number"+(i+1)).innerText = number[i]
    }

}