import { useState } from "react"
// useState를 기능을 쓰기 위해서 react 에서 가져오는것

export default function CounterLetDocumentPage(){
    const[ count, setCount ] = useState(0)
    
    function onClickCountUp () {
        setCount(count + 1)
    }

    function onClickCountDown () {
        setCount(count - 1)
     }


    return(
        <div>
            <div>{count}</div>    
            <button onClick={onClickCountUp}>카운트 올리기</button>
            <button onClick={onClickCountDown}>카운트 내리기</button>
        </div>
    )

}