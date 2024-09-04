export default function CounterLetDocumentPage(){
    
    function onClickCountUp () {
        const count = Number(document.getElementById("countNumber").innerText) + 1;
        // countNumber 값을 가져와서 +1 해서 count 변수에 저장
        document.getElementById("countNumber").innerText = count;
        // countNumber 에 count 값을 반환
    }

    function onClickCountDown () {
        const count = Number(document.getElementById("countNumber").innerText) - 1;
        document.getElementById("countNumber").innerText = count;
    }


    return(
        <div>
            <div id="countNumber">0</div>    
            <button onClick={onClickCountUp}>카운트 올리기</button>
            <button onClick={onClickCountDown}>카운트 내리기</button>
        </div>
    )

}