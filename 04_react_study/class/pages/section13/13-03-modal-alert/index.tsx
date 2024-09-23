import {Modal} from "antd"


export default function ModalAlertPage() {

    const onClickSuccess = () :void => {
        Modal.success({
            content: "게시글 등록에 성공했습니다.",
        })
    }

    const onClickError = () :void => {
        Modal.error({
            content: "게시글 등록에 실패하였습니다.",
        })
    }
    return (
        <div>
            <button onClick={onClickSuccess}>성공</button>
            <button onClick={onClickError}>실패</button>
        </div>

    )
}