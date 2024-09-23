import {Modal} from "antd"
import { useState } from "react"
import DaumPostcodeEmbed from 'react-daum-postcode';
import type { Address } from 'react-daum-postcode';

export default function ModalAlertPage() {

    const [isOpen, setIsOpen] = useState(false)

    const showModal = () => {
        setIsOpen(true);
    }

    const handleOk = () => {
        setIsOpen(false);
    }

    const handleCancel = () => {
        setIsOpen(false);
    }

    const handleComplete = (data : Address) => {
        console.log(data)
        setIsOpen(false)
    }
    return (
        <>
            <button onClick={showModal}>모달창 열기</button>

             {/* 1. 모달을 숨기는 방식 */}
            <Modal title="모달 제목" open={isOpen} onOk={handleOk} onCancel={handleCancel}>
                <DaumPostcodeEmbed onComplete={handleComplete}  />
            </Modal>

            {/*  2. 모달을 삭제했다가 열었다가 하는 방식 */}
            {isOpen && (
                <Modal title="모달 제목" open={isOpen} onOk={handleOk} onCancel={handleCancel}>
                    <DaumPostcodeEmbed onComplete={handleComplete}  />
                </Modal>
            )}

        </>

    )
}