import { RedInput, BlueButton } from "./BoardWrite.styles"

export default function BoardWriteUI (props) {
    // 로직은 안담고 UI만 담음

    return(
        <div>
        작성자: <RedInput type="text" onChange={props.bbb}/>
        제목: <RedInput type="text"  onChange={props.ccc}/>
        내용: <RedInput type="text"  onChange={props.ddd}/>
        <BlueButton onClick={props.aaa}>GRAPHQL-API 요청하기</BlueButton>
        </div>
    )
}

export const apple = 3;