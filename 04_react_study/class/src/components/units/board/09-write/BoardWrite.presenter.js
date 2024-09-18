import { RedInput, BlueButton } from "./BoardWrite.styles"

export default function BoardWriteUI (props) {
    // 로직은 안담고 UI만 담음

    return(
        <div>
            작성자: <RedInput type="text" onChange={props.onChangeWriter}/>
            제목: <RedInput type="text"  onChange={props.onChangeTitle}/>
            내용: <RedInput type="text"  onChange={props.onChangeContents}/>
            <BlueButton onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}>
                {props.isEdit ? "수정" : "등록"}하기
            </BlueButton>
        </div>
    )
}