export default function BoardComponent(props) {
    return(
        // 대부분의 component는 각각 component끼리 묶여 있는게 좋기에
        // Fragment 보다는 div로 묶어 주는게 좋음 
        // 또한 어디서 import 될지 모르는데 부모의 css와 충돌이 날 수도 있기에 div로 나누는게 좋음.
        <div>
            <h1>{props.isEdit ? "수정": "등록"}페이지</h1>
            제목 : <input type="text" /><br/>
            내용 : <input type="text" /><br/>
            <button>{props.isEdit ? "수정": "등록"}하기</button>
        </div>
    )
}


