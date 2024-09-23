import {Modal} from "antd"
import { useState } from "react"
import DaumPostcodeEmbed from 'react-daum-postcode';
import type { Address } from 'react-daum-postcode';

export default function ModalAlertPage() {

    const [isOpen, setIsOpen] = useState(false)

    const onToggleModal = () => {
        setIsOpen((a) => !a);
    }
    const handleComplete = (data : Address) => {
        console.log(data)
        onToggleModal();
    }
    return (
        <>
            <button onClick={onToggleModal}>모달창 열기</button>

             {/* 1. 모달을 숨기는 방식 */}
            <Modal title="모달 제목" open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
                <DaumPostcodeEmbed onComplete={handleComplete}  />
            </Modal>

            {/*  2. 모달을 삭제했다가 열었다가 하는 방식 */}
            {isOpen && (
                <Modal title="모달 제목" open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
                    <DaumPostcodeEmbed onComplete={handleComplete}  />
                </Modal>
            )}

        </>

    )
}