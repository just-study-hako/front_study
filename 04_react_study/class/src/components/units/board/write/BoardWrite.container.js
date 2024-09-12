import { useMutation } from "@apollo/client"
import { useState } from "react"
import BoardWriteUI from "./BoardWrite.presenter";
import {나의그래프큐엘셋팅} from "./BoardWrite.queries"

import {나의그래프큐엘셋팅} from "./BoardWrite.queries"     //export 는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter";          // export default는 한개만 가져오기
import aaaa from "./BoardWrite.presenter";                  // export default는 이름 별도 지정 가능

import BoardWriteUI, {apple} from "./BoardWrite.presenter";     // export default 와 export 함께 가져오기
import * as S from './BoardWrite.styles'                        // export 한방에 가져오기
S.BlueButton                    // export 한번에 가져온것 사용하기
S.RedInput

export default function BoardWrite () {
    // 로직은 담고 UI는 안담음
    const [writer,setWriter] = useState()
    const [title,setTitle] = useState()
    const [contents,setContents] = useState()

    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {  
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return(
        <BoardWriteUI 
            aaa={onClickSubmit} 
            bbb={onChangeWriter}
            ccc={onChangeTitle}
            ddd={onChangeContents}
        />
        /* 
        props = {
            aaa : onClickSubmit,
            bbb : onChangeWriter,
            ccc : onChangeTitle,
            ddd : onChangeContents
        }
        */
    )
}