import axios from "axios"
import 나만의페이지 from '../../section01/01-01-example'
//  다른데서 만든 js도 가져와서 하나의 페이지로 합칠 수 있음.
export default function RestGetPage () {

    function onClickAsync() {
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result)     // Promise 가 나오게됨.
    }

    async function onClickSync() {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result)  // 제대로된 결과
    }

    return (
        <div>
            <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
            <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
            <나만의페이지/>
        </div>
    )
}